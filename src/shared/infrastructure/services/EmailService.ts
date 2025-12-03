import sgMail from '@sendgrid/mail';
import { AppError } from "@/shared/domain/errors/AppError";

export class EmailService {
  private fromEmail: string;
  private isConfigured: boolean = false;

  constructor() {
    this.fromEmail = process.env.EMAIL_FROM || "noreply@rentaya.com";
    
    const sendgridApiKey = process.env.SENDGRID_API_KEY;

    if (!sendgridApiKey) {
      console.error("SENDGRID_API_KEY not configured. Email functionality will be disabled.");
      this.isConfigured = false;
      return;
    }

    try {
      sgMail.setApiKey(sendgridApiKey);
      this.isConfigured = true;
      console.log("Email service configured with SendGrid API");
      console.log(`Sending from: ${this.fromEmail}`);
    } catch (error) {
      console.error("Error configuring SendGrid:", error);
      this.isConfigured = false;
    }
  }

  private async sendEmail(to: string, subject: string, html: string): Promise<void> {
    if (!this.isConfigured) {
      throw new AppError("Email service not configured", 500);
    }

    try {
      const msg = {
        to,
        from: this.fromEmail,
        subject,
        html,
      };

      await sgMail.send(msg);
      console.log(`Email sent successfully to: ${to}`);
    } catch (error: any) {
      console.error("SendGrid error:", error.response?.body || error);
      throw new AppError("Error al enviar el correo electrónico. Por favor, intenta nuevamente.", 500);
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
          .warning {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔐 Recuperación de Contraseña</h1>
          </div>
          <div class="content">
            <p>Hola${userName ? ` <strong>${userName}</strong>` : ""},</p>
            <p>Recibimos una solicitud para restablecer tu contraseña en <strong>RentaYa</strong>.</p>
            <p>Tu código de verificación es:</p>
            <div class="code-box">
              <div class="code">${resetCode}</div>
            </div>
            <p>Ingresa este código en la aplicación para continuar con el proceso de recuperación.</p>
            <p class="warning">⚠️ Este código expirará en ${expiryMinutes} minutos.</p>
            <p>Si no solicitaste restablecer tu contraseña, puedes ignorar este correo de forma segura.</p>
          </div>
          <div class="footer">
            <p>Saludos,<br><strong>El equipo de RentaYa</strong></p>
            <p>Este es un correo automático, por favor no respondas a este mensaje.</p>
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
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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
          .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          .success-icon {
            font-size: 64px;
            text-align: center;
            margin: 20px 0;
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
            <p>Hola${userName ? ` <strong>${userName}</strong>` : ""},</p>
            <p>Tu contraseña ha sido actualizada exitosamente.</p>
            <p>Si no realizaste este cambio, por favor contacta inmediatamente a nuestro equipo de soporte.</p>
          </div>
          <div class="footer">
            <p>Saludos,<br><strong>El equipo de RentaYa</strong></p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.sendEmail(to, "Contraseña Actualizada - RentaYa", htmlContent);
  }
}
