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

    async execute(token: string, role: string): Promise<AuthResponse> {
        const googleUser: GoogleUserInfo = await this.googleOAuthService.verifyToken(token);

        if (!googleUser.verified_email) {
            throw new AppError("Email de google no está verificado", 400);
        }

        let user = await this.authRepository.findUserByGoogleId(googleUser.id);

        if (!user) {
            user = await this.authRepository.findUserByEmail(googleUser.email);
            if (user) {
                // Validar que el rol coincida
                if (user.role !== role) {
                    throw new AppError(
                        `Este correo electrónico ya está registrado como ${user.role}. Un mismo correo no puede tener diferentes roles.`,
                        409
                    );
                }
                const updateData = {
                    googleId: googleUser.id,
                    fullName: googleUser.name,
                    ...(googleUser.picture && { profilePhoto: googleUser.picture })
                };
                user = await this.authRepository.updateUserGoogleInfo(user.id, updateData);
            } else {
                user = await this.authRepository.createGoogleUser({
                    googleId: googleUser.id,
                    email: googleUser.email,
                    fullName: googleUser.name,
                    profilePhoto: googleUser.picture || null,
                    role: role,
                });
            }
        } else {
            // Validar que el rol coincida
            if (user.role !== role) {
                throw new AppError(
                    `Este correo electrónico ya está registrado como ${user.role}. Un mismo correo no puede tener diferentes roles.`,
                    409
                );
            }
            const updateData = {
                fullName: googleUser.name,
                ...(googleUser.picture && { profilePhoto: googleUser.picture })
            };
            user = await this.authRepository.updateUserGoogleInfo(user.id, updateData);

        }

        const accessToken = this.jwtService.generateAccessToken({
            userId: user.id,
            email: user.email,
            role: user.role
        });

        const refreshToken = this.jwtService.generateRefreshToken({
            userId: user.id,
        });

        await this.authRepository.saveRefreshToken(user.id, refreshToken);

        return {
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                phone: user.phone,
                role: user.role,
                verificationStatus: user.verificationStatus,
                profilePhoto: user.profilePhoto || null
            },
            accessToken,
            refreshToken
        };
    }
}