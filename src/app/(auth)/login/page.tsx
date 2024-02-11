import Image from 'next/image';
import LoginForm from './components/LoginForm';
import OAuthBtn from './components/OAuthBtn';
import { FcGoogle } from 'react-icons/fc';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/');
  }
  return (
    <main className=" md:min-h-screen md:w-screen md:grid md:items-center md:justify-center cursor-default">
      <div className="md:min-w-96 animate-fade-in bg-secondary shadow-lg min-h-[40rem] md:h-4/6 p-7 md:rounded-md ">
        <div className="grid items-center justify-center gap-5 p-5">
          <div className="text-center font-nunito font-extrabold text-4xl">
            Welcome
          </div>
          <div className="flex justify-center">
            <Image
              className="grayscale"
              width={50}
              height={50}
              src="/images/logo.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="font-nunito font-semibold cursor-default">
          <OAuthBtn>
            <div className="flex items-center group justify-center gap-2 cursor-pointer  ">
              <div className="text-xl font-semibold transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-green_custom group-hover:bg-clip-text group-hover:text-transparent">
                {' '}
                Log in with
              </div>
              <div className="text-3xl">
                <FcGoogle />
              </div>
            </div>
          </OAuthBtn>
          <div className="text-center my-2">or</div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};
export default LoginPage;
