import prisma from "@/config/prisma";
import { Notification, DeviceToken } from "@prisma/client";
import {
  CreateNotificationDTO,
  NotificationFilters,
  DeviceTokenDTO,
} from "../../domain/types/notification.types";

export class NotificationRepository {
  async createNotification(data: CreateNotificationDTO): Promise<Notification> {
    return await prisma.notification.create({
      data: {
        userId: data.userId,
        type: data.type,
        title: data.title,
        content: data.content,
        metadata: data.metadata || {},
        pushSent: false,
        read: false,
        deleted: false,
      },
    });
  }

  async getNotifications(
    filters: NotificationFilters,
  ): Promise<Notification[]> {
    return await prisma.notification.findMany({
      where: {
        userId: filters.userId,
        ...(filters.read !== undefined && { read: filters.read }),
        ...(filters.type !== undefined && { type: filters.type }),
        deleted: filters.deleted ?? false,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async getNotificationById(id: string): Promise<Notification | null> {
    return await prisma.notification.findUnique({
      where: { id },
    });
  }

  async markAsRead(id: string): Promise<Notification> {
    return await prisma.notification.update({
      where: { id },
      data: { read: true },
    });
  }

  async markAllAsRead(userId: string): Promise<number> {
    const result = await prisma.notification.updateMany({
      where: {
        userId,
        read: false,
        deleted: false,
      },
      data: { read: true },
    });
    return result.count;
  }

  async deleteNotification(id: string): Promise<Notification> {
    return await prisma.notification.update({
      where: { id },
      data: { deleted: true },
    });
  }

  async deleteAllNotifications(userId: string): Promise<number> {
    const result = await prisma.notification.updateMany({
      where: {
        userId,
        deleted: false,
      },
      data: { deleted: true },
    });
    return result.count;
  }

  async getUnreadCount(userId: string): Promise<number> {
    return await prisma.notification.count({
      where: {
        userId,
        read: false,
        deleted: false,
      },
    });
  }

  async markPushSent(id: string): Promise<void> {
    await prisma.notification.update({
      where: { id },
      data: { pushSent: true },
    });
  }

  async saveDeviceToken(data: DeviceTokenDTO): Promise<DeviceToken> {
    return await prisma.deviceToken.upsert({
      where: {
        userId_token: {
          userId: data.userId,
          token: data.token,
        },
      },
      update: {
        active: true,
        platform: data.platform,
        updatedAt: new Date(),
      },
      create: {
        userId: data.userId,
        token: data.token,
        platform: data.platform,
        active: true,
      },
    });
  }

  async getDeviceTokens(userId: string): Promise<DeviceToken[]> {
    return await prisma.deviceToken.findMany({
      where: {
        userId,
        active: true,
      },
    });
  }

  async removeDeviceToken(token: string): Promise<void> {
    await prisma.deviceToken.updateMany({
      where: { token },
      data: { active: false },
    });
  }

  async removeAllUserTokens(userId: string): Promise<void> {
    await prisma.deviceToken.updateMany({
      where: { userId },
      data: { active: false },
    });
  }
}
