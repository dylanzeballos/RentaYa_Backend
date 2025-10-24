import prisma from '@/config/prisma';
import { IAuthRepository } from '@/features/auth/domain/repositories/IAuthRepository';
import { Usuario } from '@/generated/prisma';
import { GoogleUserData } from '@/shared/domain/types/AuthTypes';

export class AuthRepository implements IAuthRepository {
    async findUserByEmail(email: string): Promise<Usuario | null> {
        return prisma.usuario.findUnique({
            where: { email: email }
        });
    }

    async createUser(userData: {
        email: string;
        passwordHash: string;
        fullName?: string;
        phone?: string;
    }): Promise<Usuario> {
        return prisma.usuario.create({
            data: userData
        });
    }

    async updateUser(id: string, data: Partial<Usuario>): Promise<Usuario> {
        return prisma.usuario.update({
            where: { id },
            data
        });
    }

    async findUserByGoogleId(googleId: string): Promise<Usuario | null> {
        return await prisma.usuario.findUnique({
            where: { googleId }
        });
    }

    async createGoogleUser(userData: GoogleUserData): Promise<Usuario> {
        return await prisma.usuario.create({
            data: {
                googleId: userData.googleId,
                email: userData.email,
                fullName: userData.fullName,
                profilePhoto: userData.profilePhoto || null,
                role: 'usuario',
                verificationStatus: 'verificado'
            }
        });
    }

    async updateUserGoogleInfo(userId: string, googleData: Partial<GoogleUserData>): Promise<Usuario> {
        return await prisma.usuario.update({
            where: { id: userId },
            data: {
                ...googleData,
                verificationStatus: 'verificado'
            }
        });
    }

    async saveRefreshToken(userId: string, refreshToken: string): Promise<void> {
        await prisma.usuario.update({
            where: { id: userId },
            data: { refreshToken }
        });
    }
}
