import { z } from "zod";

export const TeamSchema = z.object({
    user: z.object({
        id: z.number(),
        name: z.string(),
        office: z.string(),
    }),
    userId: z.number(),
    project: z.object({
        id: z.number(),
        initialDate: z.string(),
        endDate: z.string().nullable(),
        name: z.string(),
        description: z.string(),
    }),
    projectId: z.number(),
    role: z.string(),
});

export type Team = z.infer<typeof TeamSchema>;