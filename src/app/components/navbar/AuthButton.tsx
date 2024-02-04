'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

interface ClassName {
  className?: string;
}

const AuthButton: React.FC<ClassName> = ({ className }) => {
  return (
    <main>
      <div className={cn('flex gap-4 items-center', className)}>
        <Button
          size="lg"
          className="hover:bg-gradient-to-r hover:from-orange-400 ease-linear hover:to-green_custom bg-secondary ring-1 transition-all duration-150 hover:ring-0 text-primary hover:text-secondary  ring-green_custom "
        >
          <Link href="/login">Log In</Link>
        </Button>
        <Button className="" asChild size="lg">
          <Link className="flex gap-3" href="/sign-up">
            Get Started <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </main>
  );
};
export default AuthButton;
