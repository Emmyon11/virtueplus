import { Skeleton } from '@/components/ui/skeleton';
import { randomUUID } from 'crypto';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.

  const arr = new Array(2).fill('');
  return (
    <main className="flex flex-col p-1 gap-1 items-center justify-center h-screen">
      {arr.map((val) => {
        let id = randomUUID();
        return <Skeleton key={id} className="h-96 w-full" />;
      })}
    </main>
  );
}
