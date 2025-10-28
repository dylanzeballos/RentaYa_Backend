import z from "zod";

export const updateUserProfileSchema = z.object({
    fullName: z.string().
    min(1, 'Full name must be at least 1 character long').
    max(100, 'Full name must be at most 100 characters long').optional(),
    phone: z.string().min(7, 'Phone number must be at least 7 characters long').
    max(15, 'Phone number must be at most 15 characters long').optional(),
});

export type UpdateUserProfileSchema = z.infer<typeof updateUserProfileSchema>;