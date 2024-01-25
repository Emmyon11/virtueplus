import Image from 'next/image';

const Orders = () => {
  return (
    <div className="basis-2/3 relative order-2 lg:order-1 min-h-96 bg-white overflow-clip lg:rounded-md lg:shadow-md lg:mb-10">
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
          Oops... <br /> No order found
        </h1>
      </div>
    </div>
  );
};
export default Orders;
