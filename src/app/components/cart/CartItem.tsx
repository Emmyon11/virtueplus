'use client';
import { formatPrice } from '@/lib/utils';
import { Product } from '@prisma/client';
import Image from 'next/image';
import { FaImage } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { useMutation } from 'react-query';
import { deleteCartItem } from '../actions/cartActions';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

const CartItem = ({
  product,
  quantity,
  itemId,
  remove,
}: {
  product: Product;
  quantity: number;
  itemId: string;
  remove: boolean;
}) => {
  const deleteItem = useMutation((id: string) => {
    return deleteCartItem(id);
  });

  const router = useRouter();

  if (deleteItem.isSuccess) {
    toast({
      variant: 'default',
      title: 'Delete',
      description: `${product.name} has been removed from cart`,
    });
  }
  const image = product.image;
  return (
    <div
      onClick={() => router.push(`/goods/${product.id}`)}
      className="space-y-3 py-2 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            {image ? (
              <Image
                src={image}
                alt={product.name}
                fill
                className="absolute object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <FaImage
                  aria-hidden="true"
                  className="h-4 w-4 text-muted-foreground"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {product.name}
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              {product.type}
            </span>
            {remove && (
              <div className="mt-4 text-xs text-muted-foreground">
                <button
                  disabled={deleteItem.isLoading}
                  onClick={() => {
                    deleteItem.mutate(itemId);
                  }}
                  className="flex items-center text-red-500 gap-0.5"
                >
                  <FaX className="w-3 h-4" />
                  {deleteItem.isLoading ? (
                    <div className="">Removing...</div>
                  ) : (
                    'Remove'
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-1 font-medium">
          <span className="ml-auto line-clamp-1 text-sm">
            {formatPrice(product?.price!)}
          </span>
          {quantity > 1 ? (
            <div className="text-end text-xs text-green_custom">
              X {quantity}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
