'use client';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const SignOutBtn = () => {
  return (
    <div
      onClick={async () => {
        await signOut();
      }}
      className=""
    >
      Sign Out
    </div>
  );
};
export default SignOutBtn;
