import { IAuthRepository } from "@/features/auth/domain/repositories/IAuthRepository";
import { EmailService } from "@/shared/infrastructure/services/EmailService";
import { AppError } from "@/shared/domain/errors/AppError";
import crypto from "crypto";

export class ForgotPasswordUseCase {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly emailService: EmailService,
  ) {}

  async execute(email: string): Promise<{ message: string }> {
    const user = await this.authRepository.findUserByEmail(email);

    if (!user) {
      return {
        message:
          "Si el correo existe, recibirás un código de 6 dígitos para restablecer tu contraseña.",
      };
    }

    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

    const hashedCode = crypto
      .createHash("sha256")
      .update(resetCode)
      .digest("hex");

    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await this.authRepository.savePasswordResetToken(
      user.id,
      hashedCode,
      expiresAt,
    );

    try {
      await this.emailService.sendPasswordResetCode(
        user.email,
        resetCode,
        user.fullName || undefined,
      );
    } catch (error) {
      await this.authRepository.clearPasswordResetToken(user.id);
      throw new AppError(
        "Error al enviar el correo electrónico. Por favor, intenta nuevamente.",
        500,
      );
    }

    return {
      message:
        "Si el correo existe, recibirás un código de 6 dígitos para restablecer tu contraseña.",
    };
  }
}
