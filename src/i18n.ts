import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'es'];
const defaultLocale = 'en'; // Define el idioma por defecto aquí

export default getRequestConfig(async ({ locale }) => {
  // Validar que el `locale` entrante sea válido; si no lo es, usar el `defaultLocale`
  const currentLocale = locales.includes(locale as any)
    ? locale
    : defaultLocale;

  return {
    messages: (await import(`../messages/${currentLocale}.json`)).default,
    locale: currentLocale
  };
});
