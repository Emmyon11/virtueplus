import { Product, ProductTypes } from '@prisma/client';
import { z } from 'zod';

const MAX_FILE_SIZE = 4194304;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];
const ACCEPTED_PDF_TYPES = ['application/pdf'];

export const ProductFormSchema = z.object({
  name: z.string().min(3, 'Your name cannot be less then three letters'),
  price: z.string().min(1, 'price '),
  type: z.nativeEnum(ProductTypes).default('Goods'),
  manufacturer: z.string().optional(),
  description: z.string().optional(),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE && !!files?.length,
      `Max image size is 4MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    ),

  pdfFile: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE * 2 && !!files?.length,
      `Max PDF file size is 8MB.`
    )
    .refine(
      (files) => ACCEPTED_PDF_TYPES.includes(files?.[0]?.type),
      'Only .pdf format is supported for PDF files.'
    ),
});

export type TProductFormSchema = z.infer<typeof ProductFormSchema>;
