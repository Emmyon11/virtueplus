import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Order } from '@prisma/client';
import { OrdersReturnType } from '../../orders/action';
import { getInitials } from '@/helpers/getInitials';
import { formatPrice } from '@/lib/utils';

export function RecentSales({ orders }: { orders: OrdersReturnType }) {
  return (
    <div className="space-y-8">
      {orders.map((order) => {
        return (
          <div key={order.id} className="flex items-end ">
            <Avatar className="h-9 w-9">
              <AvatarImage src={order.user.image} alt="Avatar" />
              <AvatarFallback>{getInitials(order.user.name)}</AvatarFallback>
            </Avatar>
            <div className=" ml-4 space-y-1">
              <p className="text-xs xl:text-sm font-medium leading-none">
                {order.user.name}
              </p>
              <p className="text-xs font-light xl:text-sm leading-none w-14 text-nowrap overflow-hidden text-ellipsis">
                {order.user.email}
              </p>
            </div>
            <div className="text-xs xl:text-sm ml-auto font-medium">
              {formatPrice(order.total)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
