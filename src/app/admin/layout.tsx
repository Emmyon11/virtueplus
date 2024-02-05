import type { Metadata } from 'next';

import SideBar from './components/SideBar';

import { getServerSession } from 'next-auth';

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
    <main className="lg:grid relative lg:grid-cols-5 min-h-svh">
      <div className="lg:hidden fixed z-10 p-2">
        <NavTab />
      </div>
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="col-span-4 pt-7 md:pt-0">{children}</div>
    </main>
  );
}
