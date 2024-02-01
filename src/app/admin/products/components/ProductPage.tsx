import { Product } from '@prisma/client';
import ProductCard from './ProductCard';

const ProductPage = ({ products }: { products: Product[] }) => {
  const goods = products?.filter((product) => product.type === 'Goods');
  const courses = products?.filter((product) => product.type === 'Courses');
  const services = products?.filter((product) => product.type === 'Services');
  return (
    <main className="p-5">
      {goods?.length > 0 && (
        <div className="">
          <h2 className="my-4 text-4xl font-mukta font-bold tracking-wider text-center text-gray-700">
            Goods
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
            {goods?.map((good) => (
              <ProductCard key={good.id} product={good} />
            ))}
          </div>
        </div>
      )}
      {courses?.length > 0 && (
        <div className="">
          <h2 className="my-4 text-4xl font-mukta font-bold tracking-wider text-center text-gray-700">
            Courses
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {courses?.map((course) => (
              <ProductCard key={course.id} product={course} />
            ))}
          </div>
        </div>
      )}
      {services?.length > 0 && (
        <div className="">
          <h2 className="my-4 text-4xl font-mukta font-bold tracking-wider text-center text-gray-700">
            Goods
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {services?.map((service) => (
              <ProductCard key={service.id} product={service} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};
export default ProductPage;
