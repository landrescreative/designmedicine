import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import EditionDetail from '@/components/EditionDetail';

const EDITIONS = ['2025', '2026'] as const;

type Edition = (typeof EDITIONS)[number];

interface PageProps {
  params: { locale: string; edition: string };
}

function isEdition(value: string): value is Edition {
  return (EDITIONS as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return EDITIONS.map((edition) => ({ edition }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  if (!isEdition(params.edition)) return {};

  const t = await getTranslations({
    locale: params.locale,
    namespace: `pastCourses.details.${params.edition}`
  });

  return {
    title: `Design Medicine | ${t('title')} ${params.edition}`,
    description: t('intro')
  };
}

export default function Page({ params }: PageProps) {
  if (!isEdition(params.edition)) notFound();

  return <EditionDetail slug={params.edition} />;
}
