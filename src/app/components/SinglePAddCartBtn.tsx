'use client';

import { Product } from '@prisma/client';

const SinglePAddCartBtn = ({ product }: { product: Product }) => {
  return (
    <main>
      <form action="">
        <div className="">
          <input
            className="w-16 ring-green_custom  focus:outline-none h-10 p-2 ring-2"
            type="number"
            min={1}
          />
          <button
            className="bg-slate-800 h-11 ml-4 px-8 text-white p-2"
            type="submit"
          >
            Add to Cart
          </button>
        </div>
      </form>
    </main>
  );
};
export default SinglePAddCartBtn;
