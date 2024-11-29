import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(1, "Name is required").max(50, "Name must not exceed 50 characters"),
    telephone: z
        .string()
        .min(1, "Telephone is required")
        .regex(/^[+]?[0-9\s-]{7,15}$/, "Telephone must be a valid number"),
});
