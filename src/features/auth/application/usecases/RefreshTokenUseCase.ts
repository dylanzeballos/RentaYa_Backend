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

            // El refresh token solo contiene userId, no email
            const user = await this.authRepository.findUserById(decoded.userId);
            if (!user) {
                throw new AppError('Usuario no encontrado', 404);
            }

            // Generar nuevos tokens
            const tokens = this.jwtService.generateTokens({
                userId: user.id,
                email: user.email,
                role: user.role
            });

            // Guardar el nuevo refresh token en la base de datos
            await this.authRepository.saveRefreshToken(user.id, tokens.refreshToken);

            return tokens;
        } catch (error) {
            throw new AppError('Token de refresco inválido o expirado', 403);
        }
    }
}