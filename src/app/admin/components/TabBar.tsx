'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';
import { FaCartPlus, FaChartBar, FaUser } from 'react-icons/fa6';

const side_links = [
  { name: 'dashboard', link: '/admin', icon: <FaChartBar /> },
  { name: 'products', link: '/admin/products', icon: <FaShoppingBag /> },
  { name: 'orders', link: '/admin/orders', icon: <FaCartPlus /> },
  { name: 'users', link: '/admin/users', icon: <FaUser /> },
];

export function TabsBar() {
  return (
    <Tabs defaultValue="orders" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        {side_links.map((link) => {
          return (
            <div key={link.link} className="">
              <TabsTrigger value={link.name}>
                <Link key={link.link} className="flex  gap-1" href={link.link}>
                  <div className="text-lg">{link.icon}</div>
                  {link.name}
                </Link>
              </TabsTrigger>
            </div>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
