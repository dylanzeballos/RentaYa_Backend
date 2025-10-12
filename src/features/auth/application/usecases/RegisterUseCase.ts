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
        const { correoElectronico, contrasena, nombreCompleto, telefono } = request;

        const existingUser = await this.authRepository.findUserByEmail(correoElectronico);
        if (existingUser) {
            throw new AppError('El correo electrónico ya está en uso', 409);
        }

        const contrasenaHash = await this.hashService.hash(contrasena);

        const usuario = await this.authRepository.createUser({
            correoElectronico,
            contrasenaHash,
            nombreCompleto,
            telefono
        });

        const tokens = this.jwtService.generateTokens({
            userId: usuario.id,
            email: usuario.correoElectronico,
            role: usuario.rol
        });

        return {
            user: {
                id: usuario.id,
                correoElectronico: usuario.correoElectronico,
                nombreCompleto: usuario.nombreCompleto,
                telefono: usuario.telefono,
                rol: usuario.rol,
                estadoVerificacion: usuario.estadoVerificacion
            },
            ...tokens
        };
    }
}