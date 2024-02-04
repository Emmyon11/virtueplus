import Image from 'next/image';

const NotFoundDb = ({ message }: { message: string }) => {
  return (
    <div>
      <div className="h-full">
        <Image
          alt="empty order image"
          fill
          className="object-contain lg:p-10"
          src="/images/void.svg"
        />
      </div>
      <div className="absolute inset-0 top-20 lg:p-10 z-30">
        <h1 className="text-6xl font-nunito font-bold text-teal-500 text-wrap text-center">
          Oops... <br /> {message}
        </h1>
      </div>
    </div>
  );
};
export default NotFoundDb;
