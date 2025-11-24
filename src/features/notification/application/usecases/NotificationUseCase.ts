import { NotificationRepository } from "../../infrastructure/repositories/NotificationRepository";
import { PushNotificationService } from "./PushNotificationService";
import {
  CreateNotificationDTO,
  NotificationFilters,
  DeviceTokenDTO,
  NotificationType,
} from "../../domain/types/notification.types";
import { Notification } from "@prisma/client";

export class NotificationUseCase {
  private notificationRepository: NotificationRepository;
  private pushService: PushNotificationService;

  constructor(notificationRepository: NotificationRepository) {
    this.notificationRepository = notificationRepository;
    this.pushService = new PushNotificationService(notificationRepository);
  }

  async createNotification(data: CreateNotificationDTO): Promise<Notification> {
    const notification =
      await this.notificationRepository.createNotification(data);

    if (data.sendPush !== false) {
      const sent = await this.pushService.sendPushToUser(
        data.userId,
        data.title,
        data.content,
        {
          notificationId: notification.id,
          type: data.type,
          ...data.metadata,
        },
      );

      if (sent) {
        await this.notificationRepository.markPushSent(notification.id);
      } else {
        console.error(`Error enviando notificación push al usuario ${data.userId}`);
      }
    }

    return notification;
  }

  async getUserNotifications(
    filters: NotificationFilters,
  ): Promise<Notification[]> {
    return await this.notificationRepository.getNotifications(filters);
  }

  async markAsRead(
    notificationId: string,
    userId: string,
  ): Promise<Notification> {
    const notification =
      await this.notificationRepository.getNotificationById(notificationId);

    if (!notification) {
      throw new Error("Notification not found");
    }

    if (notification.userId !== userId) {
      throw new Error("Unauthorized");
    }

    return await this.notificationRepository.markAsRead(notificationId);
  }

  async markAllAsRead(userId: string): Promise<{ count: number }> {
    const count = await this.notificationRepository.markAllAsRead(userId);
    return { count };
  }

  async deleteNotification(
    notificationId: string,
    userId: string,
  ): Promise<Notification> {
    const notification =
      await this.notificationRepository.getNotificationById(notificationId);

    if (!notification) {
      throw new Error("Notification not found");
    }

    if (notification.userId !== userId) {
      throw new Error("Unauthorized");
    }

    return await this.notificationRepository.deleteNotification(notificationId);
  }

  async deleteAllNotifications(userId: string): Promise<{ count: number }> {
    const count =
      await this.notificationRepository.deleteAllNotifications(userId);
    return { count };
  }

  async getUnreadCount(userId: string): Promise<{ count: number }> {
    const count = await this.notificationRepository.getUnreadCount(userId);
    return { count };
  }

  async registerDeviceToken(data: DeviceTokenDTO): Promise<void> {
    await this.notificationRepository.saveDeviceToken(data);
  }

  async removeDeviceToken(token: string): Promise<void> {
    await this.notificationRepository.removeDeviceToken(token);
  }

  async removeAllUserTokens(userId: string): Promise<void> {
    await this.notificationRepository.removeAllUserTokens(userId);
  }

  async notifyNewInterest(
    propertyOwnerId: string,
    propertyTitle: string,
    userName: string,
    propertyId: string,
    interestId: string,
  ): Promise<void> {
    await this.createNotification({
      userId: propertyOwnerId,
      type: NotificationType.NEW_INTEREST,
      title: "¡Nuevo interés en tu propiedad!",
      content: `${userName} está interesado en "${propertyTitle}"`,
      metadata: { propertyId, interestId },
      sendPush: true,
    });
  }

  async notifyNewMessage(
    receiverId: string,
    senderName: string,
    messagePreview: string,
    senderId: string,
    conversationId?: string,
  ): Promise<void> {
    await this.createNotification({
      userId: receiverId,
      type: NotificationType.NEW_MESSAGE,
      title: `Mensaje de ${senderName}`,
      content: messagePreview.substring(0, 100),
      metadata: { senderId, conversationId },
      sendPush: true,
    });
  }

  async notifyNewReview(
    propertyOwnerId: string,
    propertyTitle: string,
    rating: number,
    propertyId: string,
    reviewId: string,
  ): Promise<void> {
    await this.createNotification({
      userId: propertyOwnerId,
      type: NotificationType.NEW_REVIEW,
      title: "Nueva reseña en tu propiedad",
      content: `Recibiste una reseña de ${rating} estrellas en "${propertyTitle}"`,
      metadata: { propertyId, rating, reviewId },
      sendPush: true,
    });
  }

  async notifyInterestAccepted(
    userId: string,
    propertyTitle: string,
    propertyId: string,
    interestId: string,
  ): Promise<void> {
    await this.createNotification({
      userId,
      type: NotificationType.INTEREST_ACCEPTED,
      title: "¡Tu interés fue aceptado!",
      content: `El propietario aceptó tu interés en "${propertyTitle}"`,
      metadata: { propertyId, interestId },
      sendPush: true,
    });
  }

