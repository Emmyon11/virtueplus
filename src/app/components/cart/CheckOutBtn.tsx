'use client';
import { ReactNode } from 'react';
import { DrawerAndDialog } from '../DrawerAndDialog';
import { cn } from '@/lib/utils';
interface CheckOutBtnProp {
  buttonText: string;
  children: ReactNode;
  className: string;
}

const CheckOutBtn = ({ buttonText, children, className }: CheckOutBtnProp) => {
  return (
    <DrawerAndDialog
      className={cn(
        'bg-gradient-to-r bg-green_custom text-white hover:bg-orange-500 hover:text-white',
        className
      )}
      buttonText={buttonText}
    >
      {children}
    </DrawerAndDialog>
  );
};
export default CheckOutBtn;
