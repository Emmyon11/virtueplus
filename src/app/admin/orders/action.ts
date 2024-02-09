'use server';
import prisma from '@/lib/primaDB';

export const getOrders = async () => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        orderItems: true,
      },
    });

    return orders;
  } catch (error) {
    console.log(error);
  }
};
export type OrdersReturnType = ReturnType<typeof getOrders> extends Promise<
  infer T
>
  ? T
  : never;
