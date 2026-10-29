'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const ProgramSection = () => {
  const t = useTranslations('facesWhales');
  const days = t.raw('program.days') as {
    day: string;
    label: string;
    text: string;
  }[];

  return (
    <section id="programa" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto w-11/12 max-w-6xl">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-secondary/70" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
            {t('program.eyebrow')}
          </span>
        </div>

        <h2 className="mt-5 max-w-2xl text-3xl font-light leading-tight text-primary md:text-4xl">
          {t('program.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
          {t('program.intro')}
        </p>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {days.map((day, index) => (
            <motion.li
              key={day.day}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex h-full flex-col rounded-tl-2xl rounded-br-2xl border border-primary/15 bg-primary/[0.03] p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <span className="text-[10px] tracking-[0.3em] text-secondary">
                {`0${index + 1}`}
              </span>
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                {day.day}
              </h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                {day.label}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                {day.text}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-4 border-t border-primary/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
            {t('program.note')}
          </p>
          <Link
            href="/faces-and-whales#itinerario"
            className="btn inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            {t('program.cta')}
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
