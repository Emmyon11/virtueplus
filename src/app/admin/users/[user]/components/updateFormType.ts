import { Role } from '@prisma/client';
import { z } from 'zod';

export const UserUpdateFormSchema = z.object({
  name: z.string().min(5, 'your name cannot be less than five letters'),
  email: z.string().email('Invalid email'),
  role: z.nativeEnum(Role),
  address: z.string(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  mobileNo: z.string(),
});

export type TUserUpdateFormSchema = z.infer<typeof UserUpdateFormSchema>;
