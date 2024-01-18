'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { SignUpFormSchema, TSignUpFormSchema } from '../../ztype';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<TSignUpFormSchema>({ resolver: zodResolver(SignUpFormSchema) });

  const submit = ({ email, password }: TSignUpFormSchema) => {};
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
              placeholder="Firstname Lastname"
              {...register('name')}
            />
            {errors?.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
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
          <div className="">
            <Label>Verify Password</Label>
            <Input
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
              Log In
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};
export default SignUpForm;
