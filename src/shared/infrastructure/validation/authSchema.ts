import {z} from 'zod';

export const loginSchema = z.object({
    body: z.object({
        correoElectronico: z
        .string()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato de correo electrónico inválido')
        .min(1, 'El correo electrónico es requerido'),
        contrasena: z
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(50, 'La contraseña no debe exceder los 50 caracteres')
        .min(1, 'La contraseña es requerida'),
    }),
});

export const registerSchema = z.object({
    body: z.object({
        correoElectronico: z
        .string()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato de correo electrónico inválido')
        .min(1, 'El correo electrónico es requerido'),
        contrasena: z
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(50, 'La contraseña no debe exceder los 50 caracteres')
        .min(1, 'La contraseña es requerida'),
        nombreCompleto: z
        .string()
        .min(1, 'El nombre completo es requerido')
        .max(100, 'El nombre completo no debe exceder los 100 caracteres'),
        telefono: z
        .string()
        .regex(/^\+?[1-9]\d{1,14}$/, 'Formato de teléfono inválido')
        .optional(),
    }),
});

export const refreshTokenSchema = z.object({
    body: z.object({
        refreshToken: z.string().min(1, 'El refresh token es requerido')
    }),
});

export const googleLoginSchema = z.object({
    token: z.string().min(1, 'Token de Google es requerido')
});