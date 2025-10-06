"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenUseCase = void 0;
const AppError_1 = require("@/shared/domain/errors/AppError");
class RefreshTokenUseCase {
    authRepository;
    jwtService;
    constructor(authRepository, jwtService) {
        this.authRepository = authRepository;
        this.jwtService = jwtService;
    }
    async execute(request) {
        const { refreshToken } = request;
        try {
            const decoded = this.jwtService.verifyRefreshToken(refreshToken);
            const usuario = await this.authRepository.findUserByEmail(decoded.email);
            if (!usuario) {
                throw new AppError_1.AppError('Usuario no encontrado', 404);
            }
            return this.jwtService.generateTokens({
                userId: usuario.id,
                email: usuario.correoElectronico
            });
        }
        catch (error) {
            throw new AppError_1.AppError('Token de refresco inválido o expirado', 403);
        }
    }
}
exports.RefreshTokenUseCase = RefreshTokenUseCase;
//# sourceMappingURL=RefreshTokenUseCase.js.map