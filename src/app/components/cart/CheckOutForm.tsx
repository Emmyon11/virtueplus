'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery } from 'react-query';
import { getUser, updateUser } from '@/app/admin/users/action';
import { Order, User } from '@prisma/client';
import { useDrawerState } from '@/utils/store';
import { OrderFormSchema, TOrderFormSchema } from './orderZSchema.';
import { formatPrice } from '@/lib/utils';
import { CartItemID, createOrder } from '../actions/cartActions';
import PayButton from './PayBtn';
import { useState } from 'react';

type PropType = {
  total: number;
  cartIds: CartItemID[];
};

const CheckOutForm = ({ total, cartIds }: PropType) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TOrderFormSchema>({
    resolver: zodResolver(OrderFormSchema),
  });

  const { data: session, status } = useSession();
  const [orderData, setOrderData] = useState<Order>();
  const closedrawer = useDrawerState((state) => state.closeDrawer);

  const router = useRouter();

  !session?.user && router.push('/');

  const { data: user, isLoading } = useQuery(
    ['user', session?.user.email],
    () => getUser(session?.user.email)
  );

  const submit = async (data: TOrderFormSchema) => {
    setOrderData(() => {
      return {
        name: data.name,
        email: data.email,
        address: data.address,
        city: data.city,
        country: data.country,
        mobileNo: data.mobileNo,
        state: data.state,
        street: data.street,
        id: null,
        userEmail: session?.user.email,
        total: total,
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    closedrawer();
  };

  const createUserOrder = useMutation(() => {
    return createOrder({
      data: orderData,
      cartItemsId: cartIds,
      userEmail: session.user.email,
    });
  });

  return isLoading ? (
    <div className="grid justify-center items-center text-8xl animate-spin">
      <FaSpinner />
    </div>
  ) : (
    <main>
      <div className="">
        <form
          className="grid font-nunito 2  min-w-full"
          onSubmit={handleSubmit(submit)}
        >
          <div className="">
            <Label>Name</Label>
            <Input
              type="text"
              defaultValue={user?.name}
              placeholder="Firstname Lastname"
              {...register('name')}
            />
            {errors?.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="">
            <Label>Email</Label>
            <Input
              type="email"
              defaultValue={user.email}
              placeholder="example@email.com"
              {...register('email')}
            />
            {errors?.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="">
            <Label>Phone Number</Label>
            <Input
              type="tel"
              defaultValue={user.mobileNo}
              placeholder="0800001112222"
              {...register('mobileNo')}
            />
            {errors?.mobileNo && (
              <p className="text-sm text-red-500">{errors.mobileNo.message}</p>
            )}
          </div>
          <div className="">
            <Label>House number or landmark</Label>
            <Input
              type="text"
              defaultValue={user.address}
              placeholder="No 1 street name"
              {...register('address')}
            />
            {errors?.address && (
              <p className="text-sm text-red-500">{errors.address.message}</p>
            )}
          </div>
          <div className="flex gap-3">
            <div className="">
              <Label>Street</Label>
              <Input
                type="text"
                defaultValue={user.street}
                placeholder="Gimbiya"
                {...register('street')}
              />
            </div>

            <div className="">
              <Label>City</Label>
              <Input
                type="text"
                defaultValue={user.city}
                placeholder="Garki"
                {...register('city')}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <Label>State</Label>
              <Input
                type="text"
                defaultValue={user.state}
                placeholder="Abuja"
                {...register('state')}
              />
            </div>
            <div className="">
              <Label>Country</Label>
              <Input
                type="text"
                placeholder="Nigeria"
                defaultValue={user.country}
                {...register('country')}
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-green_custom"
            >
              {createUserOrder.isLoading ? (
                <div className="animate-spin">
                  <FaSpinner />
                </div>
              ) : (
                <PayButton
                  email={session.user.email}
                  text={`click to pay ${formatPrice(total)}`}
                  amount={total * 100}
                  createFn={createUserOrder.mutateAsync}
                />
              )}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default CheckOutForm;
