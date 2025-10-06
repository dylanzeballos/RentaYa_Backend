"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmuebleRepository = void 0;
const prisma_1 = __importDefault(require("@/config/prisma"));
class InmuebleRepository {
    async createInmueble(payload) {
        const { fotos, ...inmuebleData } = payload;
        const create = await prisma_1.default.inmueble.create({
            data: {
                ...inmuebleData,
                fotosInmueble: fotos ?
                    { create: fotos.map((url, idx) => ({ url, orden: idx + 1 })) }
                    : undefined,
            },
            include: { fotosInmueble: true }
        });
        return create;
    }
}
exports.InmuebleRepository = InmuebleRepository;
//# sourceMappingURL=InmuebleRepository.js.map