import { IUserRepository } from '@/shared/domain/repositories/IUserRepository';
import { User } from '@/shared/domain/entities/User';
import { AppError } from '@/shared/domain/errors/AppError';

export interface CreateUserDto {
    email: string;
}

export interface UserResponseDto {
    id: string;
    email: string;
    createdAt: Date;
    isValidEmail: boolean;
}

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(dto: CreateUserDto): Promise<UserResponseDto> {
        const existingUser = await this.userRepository.findByEmail(dto.email);
        if (existingUser) {
            throw AppError.conflict('User with this email already exists');
        }

        const user = User.create(dto.email);

        if (!user.isValidEmail()) {
            throw AppError.badRequest('Invalid email format');
        }

        const savedUser = await this.userRepository.save(user);

        return this.toResponseDto(savedUser);
    }

    private toResponseDto(user: User): UserResponseDto {
        return {
            id: user.id,
            email: user.email,
            createdAt: user.createdAt,
            isValidEmail: user.isValidEmail()
        };
    }
}
