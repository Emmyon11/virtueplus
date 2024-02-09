import { OrdersReturnType } from '@/app/admin/orders/action';
import { Order, Product, User } from '@prisma/client';

export function sortProductsByMonth(products: Product[]) {
  // Initialize an object to hold products grouped by month
  const productsByMonth: { [key: number]: Product[] } = {};

  products.forEach((product) => {
    const createdAt = new Date(product.createdAt);
    const month = createdAt.getMonth() + 1;
    if (!productsByMonth[month]) {
      productsByMonth[month] = [];
    }
    productsByMonth[month].push(product);
  });

  // Sorting products within each month
  for (const month in productsByMonth) {
    productsByMonth[+month].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateA.getTime() - dateB.getTime();
    });
  }

  return productsByMonth;
}
export function sortOrdersByMonth(orders: OrdersReturnType) {
  // Initialize an object to hold products grouped by month
  const ordersByMonth: { [key: number]: OrdersReturnType } = {};

  orders.forEach((order) => {
    const createdAt = new Date(order.createdAt);
    const month = createdAt.getMonth() + 1;
    if (!ordersByMonth[month]) {
      ordersByMonth[month] = [];
    }
    ordersByMonth[month].push(order);
  });

  // Sorting products within each month
  for (const month in ordersByMonth) {
    ordersByMonth[+month].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateA.getTime() - dateB.getTime();
    });
  }

  return ordersByMonth;
}
