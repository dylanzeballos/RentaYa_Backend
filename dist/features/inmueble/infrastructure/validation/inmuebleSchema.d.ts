import { z } from 'zod';
export declare const createInmuebleSchema: z.ZodObject<{
    body: z.ZodObject<{
        titulo: z.ZodString;
        descripcion: z.ZodOptional<z.ZodString>;
        direccion: z.ZodString;
        ciudad: z.ZodOptional<z.ZodString>;
        dormitorios: z.ZodOptional<z.ZodNumber>;
        banos: z.ZodOptional<z.ZodNumber>;
        areaM2: z.ZodOptional<z.ZodNumber>;
        precio: z.ZodNumber;
        tipoOperacion: z.ZodEnum<{
            alquiler: "alquiler";
            anticretico: "anticretico";
        }>;
        fotos: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const listInmueblesSchema: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodOptional<z.ZodString>;
        limit: z.ZodOptional<z.ZodString>;
        ciudad: z.ZodOptional<z.ZodString>;
        tipoOperacion: z.ZodOptional<z.ZodString>;
        minPrecio: z.ZodOptional<z.ZodString>;
        maxPrecio: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=inmuebleSchema.d.ts.map