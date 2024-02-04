'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { TUserUpdateFormSchema, UserUpdateFormSchema } from './updateFormType';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery } from 'react-query';
import { getUser, updateUser } from '@/app/admin/users/action';
import { User } from '@prisma/client';
import { useDrawerState, userState } from '@/utils/store';

const UserUpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TUserUpdateFormSchema>({
    resolver: zodResolver(UserUpdateFormSchema),
  });

  const { data: session, status } = useSession();
  const closedrawer = useDrawerState((state) => state.closeDrawer);
  const setUser = userState((state) => state.setUser);

  const router = useRouter();

  !session?.user && router.push('/');

  const { data: user, isLoading } = useQuery(
    ['user', session?.user?.email],
    () => getUser(session?.user?.email!)
  );

  const updateUserData = useMutation((data: Partial<User>) => {
    return updateUser(session?.user?.email!, data);
  });

  if (user) {
    setUser(user);
  }

  const submit = async (data: TUserUpdateFormSchema) => {
    try {
      const res = await updateUserData.mutateAsync(data);
      if (res) {
        toast({
          variant: 'default',
          title: 'Update Successful',
          description: 'Your profile has been updated sucessfully',
        });
        closedrawer();
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
      });
      console.log(error);
    }
  };

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
              defaultValue={user?.name!}
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
              defaultValue={user?.email}
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
              defaultValue={user?.mobileNo!}
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
              defaultValue={user?.address!}
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
                defaultValue={user?.street!}
                placeholder="Gimbiya"
                {...register('street')}
              />
            </div>

            <div className="">
              <Label>City</Label>
              <Input
                type="text"
                defaultValue={user?.city!}
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
                defaultValue={user?.state!}
                placeholder="Abuja"
                {...register('state')}
              />
            </div>
            <div className="">
              <Label>Country</Label>
              <Input
                type="text"
                placeholder="Nigeria"
                defaultValue={user?.country!}
                {...register('country')}
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-green_custom"
            >
              {updateUserData.isLoading ? (
                <div className="animate-spin">
                  <FaSpinner />
                </div>
              ) : (
                <div>Save details</div>
              )}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default UserUpdateForm;
