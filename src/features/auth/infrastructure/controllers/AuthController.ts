import { Request, Response, RequestHandler } from "express";
import { LoginUseCase } from "@/features/auth/application/usecases/LoginUseCase";
import { RegisterUseCase } from "@/features/auth/application/usecases/RegisterUseCase";
import { RefreshTokenUseCase } from "@/features/auth/application/usecases/RefreshTokenUseCase";
import { asyncHandler } from "@/shared/infrastructure/utils/asyncHandler";
import { ApiResponse } from "@/shared/infrastructure/utils/ApiResponse";
import { GoogleLoginUseCase } from "@/features/auth/application/usecases/GoogleLoginUseCase";
import { ForgotPasswordUseCase } from "@/features/auth/application/usecases/ForgotPasswordUseCase";
import { ResetPasswordUseCase } from "@/features/auth/application/usecases/ResetPasswordUseCase";
import { SetPasswordUseCase } from "@/features/auth/application/usecases/SetPasswordUseCase";

export class AuthController {
  constructor(
    private readonly loginUseCase: LoginUseCase,
    private readonly registerUseCase: RegisterUseCase,
    private readonly refreshTokenUseCase: RefreshTokenUseCase,
    private readonly googleLoginUseCase: GoogleLoginUseCase,
    private readonly forgotPasswordUseCase: ForgotPasswordUseCase,
    private readonly resetPasswordUseCase: ResetPasswordUseCase,
    private readonly setPasswordUseCase: SetPasswordUseCase,
  ) {}

  login: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.loginUseCase.execute(req.body);
    res.status(200).json(ApiResponse.success(result, "Login exitoso"));
  });

  register: RequestHandler = asyncHandler(
    async (req: Request, res: Response) => {
      const result = await this.registerUseCase.execute(req.body);
      res.status(201).json(ApiResponse.success(result, "Registro exitoso"));
    },
  );

  refreshToken: RequestHandler = asyncHandler(
    async (req: Request, res: Response) => {
      const result = await this.refreshTokenUseCase.execute(req.body);
      res
        .status(200)
        .json(ApiResponse.success(result, "Token renovado exitosamente"));
    },
  );

  googleLogin = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.googleLoginUseCase.execute(req.body.token, req.body.role);

    res
      .status(200)
      .json(ApiResponse.success(result, "Login con Google exitoso"));
  });

  forgotPassword: RequestHandler = asyncHandler(
    async (req: Request, res: Response) => {
      const result = await this.forgotPasswordUseCase.execute(req.body.email);
      res.status(200).json(ApiResponse.success(result, result.message));
    },
  );

  resetPassword: RequestHandler = asyncHandler(
    async (req: Request, res: Response) => {
      const result = await this.resetPasswordUseCase.execute({
        code: req.body.code,
        newPassword: req.body.newPassword,
      });
      res.status(200).json(ApiResponse.success(result, result.message));
    },
  );

  setPassword: RequestHandler = asyncHandler(
    async (req: Request, res: Response) => {
      const userId = (req as any).user?.userId;

      if (!userId) {
        res.status(401).json(ApiResponse.error("No autorizado", 401));
        return;
      }

      const result = await this.setPasswordUseCase.execute({
        userId,
        newPassword: req.body.newPassword,
      });
      res.status(200).json(ApiResponse.success(result, result.message));
    },
  );
}
