import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Role } from '@prisma/client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { ReactElement } from 'react';
import { FaCartPlus } from 'react-icons/fa6';
import Cart from '../cart/Cart';
import SignOutBtn from '../SignOutBtn';
import { ThemeToggle } from '../ThemeToggle';

type UserMenuDropDownProp = {
  children: ReactElement;
  role: Role;
  name: string;
  email: string;
};

const UserMenuDropDown = ({
  children,
  role,
  email,
  name,
}: UserMenuDropDownProp) => {
  return (
    <main>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex">
            <div className="">{name}</div>
            <div className="">
              <ThemeToggle />
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="">
            <DropdownMenuItem></DropdownMenuItem>
            {role === 'Admin' ? (
              <DropdownMenuItem>
                <Link href="/admin">Admin</Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>user</DropdownMenuItem>
            )}

            <DropdownMenuItem>
              <SignOutBtn />
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
};
export default UserMenuDropDown;
