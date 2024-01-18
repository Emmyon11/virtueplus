import Image from 'next/image';
import { NewsLetter } from '../components/NewsLetter';
import Mission from './Mission';
import Items from './Items';

const HomePage = () => {
  return (
    <main>
      <div className="relative md:grid md:grid-cols-3 ">
        {/* first section for text */}
        <div className="p-10 absolute top-0 bottom-0 z-10 backdrop-filter backdrop-blur-sm md:static">
          {/* Text */}
          <div className="backdrop-filter backdrop-blur-sm">
            <div className="text-5xl md:text-3xl lg:text-6xl xl:text-7xl">
              Lorem ipsum dolor sit amet consectetur!
            </div>
            <div className="text-sm md:text-xs lg:text-lg text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              commodi ipsa distinctio, voluptates itaque est atque vel dolores.
              Deserunt nulla distinctio.
            </div>
          </div>
          {/* Form */}
          <div className="mt-2">
            <NewsLetter />
          </div>
        </div>
        {/* second section for image and button */}
        <div className="col-span-2">
          <Image
            src="/images/plants.svg"
            width={500}
            height={500}
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
