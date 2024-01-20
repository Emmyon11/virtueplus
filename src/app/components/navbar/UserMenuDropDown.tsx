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

type UserMenuDropDownProp = {
  children: ReactElement;
  role: Role;
  name: string;
};

const UserMenuDropDown = ({ children, role, name }: UserMenuDropDownProp) => {
  return (
    <main>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="">
            <DropdownMenuItem>
              <FaCartPlus />
              <div>cart</div>
            </DropdownMenuItem>
            {role == 'User' ? (
              <DropdownMenuItem>
                <Link href="/admin">Admin</Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>user</DropdownMenuItem>
            )}

            <DropdownMenuItem>
              <Button variant="destructive">Sign Out</Button>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
};
export default UserMenuDropDown;
