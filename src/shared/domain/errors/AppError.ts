export class AppError extends Error {
    public readonly isOperational: boolean;

    constructor(
        message: string,
        public readonly statusCode: number = 500,
        isOperational: boolean = true
    ) {
        super(message);
        this.name = 'AppError';
        this.isOperational = isOperational;

        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message: string): AppError {
        return new AppError(message, 400);
    }

    static unauthorized(message: string = 'Unauthorized'): AppError {
        return new AppError(message, 401);
    }

    static forbidden(message: string = 'Forbidden'): AppError {
        return new AppError(message, 403);
    }

    static notFound(message: string = 'Resource not found'): AppError {
        return new AppError(message, 404);
    }

    static conflict(message: string): AppError {
        return new AppError(message, 409);
    }

    static internal(message: string = 'Internal server error'): AppError {
        return new AppError(message, 500);
    }
}
