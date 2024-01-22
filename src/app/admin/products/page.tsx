import { Product } from '@prisma/client';
import ProductCard from './components/ProductCard';
import { FaPlus } from 'react-icons/fa6';
import ProductForm from './components/ProductForm';
import FormPopOver from './components/FormPopOver';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { getProducts } from './action';

const exampleProduct: Product = {
  id: 'weioruisdfi',
  name: 'Chips image',
  description: 'A bag of chips',
  price: 30,
  type: 'Goods',
  image: '/images/product.webp',
  manufacturer: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const Products = async () => {
  const products = await getProducts();
  return (
    <main className="relative">
      <div className="fixed right-3 bottom-5">
        <Popover>
          <PopoverTrigger>
            <div className="text-5xl text-green-700 shadow-md bg-gray-300 rounded-full">
              <FaPlus />
            </div>
          </PopoverTrigger>
          <PopoverContent className="mr-10 w-96">
            <ProductForm />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-4 gap-5 p-5">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};
export default Products;
