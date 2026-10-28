import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ContactPage from '@/components/ContactPage';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'contactPage'
  });

  return {
    title: `Design Medicine | ${t('title')}`,
    description: t('lead')
  };
}

export default function Page() {
  return <ContactPage />;
}
