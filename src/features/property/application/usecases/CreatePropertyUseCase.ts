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

  

        const created = await this.repo.createProperty(data);

        try {
   
            const userPreferencesRepo = new UserPreferencesRepository();
            const matchedUserIds = await userPreferencesRepo.findUsersMatchingProperty(
                created.city || null,
                created.operationTypeId || null,
            );

        
            const recipients = matchedUserIds.filter((id) => id !== created.ownerId);

            if (recipients.length > 0) {
                const notificationRepo = new NotificationRepository();
           
                const createdNotifications = [] as any[];

                for (const userId of recipients) {
                    const notif = await notificationRepo.createNotification({
                        userId,
                        type: NotificationType.NEW_PROPERTY,
                        title: 'Nuevo inmueble disponible',
                        content: `${created.title} en ${created.city || 'ubicación'}`,
                        metadata: { propertyId: created.id },
                    });
                    createdNotifications.push(notif);
                }

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
                const pushService = new PushNotificationService(notificationRepo);
                await pushService.sendPushToMultipleUsers(
                    recipients,
                    'Nuevo inmueble',
                    `${created.title} en ${created.city || 'ubicación'}`,
                    { propertyId: created.id },
                );

         
                for (const notif of createdNotifications) {
                    try {
                        await notificationRepo.markPushSent(notif.id);
                    } catch (e) {
                   
                        console.error('Error marcando pushSent:', e);
                    }
                }
            }
        } catch (error) {
            console.error('Error notificando a usuarios:', error);
        }

        return created;
    }
}