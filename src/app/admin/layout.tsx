import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import SideBar from './components/SideBar';
import { TabsBar } from './components/TabBar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { NavTab } from './components/NavTab';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role != 'Admin') {
    // redirect('/');
  }
  return (
    <main className="lg:grid  relative lg:grid-cols-5 min-h-svh">
      <div className="lg:hidden fixed z-10 w-full p-2">
        <NavTab />
      </div>
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="col-span-4 relative">{children}</div>
    </main>
  );
}
