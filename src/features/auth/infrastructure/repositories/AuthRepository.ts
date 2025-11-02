import prisma from '@/config/prisma';
import { IAuthRepository } from '@/features/auth/domain/repositories/IAuthRepository';
import { User } from '@/generated/prisma';
import { GoogleUserData } from '@/shared/domain/types/AuthTypes';

export class AuthRepository implements IAuthRepository {
    async findUserByEmail(email: string): Promise<User | null> {
        return prisma.user.findUnique({
            where: { email: email }
        });
    }

    async createUser(userData: {
        email: string;
        passwordHash: string;
        fullName?: string;
        phone?: string;
    }): Promise<User> {
        return prisma.user.create({
            data: userData
        });
    }

    async updateUser(id: string, data: Partial<User>): Promise<User> {
        return prisma.user.update({
            where: { id },
            data
        });
    }

    async findUserByGoogleId(googleId: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { googleId }
        });
    }

    async createGoogleUser(userData: GoogleUserData): Promise<User> {
        return await prisma.user.create({
            data: {
                googleId: userData.googleId,
                email: userData.email,
                fullName: userData.fullName,
                profilePhoto: userData.profilePhoto || null,
                role: 'user',
                verificationStatus: 'verified'
            }
        });
    }

    async updateUserGoogleInfo(userId: string, googleData: Partial<GoogleUserData>): Promise<User> {
        return await prisma.user.update({
            where: { id: userId },
            data: {
                ...googleData,
                verificationStatus: 'verified'
            }
        });
    }

    async saveRefreshToken(userId: string, refreshToken: string): Promise<void> {
        await prisma.user.update({
            where: { id: userId },
            data: { refreshToken }
        });
    }
}
