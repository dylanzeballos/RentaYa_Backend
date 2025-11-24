import { Router } from "express";
import { NotificationController } from "../controllers/NotificationController";
import { authMiddleware } from "@/shared/infrastructure/middleware/AuthMiddleware";

const router = Router();
const notificationController = new NotificationController();

router.use(authMiddleware.authenticate);

router.get("/", notificationController.getNotifications);
router.get("/unread-count", notificationController.getUnreadCount);
router.patch("/:id/read", notificationController.markAsRead);
router.patch("/mark-all-read", notificationController.markAllAsRead);
router.delete("/:id", notificationController.deleteNotification);
router.delete("/", notificationController.deleteAllNotifications);
router.post("/device-token", notificationController.registerDeviceToken);
router.delete("/device-token", notificationController.removeDeviceToken);
router.delete("/device-tokens/all", notificationController.removeAllUserTokens);

export default router;
