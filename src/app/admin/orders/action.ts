'use server';
import prisma from '@/lib/primaDB';

export const getOrders = async () => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        cartItems: {
          include: {
            product: true,
          },
        },
      },
    });

    return orders;
  } catch (error) {
    console.log(error);
  }
};
