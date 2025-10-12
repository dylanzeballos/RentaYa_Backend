export declare class AppError extends Error {
    readonly statusCode: number;
    readonly isOperational: boolean;
    constructor(message: string, statusCode?: number, isOperational?: boolean);
    static badRequest(message: string): AppError;
    static unauthorized(message?: string): AppError;
    static forbidden(message?: string): AppError;
    static notFound(message?: string): AppError;
    static conflict(message: string): AppError;
    static internal(message?: string): AppError;
}
//# sourceMappingURL=AppError.d.ts.map