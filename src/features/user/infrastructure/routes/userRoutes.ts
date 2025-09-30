import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { validateUser } from '../middleware/userValidation';
import { asyncHandler } from '@/shared/infrastructure/utils/asyncHandler';

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de usuarios de RentaYa
 */

export function createUserRoutes(userController: UserController): Router {
    const router = Router();

    router.post('/', validateUser, asyncHandler((req, res, next) =>
        userController.createUser(req, res, next)
    ));

    router.get('/', asyncHandler((req, res, next) =>
        userController.getUsers(req, res, next)
    ));

    return router;
}
