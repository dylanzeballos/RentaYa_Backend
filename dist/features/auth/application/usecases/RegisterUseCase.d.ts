import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { HashService } from "@/shared/infrastructure/services/HashService";
import { JwtService } from "@/shared/infrastructure/services/JwtService";
import { RegisterRequest, AuthResponse } from "@/shared/domain/types/AuthTypes";
export declare class RegisterUseCase {
    private readonly authRepository;
    private readonly hashService;
    private readonly jwtService;
    constructor(authRepository: IAuthRepository, hashService: HashService, jwtService: JwtService);
    execute(request: RegisterRequest): Promise<AuthResponse>;
}
//# sourceMappingURL=RegisterUseCase.d.ts.map