'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuToggle } from './mobile/MenuToggle';

interface NavItemsProps {
  className1: string;
  className2: string;
  children?: ReactNode;
}

const links = [
  { name: 'Home', link: '/' },
  { name: 'goods', link: '/goods' },
  { name: 'services', link: '/services' },
  { name: 'courses', link: '/courses' },
  { name: 'faq', link: '/faq' },
  { name: 'about', link: '/about' },
];

const NavItems: React.FC<NavItemsProps> = ({
  children,
  className1,
  className2,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <main className="">
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl cursor-pointer lg:hidden"
      >
        <MenuToggle open={open} setOpen={setOpen} />
      </div>
      <ul
        className={cn(
          `lg:flex lg:items-center lg:pb-0 pb-12 overscroll-none  min-h-screen lg:min-h-5 absolute lg:static bg-secondary lg:bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-10 transition-all duration-500 ease-in ${
            open ? 'top-20 ' : 'top-[-900px]'
          }`,
          className1
        )}
      >
        {links.map((link) => {
          return (
            <li
              className="lg:ml-8 lg:hover:scale-125 hover:font-semibold hover:text-orange-400 duration-150 text-xl lg:my-0 my-9"
              key={link.link}
            >
              <Link
                href={link.link}
                onClick={() => setOpen(!open)}
                className={cn(
                  ' flex items-center pl-2 cursor-pointer capitalize',
                  className2
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        {}
        <li onClick={() => setOpen(!open)} className=" relative">
          {children}
        </li>
      </ul>
    </main>
  );
};

export default NavItems;
