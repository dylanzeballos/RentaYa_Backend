import { Usuario } from "@/generated/prisma";

export interface IAuthRepository {
    findUserByEmail(email: string): Promise<Usuario | null>;
    createUser(userData: {
        correoElectronico: string;
        contrasenaHash: string;
        nombreCompleto?: string | undefined;
        telefono?: string | undefined;
    }): Promise<Usuario>;
    updateUser(id: string, data: Partial<Usuario>): Promise<Usuario>;
}