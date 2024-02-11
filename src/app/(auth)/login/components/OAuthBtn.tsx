'use client';
import { Button } from '@/components/ui/button';
import { signIn, signOut } from 'next-auth/react';
import { ReactNode } from 'react';

const OAuthBtn = ({ children }: { children: ReactNode }) => {
  return (
    <div
      onClick={async () => {
        await signIn('google');
      }}
      className=""
    >
      {children}
    </div>
  );
};
export default OAuthBtn;
