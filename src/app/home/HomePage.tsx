import Image from 'next/image';
import { NewsLetter } from '../components/NewsLetter';
import Mission from './Mission';
import Items from './Items';

const HomePage = () => {
  return (
    <main>
      <div className="relative h-72 lg:grid flex  justify-center animate-inbound lg:min-h-screen bg-gray-300 p-6 lg:grid-cols-3 lg:px-14">
        {/* first section for text */}
        <div className="p-8 flex flex-col w-full justify-center items-center gap-3 lg:gap-6 absolute top-0 bottom-0 z-20 backdrop-filter backdrop-blur-sm lg:static">
          {/* Text */}
          <div className=" ">
            <div className=" text-5xl font-mukta  text-slate-800 font-bold capitalize mb-3 md:text-3xl lg:text-5xl xl:text-6xl">
              For financial substenance
            </div>
            <div className="text-sm  md:text-xs  lg:text-base  text-gray-500">
              Fostering Financial Empowerment: Building Bridges for Micro
              Enterprises and Low-Income Communities in Nigeria.
            </div>
          </div>
          {/* Form */}
          <div className="mt-2 w-full">
            <NewsLetter
              classnameButton="rounded-none border border-slate-800 border-l-0 tracking-widest w-40 uppercase font-normal hover:bg-secondary hover:text-primary  text-lg h-10"
              classnameInput="rounded-none text-slate-800 shadow-none h-10 border-slate-800"
              classnameForm="gap-0 "
            />
          </div>
        </div>
        {/* second section for image and button */}
        <div className="col-span-2 absolute lg:relative inset-0 z-10">
          <Image
            src="/images/plants.svg"
            fill
            priority
            sizes="100%"
            alt="image of a plant"
            className="min-w-full max-h-80 lg:max-h-lvh md:h-5/6 xl:h-4/6 md:brightness-75"
          />
        </div>
      </div>
      <Mission />
      <Items />
    </main>
  );
};
export default HomePage;
