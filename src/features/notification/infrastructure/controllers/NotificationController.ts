import { Response, RequestHandler } from "express";
import { AuthenticatedRequest } from "@/shared/infrastructure/middleware/AuthMiddleware";
import { NotificationUseCase } from "../../application/usecases/NotificationUseCase";
import { NotificationRepository } from "../repositories/NotificationRepository";
import { AppError } from "@/shared/domain/errors/AppError";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";

export class NotificationController {
  private notificationUseCase: NotificationUseCase;

  constructor() {
    const notificationRepository = new NotificationRepository();
    this.notificationUseCase = new NotificationUseCase(notificationRepository);
  }

  /**
   * @swagger
   * /api/notifications:
   *   get:
   *     summary: Obtener notificaciones del usuario
   *     tags: [Notifications]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: query
   *         name: read
   *         schema:
   *           type: string
   *           enum: [true, false]
   *       - in: query
   *         name: type
   *         schema:
   *           type: string
   *           enum: [NEW_INTEREST, NEW_MESSAGE, NEW_REVIEW, PROPERTY_APPROVED, RECOMMENDATION, WELCOME, SYSTEM]
   *     responses:
   *       200:
   *         description: Lista de notificaciones
   *       401:
   *         description: No autenticado
   */
  getNotifications: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("User not authenticated", 401);
      }

      const { read, type } = req.query;

      const filters: any = {
        userId,
      };

      if (read === "true") {
        filters.read = true;
      } else if (read === "false") {
        filters.read = false;
      }

      if (type) {
        filters.type = type;
      }

      const notifications = await this.notificationUseCase.getUserNotifications(
        filters,
      );

      res.status(200).json({
        success: true,
        data: notifications,
        message: "Notifications retrieved successfully",
      });
    },
  );

  /**
   * @swagger
   * /api/notifications/unread-count:
   *   get:
   *     summary: Obtener cantidad de notificaciones no leídas
   *     tags: [Notifications]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Cantidad de notificaciones no leídas
   *       401:
   *         description: No autenticado
   */
  getUnreadCount: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("User not authenticated", 401);
      }

      const result = await this.notificationUseCase.getUnreadCount(userId);

      res.status(200).json({
        success: true,
        data: result,
      });
    },
  );

  /**
   * @swagger
   * /api/notifications/{id}/read:
   *   patch:
   *     summary: Marcar notificación como leída
   *     tags: [Notifications]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Notificación marcada como leída
   *       401:
   *         description: No autenticado
   *       404:
   *         description: No encontrada
   */
  markAsRead: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const { id } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        throw new AppError("User not authenticated", 401);
      }

      if (!id) {
        throw new AppError("Notification ID is required", 400);
      }

      const notification = await this.notificationUseCase.markAsRead(
        id,
        userId,
      );

      res.status(200).json({
        success: true,
        data: notification,
        message: "Notification marked as read",
      });
    },
  );

  /**
   * @swagger
   * /api/notifications/mark-all-read:
   *   patch:
   *     summary: Marcar todas como leídas
   *     tags: [Notifications]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Todas marcadas como leídas
   *       401:
   *         description: No autenticado
   */
  markAllAsRead: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("User not authenticated", 401);
      }

      const result = await this.notificationUseCase.markAllAsRead(userId);

      res.status(200).json({
        success: true,
        data: result,
        message: `${result.count} notifications marked as read`,
      });
    },
  );

  /**
   * @swagger
   * /api/notifications/{id}:
   *   delete:
   *     summary: Eliminar notificación
   *     tags: [Notifications]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Notificación eliminada
   *       401:
   *         description: No autenticado
   *       404:
   *         description: No encontrada
   */
  deleteNotification: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const { id } = req.params;
      const userId = req.user?.userId;

      if (!userId) {
        throw new AppError("User not authenticated", 401);
      }

      if (!id) {
        throw new AppError("Notification ID is required", 400);
      }

      await this.notificationUseCase.deleteNotification(id, userId);

      res.status(200).json({
        success: true,
        message: "Notification deleted",
      });
    },
  );

  /**
   * @swagger
   * /api/notifications:
   *   delete:
   *     summary: Eliminar todas las notificaciones
   *     tags: [Notifications]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Todas eliminadas
   *       401:
   *         description: No autenticado
   */
  deleteAllNotifications: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("User not authenticated", 401);
      }

      const result =
        await this.notificationUseCase.deleteAllNotifications(userId);

      res.status(200).json({
        success: true,
        data: result,
        message: `${result.count} notifications deleted`,
      });
    },
  );

  /**
   * @swagger
   * /api/notifications/device-token:
   *   post:
   *     summary: Registrar token de dispositivo
   *     tags: [Notifications]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - token
   *               - platform
   *             properties:
   *               token:
   *                 type: string
   *               platform:
   *                 type: string
   *                 enum: [android, ios, web]
   *     responses:
   *       200:
   *         description: Token registrado
   *       400:
   *         description: Datos inválidos
   *       401:
   *         description: No autenticado
   */
  registerDeviceToken: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("User not authenticated", 401);
      }

      const { token, platform } = req.body;

      if (!token || !platform) {
        throw new AppError("Token and platform are required", 400);
      }

      if (!["android", "ios", "web"].includes(platform)) {
        throw new AppError(
          "Invalid platform. Must be 'android', 'ios', or 'web'",
          400,
        );
      }

      await this.notificationUseCase.registerDeviceToken({
        userId,
        token,
        platform,
      });

      res.status(200).json({
        success: true,
        message: "Device token registered successfully",
      });
    },
  );

  /**
   * @swagger
   * /api/notifications/device-token:
   *   delete:
   *     summary: Remover token de dispositivo
   *     tags: [Notifications]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - token
   *             properties:
   *               token:
   *                 type: string
   *     responses:
   *       200:
   *         description: Token removido
   *       400:
   *         description: Token no proporcionado
   *       401:
   *         description: No autenticado
   */
  removeDeviceToken: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const { token } = req.body;

      if (!token) {
        throw new AppError("Token is required", 400);
      }

      await this.notificationUseCase.removeDeviceToken(token);

      res.status(200).json({
        success: true,
        message: "Device token removed successfully",
      });
    },
  );

  /**
   * @swagger
   * /api/notifications/device-tokens/all:
   *   delete:
   *     summary: Remover todos los tokens
   *     tags: [Notifications]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Todos los tokens removidos
   *       401:
   *         description: No autenticado
   */
  removeAllUserTokens: RequestHandler = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
      const userId = req.user?.userId;
      if (!userId) {
        throw new AppError("User not authenticated", 401);
      }

      await this.notificationUseCase.removeAllUserTokens(userId);

      res.status(200).json({
        success: true,
        message: "All device tokens removed successfully",
      });
    },
  );
}
