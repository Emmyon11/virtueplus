'use server';
import prisma from '@/lib/primaDB';
import { uploadFiles } from '@/utils/uploadthing';
import { CartItem, Product } from '@prisma/client';

export const getUserCart = async (email: string) => {
  try {
    const res = await prisma.cart.findUnique({
      where: {
        userEmail: email,
      },
      include: {
        cartItems: true,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getCartItem = async (id: string) => {
  try {
    const res = await prisma.cartItem.findUnique({
      where: { id },
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
export const deleteCartItem = async (id: string) => {
  try {
    const res = await prisma.cartItem.delete({
      where: { id },
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
export const updateCartItem = async (id: string, data: Partial<CartItem>) => {
  try {
    const res = await prisma.product.update({
      where: { id },
      data,
    });
    return res;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
export const addToCart = async ({
  userEmail,
  productId,
  quantity,
}: {
  userEmail: string;
  productId: string;
  quantity: number;
}) => {
  try {
    let userCart = await prisma.cart.findUnique({
      where: {
        userEmail,
      },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: {
          userEmail,
        },
      });
    }
    const cartItem = await prisma.cartItem.create({
      data: { quantity, cartId: userEmail, productId },
    });

    return cartItem;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
