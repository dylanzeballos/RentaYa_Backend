import jwt from 'jsonwebtoken';
import { TokenPayload, TokenResponse } from '@/shared/domain/types/AuthTypes';

export class JwtService {
    private readonly accessTokenSecret: string;
    private readonly refreshTokenSecret: string;
    private readonly accessTokenExpiry: string = '30m';
    private readonly refreshTokenExpiry: string = '30d';

    constructor() {
        this.accessTokenSecret = process.env.JWT_SECRET || 'your_jwt_secret';
        this.refreshTokenSecret = process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret';
    }

    generateTokens(payload: TokenPayload): TokenResponse {
        const accessToken = jwt.sign(payload, this.accessTokenSecret, {
            expiresIn: this.accessTokenExpiry
        });

        const refreshToken = jwt.sign(payload, this.refreshTokenSecret, {
            expiresIn: this.refreshTokenExpiry
        });

        return { accessToken, refreshToken };
    }
    
    verifyAccessToken = (token: string): TokenPayload => {
        return jwt.verify(token, this.accessTokenSecret) as TokenPayload;
    };

    verifyRefreshToken = (token: string): TokenPayload => {
        return jwt.verify(token, this.refreshTokenSecret) as TokenPayload;
    }
}