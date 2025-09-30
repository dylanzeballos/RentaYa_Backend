import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { AppError } from '@/shared/domain/errors/AppError';

const sendMessageSchema = z.object({
    body: z.object({
        userId: z.string().uuid('Invalid user ID format'),
        text: z.string()
            .min(1, 'Message cannot be empty')
            .max(1000, 'Message cannot exceed 1000 characters')
            .trim()
    })
});

export function validateMessage(req: Request, res: Response, next: NextFunction): void {
    try {
        sendMessageSchema.parse(req);
        next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            const message = error.issues.map(err => err.message).join(', ');
            next(new AppError(message, 400));
        } else {
            next(error);
        }
    }
}
