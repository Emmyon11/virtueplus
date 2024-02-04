import { TextAlignJustifyIcon } from '@radix-ui/react-icons';
import AuthButton from './AuthButton';
import NavItems from './NavItems';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getInitials } from '@/helpers/getInitials';
import UserMenuDropDown from './UserMenuDropDown';
import Cart from '../cart/Cart';
import Link from 'next/link';

const navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main className="sticky z-50 top-0 backdrop-filter  flex backdrop-blur-lg inset-x-0 justify-around items-center p-4">
      <div className="font-tektur lg:order-1 text-2xl cursor-pointer">
        <Link href="/">
          VIRTUEPLUS<span className="text-green-400">2</span>
        </Link>
      </div>
      {session ? (
        <div className="grid grid-cols-2 lg:order-3 gap-5">
          <UserMenuDropDown
            role={session?.user?.role!}
            email={session?.user?.email!}
            name={session?.user?.name!}
          >
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>
                {getInitials(session?.user?.name!)}
              </AvatarFallback>
            </Avatar>
          </UserMenuDropDown>

          <Cart email={session?.user?.email!} />
        </div>
      ) : (
        <AuthButton className="lg:order-3 hidden  lg:flex" />
      )}
      <div className="lg:order-2">
        <NavItems className1="" className2="">
          {session?.user ? '' : <AuthButton className="" />}
        </NavItems>
      </div>
    </main>
  );
};
export default navbar;
