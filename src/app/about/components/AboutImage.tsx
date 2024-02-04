import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

const AboutImage = () => {
  return (
    <div
      className="relative pb-8 pt-5 lg:pt-8 lg:h-96 flex justify-center items-center"
      style={{
        minHeight: 300,
        backgroundImage: "url('/images/about.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <span className="absolute z-0  inset-0 w-full h-full transition-all duration-150 ease-in bg-gray-600 opacity-60" />
      <div className="relative z-10 text-secondary text-center p-10">
        <div className="text-5xl font-mukta capitalize font-bold">
          <h1>Your new financial solution</h1>
        </div>
        <div className="mx-auto text-sm text-gray-400 w-60">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            aliquid.
          </p>
        </div>
        <Button
          size="lg"
          className="bg-green_custom mt-4 capitalize tracking-wider hover:bg-orange-400 hover:text-primary duration-200"
        >
          <Link href="/services">
            {' '}
            <div className=" flex items-center justify-center gap-2">
              <div className="">Work with us</div>

              <FaArrowRight />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default AboutImage;
