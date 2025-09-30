import { Router } from 'express';
import { MessageController } from '@/features/messaging/infrastructure/controllers/MessageController';
import { asyncHandler } from '@/shared/infrastructure/utils/asyncHandler';

export function createMessageRoutes(messageController: MessageController): Router {
    const router = Router();

    router.get('/', asyncHandler((req, res, next) =>
        messageController.getMessages(req, res, next)
    ));

    router.get('/:id', asyncHandler((req, res, next) =>
        messageController.getMessageById(req, res, next)
    ));

    return router;
}
