import { PropertyRepository } from '../../infrastructure/repositories/PropertyRepository';
import { AppError } from '@/shared/domain/errors/AppError';
import { UserPreferencesRepository } from '@/features/user/infrastructure/repositories/UserPreferencesRepository';
import { NotificationRepository } from '@/features/notification/infrastructure/repositories/NotificationRepository';
import { PushNotificationService } from '@/features/notification/application/usecases/PushNotificationService';
import { NotificationType } from '@/features/notification/domain/types/notification.types';
import { emitNotificationToUsers } from '@/socket';
import prisma from '@/config/prisma';

export class CreatePropertyUseCase {
    constructor(private repo: PropertyRepository) { }

    async execute(data: any) {
        if (!data.ownerId) {
            throw new AppError('Authentication required', 401);
        }

        // If related IDs are provided, ensure they exist in DB
        if (data.operationTypeId) {
            const op = await prisma.operationType.findUnique({ where: { id: data.operationTypeId }, select: { id: true } });
            if (!op) throw AppError.notFound('OperationType not found');
        }

        if (data.propertyTypeId) {
            const pt = await prisma.propertyType.findUnique({ where: { id: data.propertyTypeId }, select: { id: true } });
            if (!pt) throw AppError.notFound('PropertyType not found');
        }

        if (data.provinceId) {
            const prov = await prisma.province.findUnique({ where: { id: data.provinceId }, select: { id: true } });
            if (!prov) throw AppError.notFound('Province not found');
        }

        if (data.paymentId) {
            const payment = await prisma.payment.findUnique({ where: { id: data.paymentId }, select: { id: true } });
            if (!payment) throw AppError.notFound('Payment type not found');
        }

        const created = await this.repo.createProperty(data);

        // Ejecutar notificaciones de forma asíncrona sin bloquear la respuesta
        setImmediate(async () => {
            try {
                // Obtener el nombre de la provincia desde la relación o usar city como fallback
                const provinceName = created.province?.name || created.city || null;
       
                const userPreferencesRepo = new UserPreferencesRepository();
                const matchedUserIds = await userPreferencesRepo.findUsersMatchingProperty(
                    provinceName,
                    created.operationTypeId || null,
                );

                console.log(`[CreatePropertyUseCase] Propiedad creada: ${created.title}`);
                console.log(`[CreatePropertyUseCase] Provincia: ${provinceName}, OperationTypeId: ${created.operationTypeId}`);
                console.log(`[CreatePropertyUseCase] Usuarios encontrados: ${matchedUserIds.length}`, matchedUserIds);
            
                const recipients = matchedUserIds.filter((id) => id !== created.ownerId);
                
                console.log(`[CreatePropertyUseCase] Usuarios a notificar (excluyendo owner): ${recipients.length}`, recipients);

                if (recipients.length > 0) {
                    const notificationRepo = new NotificationRepository();
               
                    const createdNotifications = [] as any[];

                    // Crear notificaciones en paralelo
                    const notificationPromises = recipients.map(userId =>
                        notificationRepo.createNotification({
                            userId,
                            type: NotificationType.NEW_PROPERTY,
                            title: 'Nuevo inmueble disponible',
                            content: `${created.title} en ${created.city || 'ubicación'}`,
                            metadata: { propertyId: created.id },
                        })
                    );
                    
                    const notifications = await Promise.all(notificationPromises);
                    createdNotifications.push(...notifications);

                    // Emit real-time notification via sockets
                    try {
                        const payload = {
                            type: NotificationType.NEW_PROPERTY,
                            title: 'Nuevo inmueble disponible',
                            content: `${created.title} en ${created.city || 'ubicación'}`,
                            metadata: { propertyId: created.id },
                            createdAt: new Date().toISOString(),
                        };
                        emitNotificationToUsers(recipients, payload);
                    } catch (e) {
                        console.error('Error emitiendo notificaciones por socket:', e);
                    }
                    
                    // Enviar push notifications en paralelo (sin esperar)
                    const pushService = new PushNotificationService(notificationRepo);
                    pushService.sendPushToMultipleUsers(
                        recipients,
                        'Nuevo inmueble',
                        `${created.title} en ${created.city || 'ubicación'}`,
                        { propertyId: created.id },
                    ).catch((e) => {
                        console.error('Error enviando push notifications:', e);
                    });

                    // Marcar push sent después de un delay
                    setTimeout(async () => {
                        for (const notif of createdNotifications) {
                            try {
                                await notificationRepo.markPushSent(notif.id);
                            } catch (e) {
                                console.error('Error marcando pushSent:', e);
                            }
                        }
                    }, 2000);
                }
            } catch (error) {
                console.error('Error notificando a usuarios:', error);
            }
        });

        return created;
    }
}