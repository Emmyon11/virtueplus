import CartItem from '@/app/components/cart/CartItem';
import { Separator } from '@/components/ui/separator';
import { formatDate, formatPrice } from '@/lib/utils';
import Image from 'next/image';
import { getOrders } from '../action';
import AOrderItem from './AOrderItem';

const AdminOrdersPage = async () => {
  const orders = await getOrders();

  return (
    <div className="min-h-screen  pt-10 md:pt-6 overflow-clip p-6">
      {orders && orders?.length > 0 ? (
        <div className="">
          {orders.map((order) => {
            return (
              <div
                key={order.id}
                className="p-4 m-4 animate-fade-in rounded-md shadow-sm bg-primary-foreground"
              >
                <div key={order.id} className="">
                  <div className="flex justify-between text-xs font-nunito text-gray-300 font-semibold">
                    <div className="">{formatDate(order?.createdAt!)}</div>
                    <div className="">{order.status}</div>
                  </div>
                  <div className="">
                    <AOrderItem user={order.user} order={order} />
                  </div>
                </div>
                <div className="flex justify-between items-baseline space-y-1 font-medium">
                  <div className="font-nunito text-xs  text-gray-400">
                    {order.id}
                  </div>
                  <div className="ml-auto line-clamp-1 text-sm">
                    {formatPrice(order.total)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-6">
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
export default AdminOrdersPage;
