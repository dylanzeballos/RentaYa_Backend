import { Request, Response, RequestHandler } from "express";
import { LoginUseCase } from "@/features/auth/application/usecases/LoginUseCase";
import { RegisterUseCase } from "@/features/auth/application/usecases/RegisterUseCase";
import { RefreshTokenUseCase } from "@/features/auth/application/usecases/RefreshTokenUseCase";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { ApiResponse } from "@/shared/infrastructure/utils/ApiResponse";
import { GoogleLoginUseCase } from "@/features/auth/application/usecases/GoogleLoginUseCase";

export class AuthController {
    constructor(
        private readonly loginUseCase: LoginUseCase,
        private readonly registerUseCase: RegisterUseCase,
        private readonly refreshTokenUseCase: RefreshTokenUseCase,
        private readonly googleLoginUseCase: GoogleLoginUseCase
    ) {}

    login: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
        const result = await this.loginUseCase.execute(req.body);
        res.status(200).json(ApiResponse.success(result, 'Login exitoso'));
    });

    register: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
        const result = await this.registerUseCase.execute(req.body);
        res.status(201).json(ApiResponse.success(result, 'Registro exitoso'));
    });

    refreshToken: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
        const result = await this.refreshTokenUseCase.execute(req.body);
        res.status(200).json(ApiResponse.success(result, 'Token renovado exitosamente'));
    });

    googleLogin = asyncHandler(async (req: Request, res: Response) => {
        const result = await this.googleLoginUseCase.execute(req.body.token);

        res.status(200).json(
            ApiResponse.success(result, 'Login con Google exitoso')
        );
    });
}