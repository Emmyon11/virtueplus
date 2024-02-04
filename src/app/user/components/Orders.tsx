import { getUserOrders } from '@/app/admin/users/action';
import CartItem from '@/app/components/cart/CartItem';
import { Separator } from '@/components/ui/separator';
import { formatDate, formatPrice } from '@/lib/utils';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import OrderItem from './OrderItem';

const Orders = async () => {
  const { user } = await getServerSession();
  const userOrder = await getUserOrders(user.email);
  return (
    <div className="basis-2/3 relative order-2 lg:order-1 min-h-96 bg-white overflow-clip lg:rounded-md lg:shadow-md lg:mb-10">
      {userOrder.length > 0 ? (
        <div className="">
          {userOrder.map((order) => {
            return (
              <div className="p-4 m-4 rounded-md shadow-sm bg-primary-foreground">
                <div key={order.id} className="">
                  <div className="flex justify-between text-xs font-nunito text-gray-300 font-semibold">
                    <div className="">{formatDate(order.createdAt)}</div>
                    <div className="">{order.status}</div>
                  </div>
                  {order.orderItems.map((item, index) => {
                    return (
                      <div key={item.id} className="">
                        <OrderItem
                          itemId={item.id}
                          product={item}
                          quantity={item.quantity}
                        />

                        {index !== order.orderItems.length - 1 ? (
                          <Separator key={item.id} />
                        ) : (
                          ''
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="font-nunito font-bold text-slate-700">
                  {formatPrice(order.total)}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="h-full">
            <Image
              alt="empty order image"
              fill
              className="object-contain lg:p-10"
              src="/images/void.svg"
            />
          </div>
          <div className="absolute inset-0 top-20 lg:p-10 z-10">
            <h1 className="text-6xl font-nunito font-bold text-teal-500 text-wrap text-center">
              Oops... <br /> No order found
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
export default Orders;
