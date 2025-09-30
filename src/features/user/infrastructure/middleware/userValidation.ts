import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { AppError } from '@/shared/domain/errors/AppError';

const createUserSchema = z.object({
    body: z.object({
        email: z.string()
            .email('Formato de email inválido')
            .min(1, 'El email es requerido')
            .trim()
    })
});

export function validateUser(req: Request, res: Response, next: NextFunction): void {
    try {
        createUserSchema.parse(req);
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            const message = error.errors.map(err => err.message).join(', ');
            next(new AppError(message, 400));
        } else {
            next(error);
        }
    }
}
