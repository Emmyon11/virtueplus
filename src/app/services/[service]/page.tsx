import SingleProductPage from '@/app/components/SingleProductPage';
import { getSingleProduct } from '@/app/components/actions/productAction';

const Service = async ({ params }: { params: { service: string } }) => {
  const product = await getSingleProduct(params.service);
  return (
    <main>
      <SingleProductPage product={product} />
    </main>
  );
};
export default Service;
