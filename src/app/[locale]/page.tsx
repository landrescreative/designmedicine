import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Separator from '@/components/Separator';
import ExperienceSection from '@/components/ExperienceSection';
import ProgramSection from '@/components/ProgramSection';
import AboutKiiko from '@/components/AboutKiiko';
import Benefits from '@/components/Benefits';

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

export default async function Home({ params }: PageProps) {
  const tSeparators = await getTranslations({
    locale: params.locale,
    namespace: 'separators'
  });
  const tAbout = await getTranslations({
    locale: params.locale,
    namespace: 'aboutKiiko'
  });
  const tPast = await getTranslations({
    locale: params.locale,
    namespace: 'pastCourses'
  });

  return (
    <main className="flex justify-center items-center flex-col overflow-x-hidden">
      <Hero />
      <Separator text={tSeparators('1')} />
      <ExperienceSection />
      <Separator text={tSeparators('2')} />
      <ProgramSection />
      <Separator text={tSeparators('3')} />
      <AboutKiiko
        abouttitle={tAbout('title')}
        aboutdes={tAbout('description')}
      />
      <Benefits />
      <section className="w-full bg-[#12333C]/[0.04] border-t border-[#12333C]/10 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8A6A1F]">
              {tPast('homeEyebrow')}
            </span>
            <h3 className="mt-1 text-2xl font-serif text-[#12333C]">
              {tPast('homeTitle')}
            </h3>
          </div>
          <Link
            href="/past-courses"
            className="inline-flex items-center gap-2 rounded-xl bg-[#12333C] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F6F1E6] transition-transform duration-300 hover:scale-105"
          >
            {tPast('homeCta')}
          </Link>
        </div>
      </section>
    </main>
  );
}
