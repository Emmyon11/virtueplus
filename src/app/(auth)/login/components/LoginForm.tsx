'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { LoginFormSchema, TLoginFormSchema } from '../../ztype';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<TLoginFormSchema>({ resolver: zodResolver(LoginFormSchema) });

  const submit = ({ email, password }: TLoginFormSchema) => {};
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
            {errors?.email && <p>{errors.email.message}</p>}
          </div>
          <div className="">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="12345"
              {...register('password')}
            />
            {errors?.password && <p>{errors.password.message}</p>}
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
export default LoginForm;
