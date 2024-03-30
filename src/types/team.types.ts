import { z } from "zod";

export const TeamSchema = z.object({
    user: z.string(),
    userId: z.number(),
    project: z.string(),
    projectId: z.number(),
    role: z.string(),
});

export type Team = z.infer<typeof TeamSchema>;