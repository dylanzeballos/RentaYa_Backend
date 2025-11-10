import { z } from "zod";

export const addFavoriteParamSchema = z.object({
  params: z.object({
    id: z.string().uuid("ID must be a valid UUID"),
  }),
});

export type AddFavoriteParamInput = z.infer<typeof addFavoriteParamSchema>;
