'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { LoginFormSchema, TLoginFormSchema } from '../../ztype';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { FaSpinner } from 'react-icons/fa6';
import { signIn } from 'next-auth/react';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
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
      if (res.ok) {
        toast({
          variant: 'default',
          title: 'Logged in successfully',
          description: 'You can now log in your account',
        });
        router.push('/');
      } else if (res.error) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong',
          description: res.error,
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
      </div>
    </main>
  );
};
export default LoginForm;
