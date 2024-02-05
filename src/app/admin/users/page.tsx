import Image from 'next/image';
import { getUsers } from './action';
import UserCard from './components/UserCard';

const UserPage = async () => {
  const users = await getUsers();

  return (
    <div className="min-h-screen pt-10 md:pt-6 overflow-clip p-6">
      {users?.length > 0 ? (
        <div className="">
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="p-4 m-4 rounded-md shadow-sm bg-primary-foreground animate-fade-in"
              >
                <div className="">
                  <div className="flex justify-between text-xs font-nunito text-gray-300 font-semibold">
                    <div className="">{user.email}</div>
                    <div className="">{user.role}</div>
                  </div>
                  <div className="">
                    <UserCard user={user} />
                  </div>
                </div>
                <div className="font-nunito text-xs  text-gray-400">
                  {user.mobileNo}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="h-full">
            <Image
              alt="empty order image"
              fill
              className="object-contain lg:p-10"
              src="/images/void.svg"
            />
          </div>
          <div className="absolute inset-0 top-20 lg:p-10 z-10">
            <h1 className="text-6xl font-nunito font-bold text-teal-500 text-wrap text-center">
              Oops... <br /> No user found
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserPage;
