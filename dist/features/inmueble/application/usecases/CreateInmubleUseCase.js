"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInmuebleUseCase = void 0;
class CreateInmuebleUseCase {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async execute(data, user) {
        if (user.rol && user.rol !== 'propietario') {
            const err = new Error('Solo los usuarios con rol propietario pueden crear inmuebles');
            err.status = 403;
            throw err;
        }
        const payload = { ...data, propietarioId: user.id };
        const created = await this.repo.createInmueble(payload);
        return created;
    }
}
exports.CreateInmuebleUseCase = CreateInmuebleUseCase;
//# sourceMappingURL=CreateInmubleUseCase.js.map