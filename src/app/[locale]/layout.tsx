import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Design Medicine - Seminar',
  description: 'Design Medicine Website'
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  return (
    <html lang={locale} className="overflow-x-hidden">
      <body className={inter.className}>
        <NextIntlClientProvider messages={{}}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
