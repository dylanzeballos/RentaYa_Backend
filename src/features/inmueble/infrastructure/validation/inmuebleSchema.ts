import { z } from 'zod';

export const createInmuebleSchema = z.object({
  body: z.object({
    titulo: z.string()
      .min(3, 'El título debe tener al menos 3 caracteres')
      .max(100, 'El título no debe exceder los 100 caracteres'),
    descripcion: z.string()
      .optional(),
    direccion: z.string()
      .regex(/^[A-Za-zÀ-ÿ0-9\s.,'’-]+$/, 'La dirección contiene caracteres inválidos')
      .max(50, 'La dirección no debe exceder los 50 caracteres'),
    ciudad: z.string()
      .optional(),
    dormitorios: z.number()
      .int()
      .positive()
      .optional(),
    banos: z.number()
      .int()
      .positive()
      .optional(),
    areaM2: z.number()
      .positive()
      .optional(),
    precio: z.number()
      .positive(),
    tipoOperacion: z.enum(['alquiler', 'anticretico']),
    fotos: z.array(z.string().url()).optional(),
  })
});


export const listInmueblesSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    ciudad: z.string().optional(),
    tipoOperacion: z.string().optional(),
    minPrecio: z.string().optional(),
    maxPrecio: z.string().optional(),
  })
});
