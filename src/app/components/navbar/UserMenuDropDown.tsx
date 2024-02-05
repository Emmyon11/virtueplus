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
import Link from 'next/link';
import { ReactElement } from 'react';
import SignOutBtn from '../SignOutBtn';
import { ThemeToggle } from '../ThemeToggle';

type UserMenuDropDownProp = {
  children: ReactElement;
  role: Role;
  name: string;
  email: string;
};

const UserMenuDropDown = ({ children, role, name }: UserMenuDropDownProp) => {
  return (
    <main>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel asChild className="">
            <div className="flex items-center hover:bg-primary-foreground gap-2 justify-between">
              <Link href="/user" className="">
                <div className="">{name}</div>
              </Link>

              <div className="">
                <ThemeToggle />
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="font-nunito text-xl font-bold">
            {role === 'Admin' ? (
              <DropdownMenuItem className=" duration-100 hover:bg-primary-foreground hover:text-orange-400">
                <Link href="/admin">Admin</Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>user</DropdownMenuItem>
            )}

            <DropdownMenuItem className="text-red-500  duration-100 hover:bg-primary-foreground">
              <SignOutBtn />
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
};
export default UserMenuDropDown;
