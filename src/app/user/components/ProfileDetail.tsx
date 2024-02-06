import Image from 'next/image';
import Link from 'next/link';
import EditButton from './EditButton';
import { getServerSession } from 'next-auth';
import { FaEdit } from 'react-icons/fa';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import UploadDpBtn from '@/app/components/UploadDpBtn';

const ProfileDetail = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div className="mx-8 p-5 mb-6 mt-10 lg:mt-0  order-1 lg:order-2 relative grid justify-center max-h-[35rem]  break-words basis-1/3 border-opacity-5 border-black bg-clip-border rounded-sm min-w-0 bg-white shadow-md">
      <div className="flex w-full -z-0 -top-10 absolute  justify-center">
        <div className=" relative   bg-secondary h-52 rounded-full overflow-clip w-52">
          <div>
            <div className="absolute top-8 right-9 duration-300 z-10 hover:text-orange-400 hover:scale-125 cursor-pointer text-2xl text-green_custom">
              <UploadDpBtn email={user?.email}>
                <FaEdit />
              </UploadDpBtn>
            </div>
            <Image
              alt="profile image"
              fill
              src={user?.image ? user.image : '/images/avater.svg'}
              className="relative"
            />
          </div>
        </div>
      </div>
      <div className="w-full z-20 mb-40 flex justify-between">
        <div className="">
          <EditButton />
        </div>
      </div>
      <div className="grid gap-6 font-nunito">
        <div className="text-center">
          <h3 className="text-lg text-slate-700">{user?.name}</h3>
          <hr className="my-4" />
          <p className="text-primary/70 ">
            <span className="text-primary font-bold">Email: </span>
            {user?.email}
          </p>
          <p className="text-primary/70">
            <span className="text-primary font-bold">Role: </span>
            {user?.role}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileDetail;
