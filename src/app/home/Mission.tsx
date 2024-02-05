import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa6';

const Mission = () => {
  return (
    <main className="animate-fade-in">
      <div className="font-nunito grid md:grid-cols-2 md:p-4">
        <div className="relative h-full">
          <Image
            fill
            sizes="50%"
            src="/images/mision.jpg"
            alt="mission image"
            className="object-cover md:shadow-md"
          />
        </div>
        <div className="">
          <div className="flex gap-4 p-6">
            <div className="">
              <FaBullseye className="text-4xl lg:text-6xl text-green_custom" />
            </div>
            <div className="">
              <div className="text-2xl lg:text-4xl font-bold text-primary/70">
                Our Mission
              </div>
              <div className="lg:text-xl lg:mt-2 text-primary/55">
                <p>
                  Our mission is &quotTo add value to the Microenterprise
                  industry by providing technical assistance in areas where
                  international best practice and local innovations come
                  together to strengthen capacity of the Microenterprise sector
                  in Nigeria&quot.
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-6 gap-4">
            {' '}
            <div className="">
              <FaEye className="text-4xl lg:text-6xl text-green_custom" />
            </div>
            <div className="">
              <div className="text-2xl lg:text-4xl font-bold text-primary/70">
                <h1>Our Vision</h1>
              </div>
              <div className="lg:text-xl lg:mt-2 text-primary/55">
                <p>
                  {' '}
                  Our vision is &quot To be a global financial service
                  intermediation in the area of MSME &quot
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Mission;
