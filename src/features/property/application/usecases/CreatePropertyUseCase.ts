import { PropertyRepository } from '../../infrastructure/repositories/PropertyRepository';
import { AppError } from '@/shared/domain/errors/AppError';
import { UserPreferencesRepository } from '@/features/user/infrastructure/repositories/UserPreferencesRepository';
import { NotificationRepository } from '@/features/notification/infrastructure/repositories/NotificationRepository';
import { PushNotificationService } from '@/features/notification/application/usecases/PushNotificationService';
import { NotificationType } from '@/features/notification/domain/types/notification.types';
import { emitNotificationToUsers } from '@/socket';

export class CreatePropertyUseCase {
    constructor(private repo: PropertyRepository) { }

    async execute(data: any) {
        if (!data.ownerId) {
            throw new AppError('Authentication required', 401);
        }

        const created = await this.repo.createProperty(data);

        try {
   
            const userPreferencesRepo = new UserPreferencesRepository();
            const matchedUserIds = await userPreferencesRepo.findUsersMatchingProperty(
                created.city || null,
                created.operationType || null,
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