import { IAuthRepository } from '@/features/auth/domain/repositories/IAuthRepository';
import { Usuario } from '@/generated/prisma';
export declare class AuthRepository implements IAuthRepository {
    findUserByEmail(email: string): Promise<Usuario | null>;
    createUser(userData: {
        correoElectronico: string;
        contrasenaHash: string;
        nombreCompleto?: string;
        telefono?: string;
    }): Promise<Usuario>;
    updateUser(id: string, data: Partial<Usuario>): Promise<Usuario>;
}
//# sourceMappingURL=AuthRepository.d.ts.map