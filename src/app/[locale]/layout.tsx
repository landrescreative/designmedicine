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
      <head>
        <script
          nowprocket
          nitro-exclude
          type="text/javascript"
          id="sa-dynamic-optimization"
          data-uuid="76c9826f-52cf-4edc-b5d8-f4923f14ed8d"
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLmxpbmtncmFwaC5jb20vc2NyaXB0cy9keW5hbWljX29wdGltaXphdGlvbi5qcyI7c2NyaXB0LmRhdGFzZXQudXVpZCA9ICI3NmM5ODI2Zi01MmNmLTRlZGMtYjVkOC1mNDkyM2YxNGVkOGQiO3NjcmlwdC5pZCA9ICJzYS1keW5hbWljLW9wdGltaXphdGlvbi1sb2FkZXIiO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTs="
        ></script>
      </head>
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
