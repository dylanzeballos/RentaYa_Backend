import { z } from 'zod';

export const createInmuebleSchema = z.object({
  body: z.object({
    title: z.string()
      .min(3, 'El título debe tener al menos 3 caracteres')
      .max(100, 'El título no debe exceder los 100 caracteres'),
    description: z.string()
      .optional(),
    address: z.string()
      .regex(/^[A-Za-zÀ-ÿ0-9\s.,'’-]+$/, 'La dirección contiene caracteres inválidos')
      .max(50, 'La dirección no debe exceder los 50 caracteres'),
    city: z.string()
      .optional(),
    bedrooms: z.number()
      .int()
      .positive()
      .optional(),
    bathrooms: z.number()
      .int()
      .positive()
      .optional(),
    areaM2: z.number()
      .positive()
      .optional(),
    price: z.number()
      .positive(),
    operationType: z.enum(['alquiler', 'anticretico']),
    photos: z.array(z.string().url()).optional(),
  })
});


export const listInmueblesSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    city: z.string().optional(),
    operationType: z.string().optional(),
    minPrice: z.string().optional(),
    maxPrice: z.string().optional(),
  })
});
