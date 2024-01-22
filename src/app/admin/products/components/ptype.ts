import { Product, ProductTypes } from '@prisma/client';
import { z } from 'zod';

const MAX_FILE_SIZE = 5000000000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const ProductFormSchema = z.object({
  name: z.string().min(3, 'Your name cannot be less then three letters'),
  price: z.string().min(1, 'price '),
  type: z.nativeEnum(ProductTypes).default('Goods'),
  manufacturer: z.string().optional(),
  description: z.string().optional(),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    ),
});

export type TProductFormSchema = z.infer<typeof ProductFormSchema>;
