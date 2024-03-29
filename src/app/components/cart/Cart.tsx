import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FaShoppingCart } from 'react-icons/fa';
import CartItem from './CartItem';
import { getUserCart } from '../actions/cartActions';
import CheckOutBtn from './CheckOutBtn';
import CheckOutForm from './CheckOutForm';
import { OrderItem } from '@prisma/client';
import { OrderItemType } from '../../../../next-auth';

const Cart = async ({ email }: { email: string }) => {
  const userCart = await getUserCart(email);

  if (!userCart) {
    return (
      <div className="group -m-2 flex items-center p-2">
        <FaShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-green_custom group-hover:text-orange-400"
        />
        <span className="ml-2 text-sm font-tektur font-medium text-orange-400 group-hover:text-green_custom">
          0
        </span>
      </div>
    );
  }
  const cartTotal = userCart.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem?.product?.price!,
    0
  );
  const cartItemIds = userCart.cartItems.map((cartItem) => {
    return cartItem.id;
  });
  const orderItems: OrderItemType[] = userCart.cartItems.map((cartItem) => {
    return {
      quantity: cartItem.quantity,
      price: cartItem.product.price,
      productId: cartItem.productId,
      productImg: cartItem.product.image,
      productTitle: cartItem.product.name,
      pdfUrl: cartItem.product.fileUrl,
      productType: cartItem.product.type,
    };
  });

  const fee = 1;
  const itemCount = userCart.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <FaShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-green_custom group-hover:text-orange-400"
        />
        <span className="ml-2 text-sm font-tektur font-medium text-orange-400 group-hover:text-green_custom">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col p-10 pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              <ScrollArea>
                {userCart.cartItems.map((item) => (
                  <CartItem
                    itemId={item.id}
                    product={item.product}
                    quantity={item.quantity}
                    key={item.id}
                    remove={true}
                  />
                ))}
              </ScrollArea>
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(cartTotal + fee)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <CheckOutBtn
                    className="w-full"
                    buttonText="Continue to checkout"
                  >
                    <CheckOutForm
                      total={cartTotal + fee}
                      cartIds={cartItemIds}
                      orderItems={orderItems}
                    />
                  </CheckOutBtn>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              {/* <Image
                src="/hippo-empty-cart.png"
                fill
                alt="empty shopping cart hippo"
              /> */}
            </div>
            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foreground',
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
