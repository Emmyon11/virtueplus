import { toast } from '@/components/ui/use-toast';
import { Order } from '@prisma/client';
import React from 'react';
import { PaystackButton } from 'react-paystack';
import { UseMutateAsyncFunction } from 'react-query';

type PropsType = {
  amount: number;
  email: string;
  text: string;
  createFn: () => {};
};

const PayButton = ({ amount, email, text, createFn }: PropsType) => {
  const publicKey = 'pk_test_158ed200999b95cb686904678375d0c3c38cc505';

  const componentProps = {
    email,
    amount,
    publicKey,
    text,
    onSuccess: () => {
      toast({
        title: `Payment Successful`,
        description: `Your payment of ${amount} was successful. Thank you for your support!`,
      });
      createFn();
    },
    onClose: () => {},
  };

  return <PaystackButton {...componentProps} />;
};

export default PayButton;
