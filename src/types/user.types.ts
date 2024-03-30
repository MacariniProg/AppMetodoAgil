import { z } from 'zod';
import { TeamSchema } from './team.types';

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  office: z.string(),
  projects: z.array(TeamSchema)
});

export type User = z.infer<typeof UserSchema>;