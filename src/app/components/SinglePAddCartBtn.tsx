'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Product } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { addToCart, getUserCart } from './actions/cartActions';
import { toast } from '@/components/ui/use-toast';
import { FaSpinner } from 'react-icons/fa6';
import { revalidatePath } from 'next/cache';

const addToCartSchema = z.object({
  quantity: z.string().optional(),
});

export type TaddTocart = z.infer<typeof addToCartSchema>;

const SinglePAddCartBtn = ({ product }: { product: Product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaddTocart>({ resolver: zodResolver(addToCartSchema) });
  const session = useSession();

  const submit = async (data: TaddTocart) => {
    console.log(data);
    if (!session?.data?.user) return; // not logged in
    try {
      console.log('add to cart');
      const res = await addToCart({
        productId: product.id,
        quantity: data.quantity ? parseInt(data.quantity) : 1,
        userEmail: session?.data?.user.email,
      });
      if (res?.id) {
        toast({
          variant: 'default',
          title: `Success`,
          description: `${product.name} added to cart`,
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Error!!!',
        description: 'Something went wrong',
      });
    }
  };
  return (
    <main>
      <form onSubmit={handleSubmit(submit)}>
        <div className=" flex gap-2">
          {product.quantity > 1 ? (
            <div className="">
              <input
                {...register('quantity')}
                className="w-16 ring-green_custom  focus:outline-none h-10 p-2 ring-2"
                defaultValue={1}
              />{' '}
              {errors?.quantity && (
                <p className="text-sm text-red-500">
                  {errors.quantity.message}
                </p>
              )}
            </div>
          ) : null}

          <button
            className="bg-slate-800 h-11 px-8 text-white p-2"
            disabled={product.quantity === 0}
            type="submit"
          >
            {isSubmitting ? (
              <div className="animate-spin">
                <FaSpinner />
              </div>
            ) : (
              <div>Add to Cart</div>
            )}
          </button>
          {errors?.quantity && (
            <p className="text-sm text-red-500">{errors.quantity.message}</p>
          )}
        </div>
      </form>
    </main>
  );
};
export default SinglePAddCartBtn;
