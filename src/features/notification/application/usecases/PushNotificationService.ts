import { Expo, ExpoPushMessage, ExpoPushTicket } from "expo-server-sdk";
import { NotificationRepository } from "../../infrastructure/repositories/NotificationRepository";

export class PushNotificationService {
  private expo: Expo;
  private notificationRepository: NotificationRepository;

  constructor(notificationRepository: NotificationRepository) {
    this.notificationRepository = notificationRepository;

    const expoOptions: any = {
      useFcmV1: true,
    };

    if (process.env.EXPO_ACCESS_TOKEN) {
      expoOptions.accessToken = process.env.EXPO_ACCESS_TOKEN;
    }

    this.expo = new Expo(expoOptions);
  }

  async sendPushToUser(
    userId: string,
    title: string,
    body: string,
    data?: Record<string, any>,
  ): Promise<boolean> {
    try {
      const deviceTokens =
        await this.notificationRepository.getDeviceTokens(userId);

      if (deviceTokens.length === 0) {
        return false;
      }

      const messages: ExpoPushMessage[] = [];

      for (const device of deviceTokens) {
        if (!Expo.isExpoPushToken(device.token)) {
          console.error(`Token inválido: ${device.token}`);
          await this.notificationRepository.removeDeviceToken(device.token);
          continue;
        }

        messages.push({
          to: device.token,
          sound: "default",
          title: title,
          body: body,
          data: data || {},
          badge: 1,
          priority: "high",
        });
      }

      if (messages.length === 0) {
        return false;
      }

      const chunks = this.expo.chunkPushNotifications(messages);

      for (const chunk of chunks) {
        try {
          const tickets = await this.expo.sendPushNotificationsAsync(chunk);

          tickets.forEach((ticket: ExpoPushTicket, index: number) => {
            if (ticket.status === "error") {
              console.error(`Error enviando push: ${ticket.message}`);

              if ((ticket as any).details?.error === "DeviceNotRegistered") {
                const token = chunk[index]!.to as string;
                this.notificationRepository.removeDeviceToken(token);
              }
            } else {
              console.error(`Push enviado con éxito a ${chunk[index]!.to}`);
            }
          });
        } catch (error) {
          console.error("Error enviando chunk:", error);
        }
      }

      return true;
    } catch (error) {
      console.error("Error en sendPushToUser:", error);
      return false;
    }
  }

  async sendPushToMultipleUsers(
    userIds: string[],
    title: string,
    body: string,
    data?: Record<string, any>,
  ): Promise<void> {
    for (const userId of userIds) {
      await this.sendPushToUser(userId, title, body, { ...data, userId });
    }
  }

  private async handlePushError(
    errorCode: string,
    token: string,
  ): Promise<void> {
    switch (errorCode) {
      case "DeviceNotRegistered":
        await this.notificationRepository.removeDeviceToken(token);
        break;

      case "InvalidCredentials":
        console.error("Credenciales de Expo inválidas");
        break;

      case "MessageTooBig":
        console.error("El mensaje es demasiado grande");
        break;

      case "MessageRateExceeded":
        console.error("Tasa de mensajes excedida");
        break;

      default:
        console.error(`Error desconocido: ${errorCode}`);
    }
  }
}
