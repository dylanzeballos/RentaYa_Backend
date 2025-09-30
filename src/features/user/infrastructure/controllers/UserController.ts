import { Request, Response, NextFunction } from 'express';
import { CreateUserUseCase } from '../../application/usecases/CreateUserUseCase';
import { ApiResponse } from '@/shared/infrastructure/utils/ApiResponse';

export class UserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    /**
     * @swagger
     * /api/users:
     *   post:
     *     summary: Crear un nuevo usuario
     *     tags: [Users]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - email
     *             properties:
     *               email:
     *                 type: string
     *                 format: email
     *                 example: usuario@rentaya.com
     *     responses:
     *       201:
     *         description: Usuario creado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ApiResponse'
     *       400:
     *         description: Datos inválidos
     *       409:
     *         description: El usuario ya existe
     */
    async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { email } = req.body;

            const user = await this.createUserUseCase.execute({ email });

            res.status(201).json(ApiResponse.success(user, 'Usuario creado exitosamente'));
        } catch (error) {
            next(error);
        }
    }

    /**
     * @swagger
     * /api/users:
     *   get:
     *     summary: Obtener todos los usuarios
     *     tags: [Users]
     *     responses:
     *       200:
     *         description: Lista de usuarios obtenida exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ApiResponse'
     */
    async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            // Esta funcionalidad se puede implementar después
            res.json(ApiResponse.success([], 'Usuarios obtenidos exitosamente'));
        } catch (error) {
            next(error);
        }
    }
}
