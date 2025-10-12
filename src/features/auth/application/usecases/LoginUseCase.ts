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
        const { correoElectronico, contrasena } = request;

        const usuario = await this.authRepository.findUserByEmail(correoElectronico);
        if (!usuario) {
            throw new AppError('Credenciales inválidas', 401);
        }

        const isValidPassword = await this.hashService.compare(contrasena, usuario.contrasenaHash || '');
        if (!isValidPassword) {
            throw new AppError('Credenciales inválidas', 401);
        }

        const tokens = this.jwtService.generateTokens({
            userId: usuario.id,
            email: usuario.correoElectronico,
            role : usuario.rol
        });

        await this.authRepository.updateUser(usuario.id, { fechaActualizacion: new Date() });

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
    