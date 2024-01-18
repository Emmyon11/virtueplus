import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowBottomRightIcon, ArrowRightIcon } from '@radix-ui/react-icons';

interface ClassName {
  className?: string;
}

const AuthButton: React.FC<ClassName> = ({ className }) => {
  return (
    <main>
      <div className={cn('flex gap-4 items-center', className)}>
        <Button size="lg" variant="ghost">
          Log In
        </Button>
        <Button className="flex gap-3" size="lg">
          Get Started <ArrowRightIcon />
        </Button>
      </div>
    </main>
  );
};
export default AuthButton;
