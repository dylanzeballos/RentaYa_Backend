"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
const AppError_1 = require("@/shared/domain/errors/AppError");
class LoginUseCase {
    authRepository;
    hashService;
    jwtService;
    constructor(authRepository, hashService, jwtService) {
        this.authRepository = authRepository;
        this.hashService = hashService;
        this.jwtService = jwtService;
    }
    async execute(request) {
        const { correoElectronico, contrasena } = request;
        const usuario = await this.authRepository.findUserByEmail(correoElectronico);
        if (!usuario) {
            throw new AppError_1.AppError('Credenciales inválidas', 401);
        }
        const isValidPassword = await this.hashService.compare(contrasena, usuario.contrasenaHash);
        if (!isValidPassword) {
            throw new AppError_1.AppError('Credenciales inválidas', 401);
        }
        const tokens = this.jwtService.generateTokens({
            userId: usuario.id,
            email: usuario.correoElectronico
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
exports.LoginUseCase = LoginUseCase;
//# sourceMappingURL=LoginUseCase.js.map