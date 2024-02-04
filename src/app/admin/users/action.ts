'use server';
import prisma from '@/lib/primaDB';
import { Product } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const getUsers = async () => {
  try {
    const res = await prisma.user.findMany();
    res.forEach((user) => {
      delete user.hashedPassword;
      delete user.emailVerified;
    });
    return res;
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
    delete res.hashedPassword;
    delete res.emailVerified;
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get user');
  }
};

export const getUserOrders = async (email: string) => {
  try {
    const res = await prisma.order.findMany({
      where: { userEmail: email },
      include: {
        orderItems: true,
      },
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
    delete res.hashedPassword;
    delete res.emailVerified;
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update user');
  }
};
