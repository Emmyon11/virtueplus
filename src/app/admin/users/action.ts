'use server';
import prisma from '@/lib/primaDB';
import { Product } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const getUsers = async () => {
  try {
    const res = await prisma.user.findMany();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get users');
  }
};
export const getUser = async (email: string) => {
  try {
    const res = await prisma.user.findUnique({
      where: { email },
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get user');
  }
};
export const deleteUser = async (email: string) => {
  try {
    const res = await prisma.user.delete({
      where: { email },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete user');
  }
};
export const updateUser = async (email: string, data: Partial<Product>) => {
  try {
    const res = await prisma.user.update({
      where: { email },
      data,
    });
    revalidatePath('/user', 'page');
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update user');
  }
};
