import { z } from 'zod';

export const OrderFormSchema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(4, 'Name should be greater than four letters'),
  address: z
    .string()
    .min(1, 'House number or nearby landmark must be provided'),
  street: z.string().min(1, 'Thuis field cannot be empty'),
  city: z.string().min(1, 'Thuis field cannot be empty'),
  state: z.string().min(1, 'Thuis field cannot be empty'),
  country: z.string().min(1, 'Thuis field cannot be empty'),
  mobileNo: z.string().min(1, 'Thuis field cannot be empty'),
});

export type TOrderFormSchema = z.infer<typeof OrderFormSchema>;
