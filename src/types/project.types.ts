// model Project {
//     id          Int       @id @default(autoincrement())
//     initialDate DateTime
//     endDate     DateTime?
//     name        String
//     description String
//     users       Team[]
//     // sprints      Sprint[]
//   }

import { z } from 'zod';
import { TeamSchema } from './team.types';

export const ProjectSchema = z.object({
    id: z.number(),
    initialDate: z.string(),
    endDate: z.string().nullable(),
    name: z.string(),
    description: z.string(),
    users: z.array(TeamSchema),
});

export type ProjectProps = z.infer<typeof ProjectSchema>;