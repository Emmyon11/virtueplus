import { formatPrice } from '@/lib/utils';
import { Product } from '@prisma/client';
import Image from 'next/image';
import SinglePAddCartBtn from './SinglePAddCartBtn';

const SingleProductPage = ({ product }: { product: Product }) => {
  return (
    <main className="lg:p-20 p-8 h-full">
      <div className="grid gap-14 md:px-10  lg:grid-cols-2  lg:min-h-[40rem]">
        {/* Product pictures */}
        <div className="relative min-h-96 rounded-sm overflow-clip">
          <Image
            src={product.image}
            alt={`${product.name} image`}
            fill
            className="object-cover"
          />
        </div>
        {/* Product details */}
        <div className="font-nunito flex flex-col gap-8 lg:gap-24">
          <div className="grid gap-5">
            <div className="">
              {' '}
              <div className="font-semibold text-2xl text-gray-700 capitalize">
                {product.name}
              </div>
              <div className="text-gray-500 text-sm ">
                <span className="font-semibold text-gray-800">
                  Manufactured by:
                </span>{' '}
                {product.manufacturer}
              </div>
            </div>

            <div className="font-bold text-gray-900 text-4xl">
              {formatPrice(product.price)}
            </div>
            <div className="text-gray-500 text-sm ">{product.description}</div>
          </div>
          <div className="">
            <SinglePAddCartBtn product={product} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default SingleProductPage;
