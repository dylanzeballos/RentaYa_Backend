import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { JwtService } from "@/shared/infrastructure/services/JwtService";
import { RefreshTokenRequest, TokenResponse } from "@/shared/domain/types/AuthTypes";
export declare class RefreshTokenUseCase {
    private readonly authRepository;
    private readonly jwtService;
    constructor(authRepository: IAuthRepository, jwtService: JwtService);
    execute(request: RefreshTokenRequest): Promise<TokenResponse>;
}
//# sourceMappingURL=RefreshTokenUseCase.d.ts.map