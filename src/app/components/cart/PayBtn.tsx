import React from 'react';
import { PaystackButton } from 'react-paystack';

type PropsType = {
  amount: number;
  email: string;
  text: string;
};

const PayButton = ({ amount, email, text }: PropsType) => {
  const publicKey = process.env.REACT_APP_PS_PUBLIC_TEST_KEY;
  const [reference, setReference] = React.useState('');

  const handlePaystackSuccessAction = (reference) => {
    // handle payment success
  };

  const componentProps = {
    email,
    amount,
    publicKey,
    text,
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: () => alert('Payment canceled by user.'),
  };

  return <PaystackButton {...componentProps} />;
};

export default PayButton;
