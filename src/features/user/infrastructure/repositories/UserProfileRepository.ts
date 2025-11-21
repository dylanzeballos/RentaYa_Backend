import prisma from "@/config/prisma";
import { UserProfile, UpdateUserProfileData } from "../../domain/UserProfile";

export class UserProfileRepository {
  async getUserById(userId: string): Promise<UserProfile | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          email: true,
          fullName: true,
          phone: true,
          role: true,
          profilePhoto: true,
          verificationStatus: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return user as UserProfile | null;
    } catch (error) {
      throw new Error(`Error fetching user profile: ${error}`);
    }
  }

  async update(
    userId: string,
    data: UpdateUserProfileData,
  ): Promise<UserProfile> {
    try {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          ...data,
          updatedAt: new Date(),
        },
        select: {
          id: true,
          email: true,
          fullName: true,
          phone: true,
          role: true,
          profilePhoto: true,
          verificationStatus: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return updatedUser as UserProfile;
    } catch (error) {
      throw new Error(`Error updating user profile: ${error}`);
    }
  }

  async updateProfileImage(
    userId: string,
    profileImageUrl: string,
  ): Promise<UserProfile> {
    try {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          profilePhoto: profileImageUrl,
          updatedAt: new Date(),
        },
        select: {
          id: true,
          email: true,
          fullName: true,
          phone: true,
          role: true,
          profilePhoto: true,
          verificationStatus: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return updatedUser as UserProfile;
    } catch (error) {
      throw new Error(`Error updating user profile image: ${error}`);
    }
  }

  async delete(userId: string): Promise<void> {
    try {
      await prisma.user.delete({
        where: { id: userId },
      });
    } catch (error) {
      throw new Error(`Error deleting user profile: ${error}`);
    }
  }
}
