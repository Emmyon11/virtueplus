'use client';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const SignOutBtn = () => {
  return (
    <Button
      onClick={async () => {
        await signOut();
      }}
      variant="destructive"
    >
      Sign Out
    </Button>
  );
};
export default SignOutBtn;
