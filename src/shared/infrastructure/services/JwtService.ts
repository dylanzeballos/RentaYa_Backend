import jwt, { SignOptions } from 'jsonwebtoken';
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
        const options: any = { expiresIn: this.accessTokenExpiry };
        const refreshOptions: any = { expiresIn: this.refreshTokenExpiry };
        
        const accessToken = jwt.sign(payload as object, this.accessTokenSecret, options);
        const refreshToken = jwt.sign(payload as object, this.refreshTokenSecret, refreshOptions);

        return { accessToken, refreshToken };
    }

    generateAccessToken(payload: TokenPayload): string {
        const options: any = { expiresIn: this.accessTokenExpiry };
        return jwt.sign(payload as object, this.accessTokenSecret, options);
    }

    generateRefreshToken(payload: Pick<TokenPayload, 'userId'>): string {
        const options: any = { expiresIn: this.refreshTokenExpiry };
        return jwt.sign(payload as object, this.refreshTokenSecret, options);
    }
    
    verifyAccessToken = (token: string): TokenPayload => {
        return jwt.verify(token, this.accessTokenSecret) as TokenPayload;
    };

    verifyRefreshToken = (token: string): TokenPayload => {
        return jwt.verify(token, this.refreshTokenSecret) as TokenPayload;
    }
}