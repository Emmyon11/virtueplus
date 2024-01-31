import { Role } from '@prisma/client';
import { DefaultSession, DefaultUser, User } from 'next-auth';

declare module 'next-auth' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface User extends DefaultUser {
    role: Role;
  }
  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: Role;
  }
}
