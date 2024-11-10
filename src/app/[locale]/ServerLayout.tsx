// src/app/[locale]/ServerLayout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

interface ServerLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function ServerLayout({
  children,
  params
}: ServerLayoutProps) {
  const { locale } = params;

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
