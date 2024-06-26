import { z } from 'zod';
import { TeamSchema } from './team.types';

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  office: z.string(),
  projects: z.array(TeamSchema).optional(),
});

export type UserProps = z.infer<typeof UserSchema>;

export interface UserBaseProps{
  id: number,
  name: string,
  office: string,
}

export interface UserInProjectProps {
  userId: number,
  projectId: number,
  role: string,
  user: UserBaseProps
}