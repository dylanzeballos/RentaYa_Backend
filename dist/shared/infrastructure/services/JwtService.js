"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    accessTokenSecret;
    refreshTokenSecret;
    accessTokenExpiry = '30m';
    refreshTokenExpiry = '30d';
    constructor() {
        this.accessTokenSecret = process.env.JWT_SECRET || 'your_jwt_secret';
        this.refreshTokenSecret = process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret';
    }
    generateTokens(payload) {
        const accessToken = jsonwebtoken_1.default.sign(payload, this.accessTokenSecret, {
            expiresIn: this.accessTokenExpiry
        });
        const refreshToken = jsonwebtoken_1.default.sign(payload, this.refreshTokenSecret, {
            expiresIn: this.refreshTokenExpiry
        });
        return { accessToken, refreshToken };
    }
    verifyAccessToken = (token) => {
        return jsonwebtoken_1.default.verify(token, this.accessTokenSecret);
    };
    verifyRefreshToken = (token) => {
        return jsonwebtoken_1.default.verify(token, this.refreshTokenSecret);
    };
}
exports.JwtService = JwtService;
//# sourceMappingURL=JwtService.js.map