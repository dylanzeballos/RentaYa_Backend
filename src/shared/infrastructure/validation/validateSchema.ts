import { Request, Response, NextFunction } from "express";
import {z} from 'zod';
import { AppError } from "@/shared/domain/errors/AppError";

export const validateSchema = (schema: z.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                const messages= error.issues.map(err => ` ${err.path.join(', ')}: ${err.message}`);
                throw new AppError(`Invalid request data: ${messages.join('; ')}`, 400);
            }
            next(error);
        }
    };
};