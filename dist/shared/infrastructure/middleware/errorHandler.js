"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const AppError_1 = require("../../domain/errors/AppError");
const ApiResponse_1 = require("../utils/ApiResponse");
function errorHandler(error, req, res, next) {
    console.error('Error:', error);
    if (error instanceof AppError_1.AppError) {
        res.status(error.statusCode).json(ApiResponse_1.ApiResponse.error(error.message));
        return;
    }
    // Prisma errors
    if (error.name === 'PrismaClientKnownRequestError') {
        res.status(400).json(ApiResponse_1.ApiResponse.error('Database operation failed'));
        return;
    }
    // Validation errors
    if (error.name === 'ValidationError') {
        res.status(400).json(ApiResponse_1.ApiResponse.error(error.message));
        return;
    }
    // Default error
    res.status(500).json(ApiResponse_1.ApiResponse.error('Internal server error'));
}
//# sourceMappingURL=errorHandler.js.map