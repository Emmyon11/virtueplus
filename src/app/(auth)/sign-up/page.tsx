import Image from 'next/image';
import SignUpForm from './components/SignUpForm';

const SignUpPage = () => {
  return (
    <main className="min-h-screen w-screen grid items-center justify-center">
      <div className="min-w-96 bg-white shadow-lg  p-7 rounded-md ">
        <div className="grid items-center justify-center gap-3 p-5">
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
        <SignUpForm />
      </div>
    </main>
  );
};
export default SignUpPage;
