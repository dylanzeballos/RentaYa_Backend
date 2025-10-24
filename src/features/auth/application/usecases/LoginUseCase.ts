import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { HashService } from "@/shared/infrastructure/services/HashService";
import { JwtService } from "@/shared/infrastructure/services/JwtService";
import { AuthResponse, LoginRequest } from "@/shared/domain/types/AuthTypes";
import { AppError } from "@/shared/domain/errors/AppError";

export class LoginUseCase {
    constructor(
        private readonly authRepository: IAuthRepository,
        private readonly hashService: HashService,
        private readonly jwtService: JwtService
    ) {}

    async execute(request: LoginRequest): Promise<AuthResponse> {
        const { email, password } = request;

        const user = await this.authRepository.findUserByEmail(email);
        if (!user) {
            throw new AppError('Credenciales inválidas', 401);
        }

        const isValidPassword = await this.hashService.compare(password, user.passwordHash || '');
        if (!isValidPassword) {
            throw new AppError('Credenciales inválidas', 401);
        }

        const tokens = this.jwtService.generateTokens({
            userId: user.id,
            email: user.email,
            role : user.role
        });

        await this.authRepository.updateUser(user.id, { updatedAt: new Date() });

        return {
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                phone: user.phone,
                role: user.role,
                verificationStatus: user.verificationStatus
            },
            ...tokens
        };
    }
}
    