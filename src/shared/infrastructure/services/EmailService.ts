import { Resend } from "resend";
import { AppError } from "@/shared/domain/errors/AppError";

export class EmailService {
  private resend: Resend | null = null;
  private fromEmail: string;

  constructor() {
    const resendApiKey = process.env.RESEND_API_KEY;
    
    this.fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";

    if (resendApiKey) {
      this.resend = new Resend(resendApiKey);
      console.log("Email service configured with Resend API");
      console.log(`Sending from: ${this.fromEmail}`);
    } else {
      console.warn(
        "RESEND_API_KEY not configured. Email functionality will be disabled.",
      );
    }
  }

  private async sendEmail(
    to: string,
    subject: string,
    html: string,
  ): Promise<void> {
    if (!this.resend) {
      throw new AppError(
        "Email service not configured. Please contact support.",
        500,
      );
    }

    try {
      const { data, error } = await this.resend.emails.send({
        from: this.fromEmail,
        to: [to],
        subject,
        html,
      });

      if (error) {
        console.error("Resend error:", error);
        throw new AppError(
          "Error al enviar el correo electrónico. Por favor, intenta nuevamente.",
          500,
        );
      }

      console.log("Email sent successfully:", data?.id);
    } catch (error) {
      console.error("Error sending email:", error);
      throw new AppError(
        "Error al enviar el correo electrónico. Por favor, intenta nuevamente.",
        500,
      );
    }
  }

  async sendPasswordResetCode(
    to: string,
    resetCode: string,
    userName?: string,
  ): Promise<void> {
    const expiryMinutes = 15;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .content {
            padding: 30px 20px;
          }
          .code-box {
            background: #f8f9fa;
            border: 2px dashed #667eea;
            border-radius: 10px;
            padding: 20px;
            margin: 30px 0;
            text-align: center;
          }
          .code {
            font-size: 48px;
            font-weight: bold;
            color: #667eea;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
          }
          .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔐 Recuperación de Contraseña</h1>
          </div>
          <div class="content">
            <p>Hola${userName ? ` ${userName}` : ""},</p>
            <p>Recibimos una solicitud para restablecer tu contraseña en <strong>RentaYa</strong>.</p>
            <p>Usa el siguiente código para continuar con el proceso:</p>
            <div class="code-box">
              <div class="code">${resetCode}</div>
            </div>
            <p><strong>⏰ Este código expirará en ${expiryMinutes} minutos.</strong></p>
            <p>Si no solicitaste este cambio, puedes ignorar este correo de forma segura.</p>
          </div>
          <div class="footer">
            <p>Este es un correo automático, por favor no respondas.</p>
            <p>&copy; ${new Date().getFullYear()} RentaYa. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.sendEmail(to, "Código de Recuperación de Contraseña - RentaYa", htmlContent);
  }

  async sendPasswordChangedConfirmation(
    to: string,
    userName?: string,
  ): Promise<void> {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .content {
            padding: 30px 20px;
          }
          .success-icon {
            text-align: center;
            font-size: 64px;
            margin: 20px 0;
          }
          .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✅ Contraseña Actualizada</h1>
          </div>
          <div class="content">
            <div class="success-icon">🎉</div>
            <p>Hola${userName ? ` ${userName}` : ""},</p>
            <p>Tu contraseña ha sido cambiada exitosamente.</p>
            <p>Si no realizaste este cambio, por favor contacta a nuestro equipo de soporte inmediatamente.</p>
          </div>
          <div class="footer">
            <p>Este es un correo automático, por favor no respondas.</p>
            <p>&copy; ${new Date().getFullYear()} RentaYa. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.sendEmail(to, "Contraseña Actualizada - RentaYa", htmlContent);
  }

  async sendWelcomeEmail(to: string, userName: string): Promise<void> {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            padding: 40px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 32px;
          }
          .content {
            padding: 30px 20px;
          }
          .welcome-icon {
            text-align: center;
            font-size: 64px;
            margin: 20px 0;
          }
          .features {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
          }
          .features ul {
            margin: 0;
            padding-left: 20px;
          }
          .features li {
            margin: 10px 0;
          }
          .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>¡Bienvenido a RentaYa!</h1>
          </div>
          <div class="content">
            <div class="welcome-icon">👋</div>
            <p>Hola <strong>${userName}</strong>,</p>
            <p>¡Estamos emocionados de tenerte con nosotros!</p>
            <p>Con RentaYa puedes:</p>
            <div class="features">
              <ul>
                <li>Buscar propiedades en alquiler o venta</li>
                <li>Publicar tus propias propiedades</li>
                <li>Conectar con propietarios e inquilinos</li>
                <li>Recibir notificaciones de nuevas propiedades</li>
                <li>Dejar reseñas y valoraciones</li>
              </ul>
            </div>
            <p>¡Comienza a explorar ahora mismo!</p>
          </div>
          <div class="footer">
            <p>¿Tienes preguntas? Estamos aquí para ayudarte.</p>
            <p>&copy; ${new Date().getFullYear()} RentaYa. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.sendEmail(to, "¡Bienvenido a RentaYa! 🏡", htmlContent);
  }

  async sendPropertyNotification(
    to: string,
    propertyTitle: string,
    propertyUrl: string,
  ): Promise<void> {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            color: #ffffff;
            padding: 30px 20px;
            text-align: center;
          }
          .content {
            padding: 30px 20px;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background: #667eea;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
          }
          .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nueva Propiedad Disponible</h1>
          </div>
          <div class="content">
            <p>¡Hola!</p>
            <p>Hay una nueva propiedad que puede interesarte:</p>
            <h2>${propertyTitle}</h2>
            <p style="text-align: center;">
              <a href="${propertyUrl}" class="button">Ver Propiedad</a>
            </p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} RentaYa. Todos los derechos reservados.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.sendEmail(to, "Nueva Propiedad Disponible - RentaYa", htmlContent);
  }
}
