"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleController = void 0;
const asyncHandler_1 = require("@/shared/infrastructure/utils/asyncHandler");
const ApiResponse_1 = require("@/shared/infrastructure/utils/ApiResponse");
class InmuebleController {
    createUseCase;
    constructor(createUseCase) {
        this.createUseCase = createUseCase;
    }
    inmueble = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const user = req.user;
        const payload = req.body;
        const created = await this.createUseCase.execute(payload, user);
        res.status(201).json(ApiResponse_1.ApiResponse.success(created, 'Inmueble creado exitosamente'));
    });
}
exports.InmuebleController = InmuebleController;
//# sourceMappingURL=InmubleController.js.map