import { z } from "zod";

export const createInmuebleSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(3, "El título debe tener al menos 3 caracteres")
      .max(100, "El título no debe exceder los 100 caracteres"),
    description: z.string().optional(),
    address: z
      .string()
      .regex(
        /^[A-Za-zÀ-ÿ0-9\s.,'’-]+$/,
        "La dirección contiene caracteres inválidos"
      )
      .max(50, "La dirección no debe exceder los 50 caracteres"),
    city: z.string().optional(),
    propertyType: z
      .enum(["casa", "departamento", "oficina", "terreno"])
      .optional(),
    bedrooms: z.number().int().positive().optional(),
    bathrooms: z.number().int().positive().optional(),
    areaM2: z.number().positive().optional(),
    price: z.number().positive(),
    operationType: z.enum(["alquiler", "anticretico", "venta"]),
    photos: z.array(z.string().url()).optional(),
  }),
});

export const updateInmuebleSchema = z
  .object({
    title: z
      .string()
      .min(5, "El título debe tener al menos 5 caracteres")
      .max(200, "El título no debe exceder los 200 caracteres")
      .optional(),
    description: z
      .string()
      .max(1000, "Descripción no debe exceder los 1000 caracteres")
      .nullable()
      .optional(),
    address: z
      .string()
      .max(300, "Dirección no debe exceder los 300 caracteres")
      .nullable()
      .optional(),
    city: z
      .string()
      .max(100, "Ciudad no debe exceder los 100 caracteres")
      .optional(),
    bedrooms: z.number().int().min(0).max(50).nullable().optional(),
    bathrooms: z.number().int().min(0).max(50).nullable().optional(),
    areaM2: z.number().min(0).nullable().optional(),
    price: z.number().min(0, "Precio debe ser mayor que 0").optional(),
    operationType: z.enum(["SALE", "RENT", "BOTH"]).optional(),
    photosToAdd: z.array(z.string().url()).optional(),
    photosToRemove: z.array(z.string().url()).optional(),
  })
  .refine(
    (data) => {
      return Object.values(data).some(
        (value) => value !== undefined && value !== null
      );
    },
    {
      message: "Al menos un campo debe ser proporcionado para la actualización",
    }
  );

export type CreateInmuebleInput = z.infer<typeof createInmuebleSchema>;
export type UpdateInmuebleInput = z.infer<typeof updateInmuebleSchema>;

export const listInmueblesSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    city: z.string().optional(),
    operationType: z.string().optional(),
    minPrice: z.string().optional(),
    maxPrice: z.string().optional(),
  }),
});

export const getInmuebleDetailSchema = z.object({
  params: z.object({
    id: z.string().uuid('El ID debe ser un UUID válido')
  })
});

