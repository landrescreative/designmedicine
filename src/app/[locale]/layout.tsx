// src/app/layout.tsx
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google'; // Importa la fuente Montserrat
import ServerLayout from './ServerLayout';
import ClientLayout from './ClientLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import StickyBanner from '@/components/StickyBanner';

export const metadata: Metadata = {
  title: 'Design Medicine - Seminar',
  description: 'Design Medicine Website'
};

// Configuración de la fuente Montserrat
const montserrat = Montserrat({ subsets: ['latin'] });

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  return (
    <html lang={params.locale}>
      {/* Aplica la clase de Montserrat al body */}
      <body className={montserrat.className}>
        <ServerLayout params={params}>
          <Preloader></Preloader>
          <Navbar />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </ServerLayout>
      </body>
    </html>
  );
}
