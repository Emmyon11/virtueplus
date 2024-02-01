'use client';
import { ReactNode } from 'react';
import { deleteProduct } from '../action';
import { useMutation } from 'react-query';
import { FaSpinner } from 'react-icons/fa6';
type Props = {
  children: ReactNode;
  productId: string;
};

const DeleteProductBtn = ({ children, productId }: Props) => {
  const onButtonClick = useMutation(() => {
    return deleteProduct(productId);
  });

  return (
    <button
      className="cursor-pointer"
      onClick={() => onButtonClick.mutateAsync()}
    >
      {!onButtonClick.isLoading ? (
        <div>{children}</div>
      ) : (
        <div className="text-xl text-orange-500 animate-spin ">
          <FaSpinner />
        </div>
      )}
    </button>
  );
};

export default DeleteProductBtn;
