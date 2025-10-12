import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { HashService } from "@/shared/infrastructure/services/HashService";
import { JwtService } from "@/shared/infrastructure/services/JwtService";
import { AuthResponse, LoginRequest } from "@/shared/domain/types/AuthTypes";
export declare class LoginUseCase {
    private readonly authRepository;
    private readonly hashService;
    private readonly jwtService;
    constructor(authRepository: IAuthRepository, hashService: HashService, jwtService: JwtService);
    execute(request: LoginRequest): Promise<AuthResponse>;
}
//# sourceMappingURL=LoginUseCase.d.ts.map