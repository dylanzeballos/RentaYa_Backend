import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { JwtService } from "@/shared/infrastructure/services/JwtService";
import { RefreshTokenRequest, TokenResponse } from "@/shared/domain/types/AuthTypes";
import { AppError } from "@/shared/domain/errors/AppError";

export class RefreshTokenUseCase {
    constructor(
        private readonly authRepository: IAuthRepository,
        private readonly jwtService: JwtService
    ) {}

    async execute(request: RefreshTokenRequest): Promise<TokenResponse> {
        const { refreshToken } = request;

        try {
            const decoded = this.jwtService.verifyRefreshToken(refreshToken);

            const usuario = await this.authRepository.findUserByEmail(decoded.email);
            if (!usuario) {
                throw new AppError('Usuario no encontrado', 404);
            }

            return this.jwtService.generateTokens({
                userId: usuario.id,
                email: usuario.correoElectronico,
                role: usuario.rol
            });
        } catch (error) {
            throw new AppError('Token de refresco inválido o expirado', 403);
        }
    }
}