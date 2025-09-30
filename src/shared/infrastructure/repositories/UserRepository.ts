import { PrismaClient } from '@prisma/client';
import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepository';

export class UserRepository implements IUserRepository {
    constructor(private prisma: PrismaClient) {}

    async save(user: User): Promise<User> {
        const data = await this.prisma.user.create({
            data: {
                id: user.id,
                email: user.email,
                createdAt: user.createdAt
            }
        });

        return new User(data.id, data.email, data.createdAt);
    }

    async findById(id: string): Promise<User | null> {
        const data = await this.prisma.user.findUnique({
            where: { id }
        });

        if (!data) return null;

        return new User(data.id, data.email, data.createdAt);
    }

    async findByEmail(email: string): Promise<User | null> {
        const data = await this.prisma.user.findUnique({
            where: { email }
        });

        if (!data) return null;

        return new User(data.id, data.email, data.createdAt);
    }

    async findAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany({
            orderBy: { createdAt: 'desc' }
        });

        return users.map(data => new User(data.id, data.email, data.createdAt));
    }

    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: { id }
        });
    }
}
