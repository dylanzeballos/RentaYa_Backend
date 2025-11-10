import { IAuthRepository } from "@/features/auth/domain/repositories/IAuthRepository";
import { HashService } from "@/shared/infrastructure/services/HashService";
import { EmailService } from "@/shared/infrastructure/services/EmailService";
import { AppError } from "@/shared/domain/errors/AppError";
import crypto from "crypto";

export class ResetPasswordUseCase {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly hashService: HashService,
    private readonly emailService: EmailService,
  ) {}

  async execute(data: {
    code: string;
    newPassword: string;
  }): Promise<{ message: string }> {
    const { code, newPassword } = data;

    if (!/^\d{6}$/.test(code)) {
      throw new AppError("El código debe tener exactamente 6 dígitos", 400);
    }

    if (newPassword.length < 6) {
      throw new AppError("La contraseña debe tener al menos 6 caracteres", 400);
    }

    const hashedCode = crypto.createHash("sha256").update(code).digest("hex");

    const user = await this.authRepository.findUserByResetToken(hashedCode);

    if (!user) {
      throw new AppError(
        "El código es inválido o ha expirado. Por favor, solicita uno nuevo.",
        400,
      );
    }

    const passwordHash = await this.hashService.hash(newPassword);

    await this.authRepository.updatePassword(user.id, passwordHash);

    try {
      await this.emailService.sendPasswordChangedConfirmation(
        user.email,
        user.fullName || undefined,
      );
    } catch (error) {
      console.error("Error sending password change confirmation:", error);
    }

    return {
      message:
        "Tu contraseña ha sido restablecida exitosamente. Ya puedes iniciar sesión con tu nueva contraseña.",
    };
  }
}
