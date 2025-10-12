"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUseCase = void 0;
const AppError_1 = require("@/shared/domain/errors/AppError");
class RegisterUseCase {
    authRepository;
    hashService;
    jwtService;
    constructor(authRepository, hashService, jwtService) {
        this.authRepository = authRepository;
        this.hashService = hashService;
        this.jwtService = jwtService;
    }
    async execute(request) {
        const { correoElectronico, contrasena, nombreCompleto, telefono } = request;
        const existingUser = await this.authRepository.findUserByEmail(correoElectronico);
        if (existingUser) {
            throw new AppError_1.AppError('El correo electrónico ya está en uso', 409);
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
            email: usuario.correoElectronico
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
exports.RegisterUseCase = RegisterUseCase;
//# sourceMappingURL=RegisterUseCase.js.map