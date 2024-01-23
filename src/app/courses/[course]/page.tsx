import SingleProductPage from '@/app/components/SingleProductPage';
import { getSingleProduct } from '@/app/components/actions/productAction';

const Course = async ({ params }: { params: { course: string } }) => {
  const product = await getSingleProduct(params.course);
  return (
    <main className="min-h-screen">
      <SingleProductPage product={product} />
    </main>
  );
};
export default Course;
