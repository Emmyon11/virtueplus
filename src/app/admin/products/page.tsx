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
import ProductPage from './components/ProductPage';

const Products = async () => {
  const products = await getProducts();
  return (
    <main className="relative">
      <div className="fixed right-3 z-30 bottom-5">
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

      <ProductPage products={products} />
    </main>
  );
};
export default Products;
