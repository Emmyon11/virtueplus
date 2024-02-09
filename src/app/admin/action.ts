'use server';

import { OrderItem, User } from '@prisma/client';
import { getOrders } from './orders/action';
import { getProducts } from './products/action';
import { getUsers } from './users/action';

export const getAllData = async () => {
  'use server';
  try {
    const users = await getUsers();
    const orders = await getOrders();
    const products = await getProducts();

    return {
      users: users,
      orders: orders,
      products: products,
    };
  } catch (error) {
    console.log(error);
  }
};

export type AllDataReturnType = ReturnType<typeof getAllData> extends Promise<
  infer T
>
  ? T
  : never;
