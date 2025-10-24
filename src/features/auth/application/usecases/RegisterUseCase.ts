import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { HashService } from "@/shared/infrastructure/services/HashService";
import { JwtService } from "@/shared/infrastructure/services/JwtService";
import { RegisterRequest, AuthResponse } from "@/shared/domain/types/AuthTypes";
import { AppError } from "@/shared/domain/errors/AppError";

export class RegisterUseCase {
    constructor(
        private readonly authRepository: IAuthRepository,
        private readonly hashService: HashService,
        private readonly jwtService: JwtService
    ) {}

    async execute(request: RegisterRequest): Promise<AuthResponse> {
        const { email, password, fullName, phone } = request;

        const existingUser = await this.authRepository.findUserByEmail(email);
        if (existingUser) {
            throw new AppError('El correo electrónico ya está en uso', 409);
        }

        const passwordHash = await this.hashService.hash(password);

        const user = await this.authRepository.createUser({
            email,
            passwordHash,
            fullName,
            phone
        });

        const tokens = this.jwtService.generateTokens({
            userId: user.id,
            email: user.email,
            role: user.role
        });

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