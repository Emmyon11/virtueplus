'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { FaCartPlus, FaChartBar, FaUser } from 'react-icons/fa6';
import { FaShoppingBag } from 'react-icons/fa';

const side_links = [
  { name: 'dashboard', link: '/admin', icon: <FaChartBar /> },
  { name: 'products', link: '/admin/products', icon: <FaShoppingBag /> },
  { name: 'orders', link: '/admin/orders', icon: <FaCartPlus /> },
  { name: 'users', link: '/admin/users', icon: <FaUser /> },
];

export function NavTab() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {side_links.map((link) => (
          <NavigationMenuItem key={link.link}>
            <Link href={link.link} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="">{link.icon}</div>
                <div className="">{link.name}</div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
