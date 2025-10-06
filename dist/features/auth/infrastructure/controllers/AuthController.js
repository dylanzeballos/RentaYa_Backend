"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const asyncHandler_1 = require("@/shared/infrastructure/utils/asyncHandler");
const ApiResponse_1 = require("@/shared/infrastructure/utils/ApiResponse");
class AuthController {
    loginUseCase;
    registerUseCase;
    refreshTokenUseCase;
    constructor(loginUseCase, registerUseCase, refreshTokenUseCase) {
        this.loginUseCase = loginUseCase;
        this.registerUseCase = registerUseCase;
        this.refreshTokenUseCase = refreshTokenUseCase;
    }
    login = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const result = await this.loginUseCase.execute(req.body);
        res.status(200).json(ApiResponse_1.ApiResponse.success(result, 'Login exitoso'));
    });
    register = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const result = await this.registerUseCase.execute(req.body);
        res.status(201).json(ApiResponse_1.ApiResponse.success(result, 'Registro exitoso'));
    });
    refreshToken = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const result = await this.refreshTokenUseCase.execute(req.body);
        res.status(200).json(ApiResponse_1.ApiResponse.success(result, 'Token renovado exitosamente'));
    });
}
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map