"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const prisma_1 = __importDefault(require("@/config/prisma"));
class AuthRepository {
    async findUserByEmail(email) {
        return prisma_1.default.usuario.findUnique({
            where: { correoElectronico: email }
        });
    }
    async createUser(userData) {
        return prisma_1.default.usuario.create({
            data: userData
        });
    }
    async updateUser(id, data) {
        return prisma_1.default.usuario.update({
            where: { id },
            data
        });
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=AuthRepository.js.map