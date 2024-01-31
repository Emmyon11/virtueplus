import { TextAlignJustifyIcon } from '@radix-ui/react-icons';
import AuthButton from './AuthButton';
import NavItems from './NavItems';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/helpers/getInitials';
import UserMenuDropDown from './UserMenuDropDown';
import Cart from '../cart/Cart';

const navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main className="sticky z-50 top-0 backdrop-filter  flex backdrop-blur-lg inset-x-0 justify-around items-center p-4">
      <div className="font-tektur text-2xl">
        VIRTUEPLUS<span className="text-green-400">2</span>
      </div>
      <NavItems
        className1="hidden md:flex text-slate-900 text-slate-600 md:gap-6 text-xl"
        className2=""
      />
      {session ? (
        <div className="grid grid-cols-2 gap-5">
          <UserMenuDropDown
            role={session.user.role}
            email={session.user.email}
            name={session.user.name}
          >
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>{getInitials(session.user.name)}</AvatarFallback>
            </Avatar>
          </UserMenuDropDown>

          <Cart email={session.user.email} />
        </div>
      ) : (
        <AuthButton className="hidden md:flex" />
      )}

      <div className="md:hidden  ">
        <Sheet>
          <SheetTrigger>
            <TextAlignJustifyIcon width={30} height={30} />
          </SheetTrigger>
          <SheetContent className="p-0 md:hidden">
            <SheetClose className="w-full">
              <NavItems
                className1="py-4 text-xl min-h-96 justify-stretch w-full text-slate-600 divide-y-2 divide-slate-200 flex-col md:hidden"
                className2=""
              >
                <AuthButton className=" md:hidden" />
              </NavItems>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
};
export default navbar;
