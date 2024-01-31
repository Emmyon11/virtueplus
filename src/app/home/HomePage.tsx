import Image from 'next/image';
import { NewsLetter } from '../components/NewsLetter';
import Mission from './Mission';
import Items from './Items';

const HomePage = () => {
  return (
    <main>
      <div className="relative h-72 lg:grid lg:min-h-screen bg-gray-300 p-6 lg:grid-cols-3 lg:px-14">
        {/* first section for text */}
        <div className="p-10 flex flex-col w-full justify-center gap-6 absolute top-0 bottom-0 z-20 backdrop-filter backdrop-blur-sm lg:static">
          {/* Text */}
          <div className="backdrop-filter backdrop-blur-sm">
            <div className=" text-5xl font-mukta  font-bold uppercase mb-3 md:text-3xl lg:text-5xl xl:text-6xl">
              Lorem ipsum dolor sit amet
            </div>
            <div className="text-sm  md:text-xs lg:text-base text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              commodi ipsa distinctio.
            </div>
          </div>
          {/* Form */}
          <div className="mt-2 w-full">
            <NewsLetter
              classnameButton="rounded-none tracking-widest w-40 uppercase font-normal text-lg h-16"
              classnameInput="rounded-none shadow-none h-16"
              classnameForm="gap-0 border w-96  border-primary"
            />
          </div>
        </div>
        {/* second section for image and button */}
        <div className="col-span-2 lg:relative">
          <Image
            src="/images/plants.svg"
            fill
            sizes=""
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
