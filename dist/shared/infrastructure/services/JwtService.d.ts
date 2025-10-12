import { TokenPayload, TokenResponse } from '@/shared/domain/types/AuthTypes';
export declare class JwtService {
    private readonly accessTokenSecret;
    private readonly refreshTokenSecret;
    private readonly accessTokenExpiry;
    private readonly refreshTokenExpiry;
    constructor();
    generateTokens(payload: TokenPayload): TokenResponse;
    verifyAccessToken: (token: string) => TokenPayload;
    verifyRefreshToken: (token: string) => TokenPayload;
}
//# sourceMappingURL=JwtService.d.ts.map