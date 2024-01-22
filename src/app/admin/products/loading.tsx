import { Skeleton } from '@/components/ui/skeleton';
import { randomUUID } from 'crypto';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.

  const ProductSkeleton = () => {
    return (
      <div className="grid items-center justify-center gap-3  h-64">
        {/* Image segment */}
        <div className="flex  items-center justify-center">
          <Skeleton className="h-40 w-48 " />
        </div>
        {/* Info segment */}
        <div className=" h-16 w-48 ">
          <Skeleton className="w-full h-full" />
        </div>
      </div>
    );
  };
  const arr = new Array(8).fill('');
  return (
    <main className="grid p-4 gap-8 grid-cols-4">
      {arr.map((val) => {
        let id = randomUUID();
        return <ProductSkeleton key={id} />;
      })}
    </main>
  );
}
