import Image from 'next/image';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <main className=" md:min-h-screen md:w-screen md:grid md:items-center md:justify-center">
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
        <LoginForm />
      </div>
    </main>
  );
};
export default LoginPage;
