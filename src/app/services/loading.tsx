import { Skeleton } from '@/components/ui/skeleton';
import { randomUUID } from 'crypto';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.

  const ProductSkeleton = () => {
    return (
      <div className="grid items-center justify-center gap-3 h-96 lg:h-64">
        {/* Image segment */}
        <div className="flex  items-center justify-center">
          <Skeleton className="h-40 lg:w-48 w-72 " />
        </div>
        {/* Info segment */}
        <div className=" h-16 w-48 ">
          <Skeleton className="h-16 lg:w-48 w-72" />
        </div>
      </div>
    );
  };
  const arr = new Array(8).fill('');
  return (
    <main className="grid p-4 w-full h-screen gap-8 lg:grid-cols-4">
      {arr.map((val) => {
        let id = randomUUID();
        return <ProductSkeleton key={id} />;
      })}
    </main>
  );
}
