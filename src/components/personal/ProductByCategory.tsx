import { getSingleCategory } from '@/app/goods/action';
import UserProductCard from '@/app/goods/components/UserProductCard';
import { ProductTypes } from '@prisma/client';
import NotFoundDb from './NotFoundDb';

const ProductByCategory = async ({ category }: { category: ProductTypes }) => {
  const products = await getSingleCategory(category);
  return (
    <main className="animate-fade-in delay-75">
      <div className="">
        <h2 className="my-4 text-4xl font-mukta font-bold tracking-wider text-center text-primary/70">
          {category}
        </h2>
        <div className="relative grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
          {products?.length > 0 ? (
            products.map((product) => (
              <UserProductCard
                key={product.id}
                product={product}
                category={category}
              />
            ))
          ) : (
            <div className="min-h-96">
              <NotFoundDb
                message={`There is currently no ${category.toLocaleLowerCase()} available for sale`}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
export default ProductByCategory;
