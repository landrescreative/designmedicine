import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ToursNotice from '@/components/ToursNotice';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'toursPage'
  });

  return {
    title: `Design Medicine | ${t('title')}`,
    description: t('text')
  };
}

export default function Page() {
  return <ToursNotice />;
}
