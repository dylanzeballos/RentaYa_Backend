import { IAuthRepository } from "@/features/auth/domain/repositories/IAuthRepository";
import { HashService } from "@/shared/infrastructure/services/HashService";
import { JwtService } from "@/shared/infrastructure/services/JwtService";
import { AppError } from "@/shared/domain/errors/AppError";

export class SetPasswordUseCase {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
  ) {}

  async execute(data: { userId: string; newPassword: string }): Promise<{
    message: string;
    accessToken: string;
    refreshToken: string;
  }> {
    const { userId, newPassword } = data;

    // Validar longitud mínima de contraseña
    if (newPassword.length < 6) {
      throw new AppError("La contraseña debe tener al menos 6 caracteres", 400);
    }

    // Buscar usuario por ID
    const user = await this.authRepository.findUserById(userId);
    if (!user) {
      throw new AppError("Usuario no encontrado", 404);
    }

    // Verificar que el usuario tenga googleId (es un usuario de Google)
    if (!user.googleId) {
      throw new AppError(
        "Esta funcionalidad es solo para usuarios que iniciaron sesión con Google",
        400,
      );
    }

    // Verificar si ya tiene contraseña
    if (user.passwordHash) {
      throw new AppError(
        "Ya tienes una contraseña establecida. Usa la opción de restablecer contraseña si deseas cambiarla.",
        400,
      );
    }

    // Hashear la nueva contraseña
    const passwordHash = await this.hashService.hash(newPassword);

    // Actualizar usuario con la nueva contraseña
    await this.authRepository.updateUser(userId, {
      passwordHash,
    });

    // Generar nuevos tokens
    const accessToken = this.jwtService.generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = this.jwtService.generateRefreshToken({
      userId: user.id,
    });

    // Guardar refresh token
    await this.authRepository.saveRefreshToken(user.id, refreshToken);

    return {
      message:
        "Contraseña establecida exitosamente. Ahora puedes iniciar sesión con email y contraseña.",
      accessToken,
      refreshToken,
    };
  }
}
