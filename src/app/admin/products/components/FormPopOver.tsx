import { ReactNode } from 'react';
import { Popover, PopoverTrigger } from '@/components/ui/popover';
import { PopoverContent } from '@radix-ui/react-popover';
import ProductForm from './ProductForm';

const FormPopOver = ({ children }: { children: ReactNode }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <ProductForm />
      </PopoverContent>
    </Popover>
  );
};
export default FormPopOver;
