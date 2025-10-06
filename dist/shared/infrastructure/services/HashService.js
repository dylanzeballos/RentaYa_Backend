"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class HashService {
    saltRounds = 12;
    async hash(password) {
        return bcryptjs_1.default.hash(password, this.saltRounds);
    }
    async compare(password, hash) {
        return bcryptjs_1.default.compare(password, hash);
    }
}
exports.HashService = HashService;
//# sourceMappingURL=HashService.js.map