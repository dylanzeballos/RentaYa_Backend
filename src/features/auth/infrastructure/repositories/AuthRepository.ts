import prisma from "@/config/prisma";
import { IAuthRepository } from "@/features/auth/domain/repositories/IAuthRepository";
import { User } from "@/generated/prisma";
import { GoogleUserData } from "@/shared/domain/types/AuthTypes";

export class AuthRepository implements IAuthRepository {
  async findUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email: email },
    });
  }

  async findUserById(userId: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async createUser(userData: {
    email: string;
    passwordHash: string;
    role: string;
    fullName?: string;
    phone?: string;
  }): Promise<User> {
    return prisma.user.create({
      data: userData,
    });
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async findUserByGoogleId(googleId: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { googleId },
    });
  }

  async createGoogleUser(userData: GoogleUserData & { role: string }): Promise<User> {
    return await prisma.user.create({
      data: {
        googleId: userData.googleId,
        email: userData.email,
        fullName: userData.fullName,
        profilePhoto: userData.profilePhoto || null,
        role: userData.role,
        verificationStatus: "verified",
      },
    });
  }

  async updateUserGoogleInfo(
    userId: string,
    googleData: Partial<GoogleUserData>,
  ): Promise<User> {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        ...googleData,
        verificationStatus: "verified",
      },
    });
  }

  async saveRefreshToken(userId: string, refreshToken: string): Promise<void> {
    await prisma.user.update({
      where: { id: userId },
      data: { refreshToken },
    });
  }

  async savePasswordResetToken(
    userId: string,
    resetToken: string,
    expiresAt: Date,
  ): Promise<void> {
    await prisma.user.update({
      where: { id: userId },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpires: expiresAt,
      },
    });
  }

  async findUserByResetToken(resetToken: string): Promise<User | null> {
    return await prisma.user.findFirst({
      where: {
        resetPasswordToken: resetToken,
        resetPasswordExpires: {
          gt: new Date(), // Token no expirado
        },
      },
    });
  }

  async updatePassword(userId: string, passwordHash: string): Promise<User> {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        passwordHash,
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });
  }

  async clearPasswordResetToken(userId: string): Promise<void> {
    await prisma.user.update({
      where: { id: userId },
      data: {
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });
  }
}
