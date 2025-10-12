import { Usuario } from "@/generated/prisma";
import { GoogleUserData } from "@/shared/domain/types/AuthTypes";

export interface IAuthRepository {
    findUserByEmail(email: string): Promise<Usuario | null>;
    createUser(userData: {
        correoElectronico: string;
        contrasenaHash: string;
        nombreCompleto?: string | undefined;
        telefono?: string | undefined;
    }): Promise<Usuario>;
    updateUser(id: string, data: Partial<Usuario>): Promise<Usuario>;
    findUserByGoogleId(googleId: string): Promise<any | null>;
    createGoogleUser(userData: GoogleUserData): Promise<any>;
    updateUserGoogleInfo(userId: string, googleData: Partial<GoogleUserData>): Promise<any>;
    saveRefreshToken(userId: string, refreshToken: string): Promise<void>;
}