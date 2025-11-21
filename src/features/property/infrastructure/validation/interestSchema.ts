import { z } from "zod";

export const createInterestSchema = z.object({
  body: z.object({
    propertyId: z
      .string()
      .uuid("propertyId debe ser un UUID válido")
      .min(1, "propertyId es requerido"),
    message: z
      .string()
      .max(500, "El mensaje no debe exceder los 500 caracteres")
      .optional(),
  }),
});

export const updateInterestStatusSchema = z.object({
  body: z.object({
    status: z.enum(["aceptado", "rechazado"], {
      message: "El status debe ser 'aceptado' o 'rechazado'",
    }),
  }),
  params: z.object({
    interestId: z
      .string()
      .uuid("interestId debe ser un UUID válido")
      .min(1, "interestId es requerido"),
  }),
});

