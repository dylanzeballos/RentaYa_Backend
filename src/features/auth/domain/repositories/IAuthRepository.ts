import { User } from "@/generated/prisma";
import { GoogleUserData } from "@/shared/domain/types/AuthTypes";

export interface IAuthRepository {
    findUserByEmail(email: string): Promise<User | null>;
    createUser(userData: {
        email: string;
        passwordHash: string;
        fullName?: string | undefined;
        phone?: string | undefined;
    }): Promise<User>;
    updateUser(id: string, data: Partial<User>): Promise<User>;
    findUserByGoogleId(googleId: string): Promise<any | null>;
    createGoogleUser(userData: GoogleUserData): Promise<any>;
    updateUserGoogleInfo(userId: string, googleData: Partial<GoogleUserData>): Promise<any>;
    saveRefreshToken(userId: string, refreshToken: string): Promise<void>;
}