import { Request, Response, NextFunction } from "express";
import{JwtService} from '@/shared/infrastructure/services/JwtService';
import { AppError } from "@/shared/domain/errors/AppError";
import { TokenPayload} from '@/shared/domain/types/AuthTypes';

export interface AuthenticatedRequest extends Request {
    user?: TokenPayload;
}

export class AuthMiddleware {
    private jwtService: JwtService;

    constructor(){
        this.jwtService = new JwtService();
    }

    authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        const authHeader = (req.headers["authorization"] as string | undefined);
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            return next(new AppError("Token de acceso requerido", 401));
        }

        try {
            const decoded = this.jwtService.verifyAccessToken(token);
            req.user = decoded;
            next();
        } catch (error) {
            return new AppError("Token de acceso inválido o expirado", 403);
        }
    };
}

export const authMiddleware = new AuthMiddleware();
