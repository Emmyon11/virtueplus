'use server';
import prisma from '@/lib/primaDB';
import { Product } from '@prisma/client';

export const getUsers = async () => {
  try {
    const res = await prisma.user.findMany();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
export const getUser = async (email: string) => {
  try {
    const res = await prisma.user.findUnique({
      where: { email },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
export const deleteUser = async (email: string) => {
  try {
    const res = await prisma.user.delete({
      where: { email },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
export const updateUser = async (email: string, data: Product) => {
  try {
    const res = await prisma.user.update({
      where: { email },
      data,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
