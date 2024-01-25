import { DrawerAndDialog } from '@/app/components/DrawerAndDialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import EditButton from './EditButton';

const ProfileDetail = () => {
  return (
    <div className="mx-8 p-5 mb-6 mt-10 lg:mt-0  order-1 lg:order-2 relative grid justify-center  break-words basis-1/3 border-opacity-5 border-black bg-clip-border rounded-sm min-w-0 bg-white shadow-md">
      <div className="flex w-full -z-0 -top-10 absolute  justify-center">
        <div className=" relative  h-52 rounded-full overflow-clip w-52">
          <Link href="#">
            <Image
              alt="profile image"
              fill
              src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
              className=""
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
        <div className="flex text-lg text-slate-600 justify-center gap-5">
          <div className="grid  text-center">
            <span className="font-bold">22</span>
            <span className="text-gray-400 text-base">Friends</span>
          </div>
          <div className="grid text-center">
            <span className="font-bold">10</span>
            <span className="text-gray-400 text-base">Photos</span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-lg text-slate-700">Jessica Jones</h3>
          <hr className="my-4" />
          <p>
            Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
            Murphy — writes, performs and records all of his own music.
          </p>
          <Link href="#">Show more</Link>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetail;
