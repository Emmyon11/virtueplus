'use client';
import { Product, ProductTypes } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type ProductCardType = {
  product: Product;
  category: ProductTypes;
};
const UserProductCard = ({ product, category }: ProductCardType) => {
  const router = useRouter();
  return (
    <main>
      <div
        onClick={() => router.push(`/${category.toLowerCase()}/${product.id}`)}
        className="grid bg-gray-100 overflow-clip shadow-md min-h-80 cursor-pointer"
      >
        {/* Image segment */}
        <div className="flex items-center relative overflow-clip h-64 justify-center">
          <Image
            fill
            src={product.image ? product.image : '/images/product.webp'}
            alt={product.name}
            className="object-cover"
          />
        </div>
        {/* Info segment */}
        <div className="p-5 font-mukta uppercase">
          <h1 className="font-light text-gray-400">{product.type}</h1>
          <h1 className=" font-semibold ">{product.name}</h1>
          <h1 className="font-bold">₦{product.price}</h1>
          <h1 className="text-sm text-gray-400">{product.description}</h1>
        </div>
      </div>
    </main>
  );
};
export default UserProductCard;
