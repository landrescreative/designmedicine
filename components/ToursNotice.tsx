'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaArrowRight } from 'react-icons/fa6';

const ToursNotice = () => {
  const t = useTranslations('toursPage');

  return (
    <section className="mx-auto flex min-h-[60vh] w-11/12 max-w-3xl flex-col justify-center py-24">
      <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
        {t('eyebrow')}
      </span>
      <h1 className="mt-4 text-3xl font-light leading-tight text-primary md:text-4xl">
        {t('title')}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-slate-600">
        {t('text')}
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/past-courses"
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-transform duration-300 hover:scale-105"
        >
          {t('archive')}
          <FaArrowRight className="text-xs" />
        </Link>
        <Link
          href="/faces-and-whales"
          className="inline-flex items-center justify-center rounded-xl border border-primary/30 px-6 py-4 text-sm uppercase tracking-[0.15em] text-primary transition-colors duration-300 hover:bg-primary/5"
        >
          {t('current')}
        </Link>
      </div>
    </section>
  );
};

export default ToursNotice;
