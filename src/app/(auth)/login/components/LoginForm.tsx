'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { LoginFormSchema, TLoginFormSchema } from '../../ztype';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { FaSpinner } from 'react-icons/fa6';
import { signIn, useSession } from 'next-auth/react';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

import { refreshPath } from '../action';
import { use, useEffect } from 'react';
import Link from 'next/link';

const LoginForm = () => {
  const session = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TLoginFormSchema>({ resolver: zodResolver(LoginFormSchema) });
  const router = useRouter();

  const submit = async ({ email, password }: TLoginFormSchema) => {
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      if (res?.ok) {
        toast({
          variant: 'default',
          title: 'Logged in successfully',
          description: 'You can now log in your account',
        });
        await refreshPath();
        router.push('/');
      } else if (res?.error) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong',
          description: res?.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="">
        <form
          className="grid font-nunito gap-6 min-w-full"
          onSubmit={handleSubmit(submit)}
        >
          <div className="">
            <Label>Email</Label>
            <Input
              className="bg-primary-foreground"
              type="email"
              placeholder="example@email.com"
              {...register('email')}
            />
            {errors?.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="">
            <Label>Password</Label>
            <Input
              className="bg-primary-foreground"
              type="password"
              placeholder="12345"
              {...register('password')}
            />
            {errors?.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-center mt-4">
            <Button className="w-full bg-gradient-to-r from-orange-400 to-green_custom">
              {isSubmitting ? (
                <div className="animate-spin">
                  <FaSpinner />
                </div>
              ) : (
                <div>Log In</div>
              )}
            </Button>
          </div>
        </form>
        <div className=" text-center p-4">
          <Link
            className="transition-all text-blue-200 duration-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-green_custom hover:bg-clip-text hover:text-transparent"
            href="/sign-up"
          >
            Not registered?
          </Link>
        </div>
      </div>
    </main>
  );
};
export default LoginForm;
