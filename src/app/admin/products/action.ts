'use server';
import prisma from '@/lib/primaDB';
import { uploadFiles } from '@/utils/uploadthing';
import { Product } from '@prisma/client';
import { TProductFormSchema } from './components/ptype';

export const getProducts = async () => {
  try {
    const res = await prisma.product.findMany();
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getProduct = async (id: string) => {
  try {
    const res = await prisma.product.findUnique({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
export const deleteProduct = async (id: string) => {
  try {
    const res = await prisma.product.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
export const updateProduct = async (id: string, data: Product) => {
  try {
    const res = await prisma.product.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
export const addProduct = async (data: TProductFormSchema) => {
  try {
    const res = await prisma.product.create({
      data: {
        name: data.name,
        type: data.type,
        price: parseFloat(data.price),
        image: data.image,
        manufacturer: data.manufacturer,
        description: data.description,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
