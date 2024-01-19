import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface NavItemsProps {
  className1: string;
  className2: string;
  children?: ReactNode;
}

export const links = [
  { name: 'Home', link: '/' },
  { name: 'goods', link: '/goods' },
  { name: 'services', link: '/services' },
  { name: 'faq', link: '/faq' },
  { name: 'about', link: '/about' },
];

const NavItems: React.FC<NavItemsProps> = ({
  children,
  className1,
  className2,
}) => {
  return (
    <main className="">
      <div className={cn('lg:gap-14 font-semibold', className1)}>
        {links.map((link) => {
          return (
            <h3 key={link.link}>
              <Link
                href={link.link}
                className={cn(
                  'min-h-16 flex items-center pl-2 cursor-pointer capitalize',
                  className2
                )}
              >
                {link.name}
              </Link>
            </h3>
          );
        })}
      </div>
      <div className="">{children}</div>
    </main>
  );
};

export default NavItems;
