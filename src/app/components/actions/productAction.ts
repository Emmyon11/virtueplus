'use server';
import prisma from '@/lib/primaDB';

export const getSingleProduct = async (id: string) => {
  try {
    const res = await prisma.product.findUnique({
      where: { id },
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get product');
  }
};
