'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Product } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { addToCart, getUserCart } from './actions/cartActions';
import { toast } from '@/components/ui/use-toast';
import { FaSpinner } from 'react-icons/fa6';

const addToCartSchema = z.object({
  quantity: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().gte(1, 'Must be 18 and above')
  ),
});

export type TaddTocart = z.infer<typeof addToCartSchema>;

const SinglePAddCartBtn = ({ product }: { product: Product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TaddTocart>({ resolver: zodResolver(addToCartSchema) });
  const {
    data: { user },
  } = useSession();

  const submit = async (data: TaddTocart) => {
    if (!user) return; // not logged in
    try {
      const res = await addToCart({
        productId: product.id,
        quantity: data.quantity,
        userEmail: user.email,
      });
      const userCart = await getUserCart(user.email);
      if (res?.id) {
        toast({
          variant: 'default',
          title: `Success`,
          description: `${product.name} added to cart`,
        });
      }
      console.log(userCart);
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
        <div className="">
          <input
            {...register('quantity')}
            className="w-16 ring-green_custom  focus:outline-none h-10 p-2 ring-2"
          />
          <button
            className="bg-slate-800 h-11 ml-4 px-8 text-white p-2"
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
