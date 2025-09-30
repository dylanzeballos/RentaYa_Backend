import prisma from '@/config/prisma';
import { IAuthRepository } from '@/features/auth/domain/repositories/IAuthRepository';
import { Usuario } from '@/generated/prisma';

export class AuthRepository implements IAuthRepository {
    async findUserByEmail(email: string): Promise<Usuario | null> {
        return prisma.usuario.findUnique({
            where: { correoElectronico: email }
        });
    }

    async createUser(userData: {
        correoElectronico: string;
        contrasenaHash: string;
        nombreCompleto?: string;
        telefono?: string;
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
}
