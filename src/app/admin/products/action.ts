'use server';
import prisma from '@/lib/primaDB';
import { Product } from '@prisma/client';
import { TProductFormSchema } from './components/ptype';
import { revalidatePath } from 'next/cache';
import { pages } from 'next/dist/build/templates/app-page';

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
    return res;
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
    revalidatePath('/', 'page');
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete products');
  }
};
export const updateProduct = async (id: string, data: Product) => {
  try {
    const res = await prisma.product.update({
      where: { id },
      data,
    });
    revalidatePath('/', 'page');
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update products');
  }
};
export const addProduct = async (data: Partial<Product>) => {
  try {
    const res = await prisma.product.create({
      data: {
        ...data,
        name: data.name!,
        type: data.type!,
        // name: data.name,
        // type: data.type,
        // price: parseFloat(data.price),
        // image: data.image,
        // manufacturer: data.manufacturer,
        // description: data.description,
      },
    });
    revalidatePath('/admin/products', 'page');
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to add products');
  }
};
