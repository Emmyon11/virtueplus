import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(5, 'your name cannot be less than five letters'),
});

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;

export const SignUpFormSchema = z
  .object({
    name: z.string().min(5, 'your name cannot be less than five letters'),
    email: z.string().email('Invalid email'),
    password: z.string().min(5, 'your name cannot be less than five letters'),
    verify_password: z
      .string()
      .min(5, 'your name cannot be less than five letters'),
  })
  .refine((data) => data.password === data.verify_password, {
    message: "Passwords don't match",
    path: ['verify_password'],
  });

export type TSignUpFormSchema = z.infer<typeof SignUpFormSchema>;
