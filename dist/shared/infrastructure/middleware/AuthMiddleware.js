"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = exports.AuthMiddleware = void 0;
const JwtService_1 = require("@/shared/infrastructure/services/JwtService");
const AppError_1 = require("@/shared/domain/errors/AppError");
class AuthMiddleware {
    jwtService;
    constructor() {
        this.jwtService = new JwtService_1.JwtService();
    }
    authenticate = (req, res, next) => {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (!token) {
            return next(new AppError_1.AppError("Token de acceso requerido", 401));
        }
        try {
            const decoded = this.jwtService.verifyAccessToken(token);
            req.user = decoded;
            next();
        }
        catch (error) {
            return new AppError_1.AppError("Token de acceso inválido o expirado", 403);
        }
    };
}
exports.AuthMiddleware = AuthMiddleware;
exports.authMiddleware = new AuthMiddleware();
//# sourceMappingURL=AuthMiddleware.js.map