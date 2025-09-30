import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../domain/errors/AppError';
import { ApiResponse } from '../utils/ApiResponse';

export function errorHandler(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    console.error('Error:', error);

    if (error instanceof AppError) {
        res.status(error.statusCode).json(
            ApiResponse.error(error.message)
        );
        return;
    }

    // Prisma errors
    if (error.name === 'PrismaClientKnownRequestError') {
        res.status(400).json(
            ApiResponse.error('Database operation failed')
        );
        return;
    }

    // Validation errors
    if (error.name === 'ValidationError') {
        res.status(400).json(
            ApiResponse.error(error.message)
        );
        return;
    }

    // Default error
    res.status(500).json(
        ApiResponse.error('Internal server error')
    );
}
