import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter, Tektur, Nunito, Dosis, Mukta } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Toaster } from '@/components/ui/toaster';
import Provider from '@/utils/Provider';
const inter = Inter({ subsets: ['latin'] });
const tektur = Tektur({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-tektur',
});
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});
const dosis = Dosis({
  subsets: ['latin'],
  variable: '--font-dosis',
});
const mukta = Mukta({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-mukta',
});

export const metadata: Metadata = {
  title: 'VirtuePlus2',
  description: 'for financial substenance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.className,
          tektur.variable,
          nunito.variable,
          dosis.variable,
          mukta.variable
        )}
      >
        <main className="relative m-0 min-h-screen">
          <Provider>
            <Navbar />
            <Toaster />
            {children}
            <Footer />
          </Provider>
        </main>
      </body>
    </html>
  );
}
