import { z } from "zod";

export const createPropertySchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must not exceed 100 characters"),
  description: z.preprocess(
    (val) => (!val || val === "" ? undefined : val),
    z.string().optional(),
  ),
  address: z.preprocess(
    (val) => (!val || val === "" ? undefined : val),
    z
      .string()
      .regex(/^[A-Za-zÀ-ÿ0-9\s.,''-]+$/, "Address contains invalid characters")
      .max(50, "Address must not exceed 50 characters")
      .optional(),
  ),
  city: z.preprocess(
    (val) => (!val || val === "" ? undefined : val),
    z.string().optional(),
  ),
  bedrooms: z.preprocess((val) => {
    if (!val || val === "" || val === "undefined" || val === "null")
      return undefined;
    const parsed = parseInt(val as string, 10);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number().int().positive().optional()),
  bathrooms: z.preprocess((val) => {
    if (!val || val === "" || val === "undefined" || val === "null")
      return undefined;
    const parsed = parseInt(val as string, 10);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number().int().positive().optional()),
  areaM2: z.preprocess((val) => {
    if (!val || val === "" || val === "undefined" || val === "null")
      return undefined;
    const parsed = parseFloat(val as string);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number().positive().optional()),
  latitude: z.preprocess((val) => {
    if (!val || val === "" || val === "undefined" || val === "null")
      return undefined;
    const parsed = parseFloat(val as string);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number().min(-90).max(90).optional()),
  longitude: z.preprocess((val) => {
    if (!val || val === "" || val === "undefined" || val === "null")
      return undefined;
    const parsed = parseFloat(val as string);
    return isNaN(parsed) ? undefined : parsed;
  }, z.number().min(-180).max(180).optional()),
  price: z.preprocess(
    (val) => {
      if (!val || val === "" || val === "undefined" || val === "null") {
        throw new Error("Price is required");
      }
      const parsed = parseFloat(val as string);
      if (isNaN(parsed)) {
        throw new Error("Price must be a valid number");
      }
      return parsed;
    },
    z.number().positive({ message: "Price must be greater than 0" }),
  ),
  operationType: z.enum(["rent", "sale", "both"]),
  photos: z.preprocess(
    (val) => {
      if (!val) return undefined;
      if (typeof val === "string") {
        try {
          return JSON.parse(val);
        } catch {
          return [val];
        }
      }
      return val;
    },
    z.array(z.string().url("Each photo must be a valid URL")).optional(),
  ),
});

export const updatePropertySchema = z
  .object({
    title: z
      .string()
      .min(5, "Title must be at least 5 characters")
      .max(200, "Title must not exceed 200 characters")
      .optional(),
    description: z
      .string()
      .max(1000, "Description must not exceed 1000 characters")
      .nullable()
      .optional(),
    address: z
      .string()
      .max(300, "Address must not exceed 300 characters")
      .nullable()
      .optional(),
    city: z.string().max(100, "City must not exceed 100 characters").optional(),
    bedrooms: z.preprocess((val) => {
      if (!val || val === "" || val === "undefined" || val === "null")
        return undefined;
      const parsed = parseInt(val as string, 10);
      return isNaN(parsed) ? undefined : parsed;
    }, z.number().int().min(0).max(50).nullable().optional()),
    bathrooms: z.preprocess((val) => {
      if (!val || val === "" || val === "undefined" || val === "null")
        return undefined;
      const parsed = parseInt(val as string, 10);
      return isNaN(parsed) ? undefined : parsed;
    }, z.number().int().min(0).max(50).nullable().optional()),
    areaM2: z.preprocess((val) => {
      if (!val || val === "" || val === "undefined" || val === "null")
        return undefined;
      const parsed = parseFloat(val as string);
      return isNaN(parsed) ? undefined : parsed;
    }, z.number().min(0).nullable().optional()),
    latitude: z.preprocess((val) => {
      if (!val || val === "" || val === "undefined" || val === "null")
        return undefined;
      const parsed = parseFloat(val as string);
      return isNaN(parsed) ? undefined : parsed;
    }, z.number().min(-90).max(90).nullable().optional()),
    longitude: z.preprocess((val) => {
      if (!val || val === "" || val === "undefined" || val === "null")
        return undefined;
      const parsed = parseFloat(val as string);
      return isNaN(parsed) ? undefined : parsed;
    }, z.number().min(-180).max(180).nullable().optional()),
    price: z.preprocess((val) => {
      if (!val || val === "" || val === "undefined" || val === "null")
        return undefined;
      const parsed = parseFloat(val as string);
      return isNaN(parsed) ? undefined : parsed;
    }, z.number().min(0, "Price must be greater than 0").optional()),
    operationType: z.enum(["rent", "sale", "both"]).optional(),
    photos: z.preprocess(
      (val) => {
        if (!val) return undefined;
        if (typeof val === "string") {
          try {
            return JSON.parse(val);
          } catch {
            return [val];
          }
        }
        return val;
      },
      z.array(z.string().url("Each photo must be a valid URL")).optional(),
    ),
    photosToRemove: z.preprocess((val) => {
      if (!val) return undefined;
      if (typeof val === "string") {
        try {
          return JSON.parse(val);
        } catch {
          return [val];
        }
      }
      return val;
    }, z.array(z.string()).optional()),
    photosToAdd: z.preprocess(
      (val) => {
        if (!val) return undefined;
        if (typeof val === "string") {
          try {
            return JSON.parse(val);
          } catch {
            return [val];
          }
        }
        return val;
      },
      z.array(z.string().url("Each photo must be a valid URL")).optional(),
    ),
  })
  .refine(
    (data) => {
      return Object.values(data).some(
        (value) => value !== undefined && value !== null,
      );
    },
    {
      message: "At least one field must be provided for update",
    },
  );

export type CreatePropertyInput = z.infer<typeof createPropertySchema>;
export type UpdatePropertyInput = z.infer<typeof updatePropertySchema>;

export const listPropertiesSchema = z.object({
  query: z.object({
    page: z.string().optional(),
    limit: z.string().optional(),
    city: z.string().optional(),
    operationType: z.string().optional(),
    minPrice: z.string().optional(),
    maxPrice: z.string().optional(),
  }),
});

export const getPropertyDetailSchema = z.object({
  params: z.object({
    id: z.string().uuid("ID must be a valid UUID"),
  }),
});
