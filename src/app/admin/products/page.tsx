import { getProducts } from './action';
import ProductPage from './components/ProductPage';

import AddButton from './components/AddButton';

const Products = async () => {
  const products = await getProducts();

  return (
    <main className="relative">
      <div className="fixed right-3 z-40 bottom-5 cursor-pointer">
        <AddButton />
      </div>

      <ProductPage products={products} />
    </main>
  );
};
export default Products;
