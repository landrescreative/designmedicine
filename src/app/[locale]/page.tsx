import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PastCourses from '@/components/PastCourses';

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'pastCourses'
  });

  return {
    title: `Design Medicine | ${t('hero.title')} ${t('hero.titleAccent')}`,
    description: t('hero.lead')
  };
}

export default function Home() {
  return <PastCourses />;
}
