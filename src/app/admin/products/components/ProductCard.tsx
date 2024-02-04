import { Product } from '@prisma/client';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa6';
import DeleteProductBtn from './DeleteProductBtn';

type ProductCardType = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardType) => {
  return (
    <main>
      <div className="grid relative overflow-clip bg-secondary shadow-md min-h-80">
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
        {/* TODO: add delete button to the card */}
        <div className="absolute z-10 right-10 top-10 text-green_custom">
          <DeleteProductBtn productId={product.id}>
            <FaTrash />
          </DeleteProductBtn>
        </div>
      </div>
    </main>
  );
};
export default ProductCard;
