import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import SideBar from './components/SideBar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-5 min-h-svh">
      <SideBar />
      <div className="col-span-4 bg-blue-100">{children}</div>
    </main>
  );
}