  async notifyInterestRejected(
    userId: string,
    propertyTitle: string,
    propertyId: string,
    interestId: string,
    reason?: string,
  ): Promise<void> {
    const content = reason
      ? `El propietario rechazó tu interés en "${propertyTitle}". Motivo: ${reason}`
      : `El propietario rechazó tu interés en "${propertyTitle}"`;

    await this.createNotification({
      userId,
      type: NotificationType.INTEREST_REJECTED,
      title: "Interés rechazado",
      content,
      metadata: { propertyId, interestId, reason },
      sendPush: true,
    });
  }

  async notifyPropertyApproved(
    ownerId: string,
    propertyTitle: string,
    propertyId: string,
  ): Promise<void> {
    await this.createNotification({
      userId: ownerId,
      type: NotificationType.PROPERTY_APPROVED,
      title: "¡Tu propiedad fue aprobada!",
      content: `"${propertyTitle}" ya está visible para todos los usuarios.`,
      metadata: { propertyId },
      sendPush: true,
    });
  }

  async notifyPropertyRejected(
    ownerId: string,
    propertyTitle: string,
    propertyId: string,
    reason: string,
  ): Promise<void> {
    await this.createNotification({
      userId: ownerId,
      type: NotificationType.PROPERTY_REJECTED,
      title: "Tu propiedad necesita correcciones",
      content: `"${propertyTitle}" - ${reason}`,
      metadata: { propertyId, reason },
      sendPush: true,
    });
  }

  async notifyPropertyRented(
    ownerId: string,
    propertyTitle: string,
    propertyId: string,
    renterName: string,
  ): Promise<void> {
    await this.createNotification({
      userId: ownerId,
      type: NotificationType.PROPERTY_RENTED,
      title: "¡Tu propiedad fue rentada!",
      content: `"${propertyTitle}" fue rentada por ${renterName}`,
      metadata: { propertyId },
      sendPush: true,
    });
  }

  async notifyPropertyAvailable(
    ownerId: string,
    propertyTitle: string,
    propertyId: string,
  ): Promise<void> {
    await this.createNotification({
      userId: ownerId,
      type: NotificationType.PROPERTY_AVAILABLE,
      title: "Tu propiedad está disponible",
      content: `"${propertyTitle}" está nuevamente disponible para rentar`,
      metadata: { propertyId },
      sendPush: true,
    });
  }

  async sendRecommendation(
    userId: string,
    propertyTitle: string,
    propertyId: string,
    reason: string,
  ): Promise<void> {
    await this.createNotification({
      userId,
      type: NotificationType.RECOMMENDATION,
      title: "Propiedad recomendada para ti",
      content: `"${propertyTitle}" - ${reason}`,
      metadata: { propertyId },
      sendPush: false,
    });
  }

  async notifyPriceDrop(
    userId: string,
    propertyTitle: string,
    propertyId: string,
    oldPrice: number,
    newPrice: number,
  ): Promise<void> {
    await this.createNotification({
      userId,
      type: NotificationType.PRICE_DROP,
      title: "¡Bajó el precio!",
      content: `"${propertyTitle}" ahora cuesta Bs. ${newPrice} (antes Bs. ${oldPrice})`,
      metadata: { propertyId, oldPrice, newPrice },
      sendPush: true,
    });
  }

  async notifyNewPropertyInArea(
    userId: string,
    propertyTitle: string,
    propertyId: string,
    area: string,
  ): Promise<void> {
    await this.createNotification({
      userId,
      type: NotificationType.NEW_PROPERTY_AREA,
      title: "Nueva propiedad en tu zona",
      content: `"${propertyTitle}" en ${area}`,
      metadata: { propertyId, area },
      sendPush: false,
    });
  }

  async sendWelcomeNotification(
    userId: string,
    userName: string,
  ): Promise<void> {
    await this.createNotification({
      userId,
      type: NotificationType.WELCOME,
      title: "¡Bienvenido a RentaYa!",
      content: `Hola ${userName}, estamos felices de tenerte aquí. Explora las mejores propiedades en Cochabamba.`,
      metadata: {},
      sendPush: true,
    });
  }

  async notifyAccountVerified(userId: string, userName: string): Promise<void> {
    await this.createNotification({
      userId,
      type: NotificationType.ACCOUNT_VERIFIED,
      title: "¡Cuenta verificada!",
      content: `${userName}, tu cuenta ha sido verificada exitosamente. Ahora puedes publicar propiedades.`,
      metadata: {},
      sendPush: true,
    });
  }

  async sendSystemNotification(
    userId: string,
    title: string,
    content: string,
    metadata?: Record<string, any>,
  ): Promise<void> {
    await this.createNotification({
      userId,
      type: NotificationType.SYSTEM,
      title,
      content,
      metadata: metadata || {},
      sendPush: true,
    });
  }

  async sendBulkSystemNotification(
    userIds: string[],
    title: string,
    content: string,
  ): Promise<void> {
    for (const userId of userIds) {
      await this.createNotification({
        userId,
        type: NotificationType.SYSTEM,
        title,
        content,
        metadata: {},
        sendPush: true,
      });
    }
  }

  async sendBulkRecommendations(
    recommendations: Array<{
      userId: string;
      propertyTitle: string;
      propertyId: string;
      reason: string;
    }>,
  ): Promise<void> {
    for (const rec of recommendations) {
      await this.sendRecommendation(
        rec.userId,
        rec.propertyTitle,
        rec.propertyId,
        rec.reason,
      );
    }
  }
}
