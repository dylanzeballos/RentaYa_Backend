import { Request, Response, NextFunction } from "express";
import { AppError } from "@/shared/domain/errors/AppError";
import { TokenPayload } from '@/shared/domain/types/AuthTypes';
export interface AuthenticatedRequest extends Request {
    user?: TokenPayload;
}
export declare class AuthMiddleware {
    private jwtService;
    constructor();
    authenticate: (req: AuthenticatedRequest, res: Response, next: NextFunction) => void | AppError;
}
export declare const authMiddleware: AuthMiddleware;
//# sourceMappingURL=AuthMiddleware.d.ts.map