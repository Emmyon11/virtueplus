import { Skeleton } from '@/components/ui/skeleton';
import { randomUUID } from 'crypto';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.

  return (
    <div className="grid w-full gap-10 h-screen p-10">
      {/* Image segment */}
      <div className="hidden md:grid min-h-60 items-center w-full">
        <Skeleton className="h-full" />
      </div>
      {/* Info segment */}
      <div className="grid md:grid-cols-2 gap-10 h-full md:h-60 w-full ">
        <Skeleton className="h-full" />
        <Skeleton className="h-full" />
      </div>
    </div>
  );
}
