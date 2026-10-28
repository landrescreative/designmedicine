import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import FacesAndWhales from '@/components/FacesAndWhales';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'facesWhales'
  });

  return {
    title: `Design Medicine | ${t('hero.brand')} 2027`,
    description: `${t('hero.subtitle')} — ${t('hero.dates')}, ${t('hero.place')}`
  };
}

export default function Page() {
  return <FacesAndWhales />;
}
