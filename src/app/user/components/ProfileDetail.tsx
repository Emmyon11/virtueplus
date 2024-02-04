import { DrawerAndDialog } from '@/app/components/DrawerAndDialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import EditButton from './EditButton';
import { getServerSession } from 'next-auth';

const ProfileDetail = async () => {
  const session = await getServerSession();
  const user = session?.user;
  return (
    <div className="mx-8 p-5 mb-6 mt-10 lg:mt-0  order-1 lg:order-2 relative grid justify-center max-h-[35rem]  break-words basis-1/3 border-opacity-5 border-black bg-clip-border rounded-sm min-w-0 bg-white shadow-md">
      <div className="flex w-full -z-0 -top-10 absolute  justify-center">
        <div className=" relative  h-52 rounded-full overflow-clip w-52">
          <Link href="#">
            <Image
              alt="profile image"
              fill
              src={user?.image ? user.image : '/images/avater.svg'}
              className="relative"
            />
          </Link>
        </div>
      </div>
      <div className="w-full z-20 mb-40">
        <div className="flex justify-between">
          <EditButton />
        </div>
      </div>
      <div className="grid gap-6">
        <div className="text-center">
          <h3 className="text-lg text-slate-700">{user?.name}</h3>
          <hr className="my-4" />
          <p>
            Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
            Murphy — writes, performs and records all of his own music.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetail;
