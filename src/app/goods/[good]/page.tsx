import SingleProductPage from '@/app/components/SingleProductPage';
import { getSingleProduct } from '@/app/components/actions/productAction';

const Good = async ({ params }: { params: { good: string } }) => {
  const product = await getSingleProduct(params.good);
  return (
    <main>
      <SingleProductPage product={product} />
    </main>
  );
};
export default Good;
