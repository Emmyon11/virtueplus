'use server';
import prisma from '@/lib/primaDB';
import { uploadFiles } from '@/utils/uploadthing';
import { CartItem, Order, Product } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const getUserCart = async (email: string) => {
  try {
    const res = await prisma.cart.findUnique({
      where: {
        userEmail: email,
      },
      include: {
        cartItems: {
          include: {
            product: true,
          },
        },
      },
    });

    return res;
  } catch (error) {
    console.log(error);
  }
};

interface CartItemID {
  id: string;
}

export const createOrder = async ({
  data,
  cartItemsId,
}: {
  data: Order;
  cartItemsId: CartItemID[];
}) => {
  try {
    const order = await prisma.order.create({
      data: {
        ...data,
        cartItems: {
          connect: [...cartItemsId],
        },
      },
    });

    return order;
  } catch (error) {}
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
    revalidatePath('/', 'layout');
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
    revalidatePath('/', 'layout');
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

    revalidatePath('/', 'layout');

    return cartItem;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get products');
  }
};
