"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenSchema = exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        correoElectronico: zod_1.z
            .string()
            .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato de correo electrónico inválido')
            .min(1, 'El correo electrónico es requerido'),
        contrasena: zod_1.z
            .string()
            .min(6, 'La contraseña debe tener al menos 6 caracteres')
            .max(50, 'La contraseña no debe exceder los 50 caracteres')
            .min(1, 'La contraseña es requerida'),
    }),
});
exports.registerSchema = zod_1.z.object({
    body: zod_1.z.object({
        correoElectronico: zod_1.z
            .string()
            .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato de correo electrónico inválido')
            .min(1, 'El correo electrónico es requerido'),
        contrasena: zod_1.z
            .string()
            .min(6, 'La contraseña debe tener al menos 6 caracteres')
            .max(50, 'La contraseña no debe exceder los 50 caracteres')
            .min(1, 'La contraseña es requerida'),
        nombreCompleto: zod_1.z
            .string()
            .min(1, 'El nombre completo es requerido')
            .max(100, 'El nombre completo no debe exceder los 100 caracteres'),
        telefono: zod_1.z
            .string()
            .regex(/^\+?[1-9]\d{1,14}$/, 'Formato de teléfono inválido')
            .optional(),
    }),
});
exports.refreshTokenSchema = zod_1.z.object({
    body: zod_1.z.object({
        refreshToken: zod_1.z.string().min(1, 'El refresh token es requerido')
    }),
});
//# sourceMappingURL=authSchema.js.map