import { Role } from '@prisma/client';

declare module 'next-auth' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface User {
    name: string;
    email: string;
    role: Role;
    image: string;
    id: string;
  }
  interface Session {
    user: {
      /** The user's postal address. */
      role: Role;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: Role;
  }
}
