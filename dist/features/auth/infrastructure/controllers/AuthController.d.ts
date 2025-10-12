import { RequestHandler } from "express";
import { LoginUseCase } from "@/features/auth/application/usecases/LoginUseCase";
import { RegisterUseCase } from "@/features/auth/application/usecases/RegisterUseCase";
import { RefreshTokenUseCase } from "@/features/auth/application/usecases/RefreshTokenUseCase";
export declare class AuthController {
    private readonly loginUseCase;
    private readonly registerUseCase;
    private readonly refreshTokenUseCase;
    constructor(loginUseCase: LoginUseCase, registerUseCase: RegisterUseCase, refreshTokenUseCase: RefreshTokenUseCase);
    login: RequestHandler;
    register: RequestHandler;
    refreshToken: RequestHandler;
}
//# sourceMappingURL=AuthController.d.ts.map