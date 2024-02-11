'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { SignUpFormSchema, TSignUpFormSchema } from '../../ztype';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa6';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const SignUpForm = () => {
  const session = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpFormSchema>({ resolver: zodResolver(SignUpFormSchema) });

  const router = useRouter();
  if (session?.data?.user) {
    router.push('/');
  }

  const submit = async ({ name, email, password }: TSignUpFormSchema) => {
    try {
      const res = await axios.post('/api/auth/sign-up', {
        name,
        email,
        password,
      });
      if (res.status === 200 || 201) {
        toast({
          variant: 'default',
          title: 'Registration successful',
          description: 'You can now log in your account',
        });
        router.push('/login');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: error?.response?.data,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
        });
        console.log(error);
      }
    }
  };
  return (
    <main>
      <div className="">
        <form
          className="grid font-nunito gap-3  min-w-full"
          onSubmit={handleSubmit(submit)}
        >
          <div className="">
            <Label>Name</Label>
            <Input
              type="text"
              className="bg-primary-foreground"
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
          <div className="">
            <Label>Verify Password</Label>
            <Input
              className="bg-primary-foreground"
              type="password"
              placeholder="example@email.com"
              {...register('verify_password')}
            />
            {errors?.verify_password && (
              <p className="text-sm text-red-500">
                {errors.verify_password.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center mt-4">
            <Button className="w-full bg-gradient-to-r from-orange-400 to-green_custom">
              {isSubmitting ? (
                <div className="animate-spin">
                  <FaSpinner />
                </div>
              ) : (
                <div>Sign Up</div>
              )}
            </Button>
          </div>
        </form>
        <div className=" text-center p-4">
          <Link
            className="transition-all text-blue-200 duration-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-green_custom hover:bg-clip-text hover:text-transparent"
            href="/login"
          >
            Registered?
          </Link>
        </div>
      </div>
    </main>
  );
};
export default SignUpForm;
