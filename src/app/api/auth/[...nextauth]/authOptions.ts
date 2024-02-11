import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/lib/primaDB';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
      async profile(credentials, req) {
        // Check if the user exists in the database
        const existingUser = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!existingUser) {
          // If the user doesn't exist, throw an error or handle it as per your application's requirements
          throw new Error('User does not exist');
        }

        // Continue the authentication process by returning the user's information
        return {
          name: existingUser.name,
          email: existingUser.email,
          image: existingUser.image,
          id: existingUser.id,
          role: existingUser.role,
        };
      },
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error('Please enter an email and password');
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // if no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error('No user with that email address');
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        // if password does not match
        if (!passwordMatch) {
          throw new Error('Incorrect password');
        }
        delete user.hashedPassword;
        delete user.emailVerified;

        return {
          name: user.name,
          role: user.role,
          email: user.email,
          id: user.id,
          image: user.image,
        };
      },
    }), // ...add more providers here
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
        token.role = user.role;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.picture;
        session.user.role = token.role;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
