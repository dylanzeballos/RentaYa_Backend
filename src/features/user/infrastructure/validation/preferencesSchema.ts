import { z } from 'zod';

export const preferencesSchema = z.object({
    userId: z.string().uuid(),
    propertyTypes: z.array(z.string()),
    modality: z.string().optional().nullable(),
    locations: z.array(z.string())
});

export type PreferencesSchema = z.infer<typeof preferencesSchema>;
