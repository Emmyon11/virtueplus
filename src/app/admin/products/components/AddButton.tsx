'use client';

import { DrawerAndDialog } from '@/app/components/DrawerAndDialog';
import { FaPlus } from 'react-icons/fa6';
import ProductForm from './ProductForm';

const AddButton = () => {
  return (
    <DrawerAndDialog
      className="text-5xl grid items-center justify-center shadow-md bg-primary h-14 w-14 rounded-full"
      buttonText={<FaPlus />}
    >
      <ProductForm />
    </DrawerAndDialog>
  );
};
export default AddButton;
