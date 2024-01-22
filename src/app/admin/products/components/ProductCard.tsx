import { Product } from '@prisma/client';
import Image from 'next/image';

type ProductCardType = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardType) => {
  return (
    <main>
      <div className="grid bg-white shadow-md min-h-80">
        {/* Image segment */}
        <div className="flex items-center h-64 justify-center">
          <Image
            width={250}
            height={300}
            src={product.image ? product.image : '/images/product.webp'}
            alt={product.name}
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
export default ProductCard;
