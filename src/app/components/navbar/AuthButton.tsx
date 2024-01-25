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
        <Button size="lg" variant="ghost">
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
