import nodemailer, { Transporter } from "nodemailer";
import { AppError } from "@/shared/domain/errors/AppError";

export class EmailService {
  private transporter: Transporter;
  private fromEmail: string;

  constructor() {
    const resendApiKey = process.env.RESEND_API_KEY;
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    
    this.fromEmail = process.env.EMAIL_FROM || "noreply@rentaya.com";

    if (resendApiKey) {
      this.transporter = nodemailer.createTransport({
        host: "smtp.resend.com",
        port: 465,
        secure: true,
        auth: {
          user: "resend",
          pass: resendApiKey,
        },
      });
      console.log("Email service configured with Resend");
    } else if (sendgridApiKey) {
      this.transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 465,
        secure: true,
        auth: {
          user: "apikey",
          pass: sendgridApiKey,
        },
      });
      console.log("Email service configured with SendGrid");
    } else if (emailUser && emailPassword) {
      const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
      const smtpPort = parseInt(process.env.SMTP_PORT || "465");
      
      this.transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: true,
        auth: {
          user: emailUser,
          pass: emailPassword,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      console.warn("Email service configured with Gmail (may fail on Railway)");
    } else {
      console.warn(
        "Email credentials not configured. Email functionality will be limited.",
      );
      this.transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false,
      });
    }

    this.verifyConnection();
  }

  private async verifyConnection(): Promise<void> {
    try {
      await this.transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (error) {
      console.error("SMTP connection failed:", error);
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
                    .header h1 {
                        margin: 0;
                        font-size: 28px;
                    }
                    .content {
                        padding: 30px 20px;
                    }
                    .greeting {
                        font-size: 18px;
                        margin-bottom: 20px;
                        color: #333;
                    }
                    .message {
                        margin-bottom: 25px;
                        color: #555;
                    }
                    .button-container {
                        text-align: center;
                        margin: 30px 0;
                    }
                    .reset-button {
                        display: inline-block;
                        padding: 14px 40px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: #ffffff;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                        font-size: 16px;
                        transition: transform 0.2s;
                    }
                    .reset-button:hover {
                        transform: translateY(-2px);
                    }
                    .alternative-link {
                        background-color: #f8f9fa;
                        padding: 15px;
                        border-radius: 5px;
                        margin: 20px 0;
                        word-break: break-all;
                        font-size: 12px;
                        color: #666;
                    }
                    .warning {
                        background-color: #fff3cd;
                        border-left: 4px solid #ffc107;
                        padding: 12px 15px;
                        margin: 20px 0;
                        color: #856404;
                    }
                    .footer {
                        background-color: #f8f9fa;
                        padding: 20px;
                        text-align: center;
                        font-size: 12px;
                        color: #6c757d;
                        border-top: 1px solid #dee2e6;
                    }
                    .expiry {
                        font-weight: bold;
                        color: #dc3545;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>RentaYa</h1>
                    </div>
                    <div class="content">
                        <p class="greeting">Hola${userName ? " " + userName : ""},</p>

                        <div class="message">
                            <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta en RentaYa.</p>
                            <p>Usa el siguiente código de verificación en la aplicación:</p>
                        </div>

                        <div class="code-box">
                            <div class="code">${resetCode}</div>
                        </div>

                        <div class="warning">
                            ⚠️ <strong>Importante:</strong> Este código expirará en <span class="expiry">${expiryMinutes} minutos</span>.
                        </div>

                        <div class="message">
                            <p><strong>Instrucciones:</strong></p>
                            <ol style="text-align: left; color: #555;">
                                <li>Abre la aplicación RentaYa</li>
                                <li>Ingresa tu correo electrónico</li>
                                <li>Introduce el código de 6 dígitos</li>
                                <li>Crea tu nueva contraseña</li>
                            </ol>
                            <p><strong>¿No solicitaste este cambio?</strong></p>
                            <p>Si no solicitaste restablecer tu contraseña, puedes ignorar este correo de forma segura. Tu contraseña actual permanecerá sin cambios.</p>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Este es un correo automático, por favor no respondas a este mensaje.</p>
                        <p>&copy; ${new Date().getFullYear()} RentaYa. Todos los derechos reservados.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

    const textContent = `
Hola${userName ? " " + userName : ""},

Recibimos una solicitud para restablecer la contraseña de tu cuenta en RentaYa.

Tu código de verificación es: ${resetCode}

Este código expirará en ${expiryMinutes} minutos.

Instrucciones:
1. Abre la aplicación RentaYa
2. Ingresa tu correo electrónico
3. Introduce el código de 6 dígitos
4. Crea tu nueva contraseña

Si no solicitaste este cambio, puedes ignorar este correo de forma segura.

Saludos,
El equipo de RentaYa
        `;

    try {
      await this.transporter.sendMail({
        from: `"RentaYa" <${this.fromEmail}>`,
        to,
        subject: `Tu código de verificación: ${resetCode} - RentaYa`,
        text: textContent,
        html: htmlContent,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      throw new AppError(
        "No se pudo enviar el correo electrónico. Por favor, intenta más tarde.",
        500,
      );
    }
  }

  async sendPasswordResetEmail(
    to: string,
    resetToken: string,
    userName?: string,
  ): Promise<void> {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    const expiryMinutes = 30;

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
                    .greeting {
                        font-size: 18px;
                        margin-bottom: 20px;
                        color: #333;
                    }
                    .message {
                        margin-bottom: 25px;
                        color: #555;
                    }
                    .button-container {
                        text-align: center;
                        margin: 30px 0;
                    }
                    .reset-button {
                        display: inline-block;
                        padding: 14px 40px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: #ffffff;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                        font-size: 16px;
                        transition: transform 0.2s;
                    }
                    .reset-button:hover {
                        transform: translateY(-2px);
                    }
                    .alternative-link {
                        background-color: #f8f9fa;
                        padding: 15px;
                        border-radius: 5px;
                        margin: 20px 0;
                        word-break: break-all;
                        font-size: 12px;
                        color: #666;
                    }
                    .warning {
                        background-color: #fff3cd;
                        border-left: 4px solid #ffc107;
                        padding: 12px 15px;
                        margin: 20px 0;
                        color: #856404;
                    }
                    .footer {
                        background-color: #f8f9fa;
                        padding: 20px;
                        text-align: center;
                        font-size: 12px;
                        color: #6c757d;
                        border-top: 1px solid #dee2e6;
                    }
                    .expiry {
                        font-weight: bold;
                        color: #dc3545;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>RentaYa</h1>
                    </div>
                    <div class="content">
                        <p class="greeting">Hola${userName ? " " + userName : ""},</p>

                        <div class="message">
                            <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta en RentaYa.</p>
                            <p>Haz clic en el botón de abajo para crear una nueva contraseña:</p>
                        </div>

                        <div class="button-container">
                            <a href="${resetUrl}" class="reset-button">Restablecer Contraseña</a>
                        </div>

                        <div class="alternative-link">
                            <strong>Si el botón no funciona, copia y pega este enlace en tu navegador:</strong><br>
                            ${resetUrl}
                        </div>

                        <div class="warning">
                            ⚠️ <strong>Importante:</strong> Este enlace expirará en <span class="expiry">${expiryMinutes} minutos</span>.
                        </div>

                        <div class="message">
                            <p><strong>¿No solicitaste este cambio?</strong></p>
                            <p>Si no solicitaste restablecer tu contraseña, puedes ignorar este correo de forma segura. Tu contraseña actual permanecerá sin cambios.</p>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Este es un correo automático, por favor no respondas a este mensaje.</p>
                        <p>&copy; ${new Date().getFullYear()} RentaYa. Todos los derechos reservados.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

    const textContent = `
Hola${userName ? " " + userName : ""},

Recibimos una solicitud para restablecer la contraseña de tu cuenta en RentaYa.

Para restablecer tu contraseña, visita el siguiente enlace:
${resetUrl}

Este enlace expirará en ${expiryMinutes} minutos.

Si no solicitaste este cambio, puedes ignorar este correo de forma segura.

Saludos,
El equipo de RentaYa
        `;

    try {
      await this.transporter.sendMail({
        from: `"RentaYa" <${this.fromEmail}>`,
        to,
        subject: "Restablece tu contraseña - RentaYa",
        text: textContent,
        html: htmlContent,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      throw new AppError(
        "No se pudo enviar el correo electrónico. Por favor, intenta más tarde.",
        500,
      );
    }
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
                    .success-icon {
                        text-align: center;
                        font-size: 48px;
                        margin-bottom: 20px;
                    }
                    .message {
                        margin-bottom: 20px;
                        color: #555;
                    }
                    .warning {
                        background-color: #fff3cd;
                        border-left: 4px solid #ffc107;
                        padding: 12px 15px;
                        margin: 20px 0;
                        color: #856404;
                    }
                    .footer {
                        background-color: #f8f9fa;
                        padding: 20px;
                        text-align: center;
                        font-size: 12px;
                        color: #6c757d;
                        border-top: 1px solid #dee2e6;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>RentaYa</h1>
                    </div>
                    <div class="content">
                        <div class="success-icon">🎉</div>

                        <p class="greeting">Hola${userName ? " " + userName : ""},</p>

                        <div class="message">
                            <p><strong>Tu contraseña ha sido cambiada exitosamente.</strong></p>
                            <p>Ya puedes iniciar sesión con tu nueva contraseña.</p>
                        </div>

                        <div class="warning">
                            ⚠️ <strong>¿No realizaste este cambio?</strong><br>
                            Si no fuiste tú quien cambió la contraseña, por favor contacta a nuestro equipo de soporte inmediatamente para proteger tu cuenta.
                        </div>
                    </div>
                    <div class="footer">
                        <p>Este es un correo automático, por favor no respondas a este mensaje.</p>
                        <p>&copy; ${new Date().getFullYear()} RentaYa. Todos los derechos reservados.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

    const textContent = `
Hola${userName ? " " + userName : ""},

Tu contraseña ha sido cambiada exitosamente.

Ya puedes iniciar sesión con tu nueva contraseña.

Si no realizaste este cambio, por favor contacta a nuestro equipo de soporte inmediatamente.

Saludos,
El equipo de RentaYa
        `;

    try {
      await this.transporter.sendMail({
        from: `"RentaYa" <${this.fromEmail}>`,
        to,
        subject: "Contraseña cambiada exitosamente - RentaYa",
        text: textContent,
        html: htmlContent,
      });
    } catch (error) {
      console.error("Error sending confirmation email:", error);
    }
  }
}
