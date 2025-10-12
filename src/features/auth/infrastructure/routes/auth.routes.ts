import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { validateSchema } from "@/shared/infrastructure/validation/validateSchema";
import { loginSchema, registerSchema, refreshTokenSchema } from "@/shared/infrastructure/validation/authSchema";

import { AuthRepository } from "../repositories/AuthRepository";
import { JwtService } from "@/shared/infrastructure/services/JwtService";
import { HashService } from "@/shared/infrastructure/services/HashService";
import { RegisterUseCase } from "../../application/usecases/RegisterUseCase";
import { LoginUseCase } from "../../application/usecases/LoginUseCase";
import { RefreshTokenUseCase } from "../../application/usecases/RefreshTokenUseCase";
import { GoogleLoginUseCase } from "../../application/usecases/GoogleLoginUseCase";
import { GoogleOAuthService } from "@/shared/infrastructure/services/googleService";

const router: Router = Router();

const authRepository = new AuthRepository();
const hashService = new HashService();
const jwtService = new JwtService();
const googleOAuthService = new GoogleOAuthService();

const registerUseCase = new RegisterUseCase(authRepository, hashService, jwtService);
const loginUseCase = new LoginUseCase(authRepository, hashService, jwtService);
const refreshTokenUseCase = new RefreshTokenUseCase(authRepository, jwtService);
const googleLoginUseCase = new GoogleLoginUseCase(authRepository, googleOAuthService, jwtService);

const authController = new AuthController(loginUseCase, registerUseCase, refreshTokenUseCase, googleLoginUseCase);

router.post("/register", validateSchema(registerSchema), authController.register);
router.post("/login", validateSchema(loginSchema), authController.login);
router.post("/refresh-token", validateSchema(refreshTokenSchema), authController.refreshToken);
router.post('/google', authController.googleLogin);

export default router;