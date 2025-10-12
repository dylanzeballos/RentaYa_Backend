import { z } from 'zod';
export declare const loginSchema: z.ZodObject<{
    body: z.ZodObject<{
        correoElectronico: z.ZodString;
        contrasena: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const registerSchema: z.ZodObject<{
    body: z.ZodObject<{
        correoElectronico: z.ZodString;
        contrasena: z.ZodString;
        nombreCompleto: z.ZodString;
        telefono: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const refreshTokenSchema: z.ZodObject<{
    body: z.ZodObject<{
        refreshToken: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=authSchema.d.ts.map