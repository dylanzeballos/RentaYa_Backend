import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { GoogleOAuthService, GoogleUserInfo } from "@/shared/infrastructure/services/googleService";
import { JwtService } from "@/shared/infrastructure/services/JwtService";
import { AppError } from "@/shared/domain/errors/AppError";
import { AuthResponse } from '@/shared/domain/types/AuthTypes';

export class GoogleLoginUseCase {
    constructor(
        private authRepository: IAuthRepository,
        private googleOAuthService: GoogleOAuthService,
        private jwtService: JwtService
    ) { }

    async execute(token: string): Promise<AuthResponse> {
        const googleUser: GoogleUserInfo = await this.googleOAuthService.verifyToken(token);

        if (!googleUser.verified_email) {
            throw new AppError("Email de google no está verificado", 400);
        }

        let user = await this.authRepository.findUserByGoogleId(googleUser.id);

        if (!user) {
            user = await this.authRepository.findUserByEmail(googleUser.email);
            if (user) {
                const updateData = {
                    googleId: googleUser.id,
                    nombreCompleto: googleUser.name,
                    ...(googleUser.picture && { fotoPerfil: googleUser.picture })
                };
                user = await this.authRepository.updateUserGoogleInfo(user.id, updateData);
            } else {
                user = await this.authRepository.createGoogleUser({
                    googleId: googleUser.id,
                    correoElectronico: googleUser.email,
                    nombreCompleto: googleUser.name,
                    fotoPerfil: googleUser.picture || null,
                });
            }
        } else {
            const updateData = {
                nombreCompleto: googleUser.name,
                ...(googleUser.picture && { fotoPerfil: googleUser.picture })
            };
            user = await this.authRepository.updateUserGoogleInfo(user.id, updateData);

        }

        const accessToken = this.jwtService.generateAccessToken({
            userId: user.id,
            email: user.correoElectronico,
            role: user.rol
        });

        const refreshToken = this.jwtService.generateRefreshToken({
            userId: user.id,
        });

        await this.authRepository.saveRefreshToken(user.id, refreshToken);

        return {
            user: {
                id: user.id,
                correoElectronico: user.correoElectronico,
                nombreCompleto: user.nombreCompleto,
                telefono: user.telefono,
                rol: user.rol,
                estadoVerificacion: user.estadoVerificacion
            },
            accessToken,
            refreshToken
        };
    }
}