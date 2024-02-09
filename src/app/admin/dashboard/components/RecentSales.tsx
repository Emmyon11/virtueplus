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
          <div key={order.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={order.user.image} alt="Avatar" />
              <AvatarFallback>{getInitials(order.user.name)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm md:text-xs xl:text-sm font-medium leading-none">
                {order.user.name}
              </p>
              <p className="text-sm md:text-xs xl:text-sm text-muted-foreground">
                {order.user.email}
              </p>
            </div>
            <div className="md:text-sm xl:text-base ml-auto font-medium">
              {formatPrice(order.total)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
