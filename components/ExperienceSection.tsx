'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  const t = useTranslations('facesWhales');

  return (
    <section
      id="viewmore"
      className="flex w-screen flex-col items-center gap-12 bg-white px-6 py-16 md:flex-row md:justify-center md:gap-16 md:px-16 md:py-24"
    >
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="w-full max-w-[320px] shrink-0 md:w-[320px]">
        <div className="overflow-hidden rounded-tl-3xl rounded-br-3xl shadow-[0_24px_60px_-30px_rgba(18,51,60,0.7)]">
          <Image
            src="/faces-whales/flyer-cover-2027.jpg"
            alt={t('hero.brand')}
            width={1000}
            height={1252}
            className="h-auto w-full"
            sizes="(max-width: 768px) 90vw, 320px"
          />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="flex max-w-xl flex-col gap-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8A6A1F]">
          {t('hero.dates')} · {t('hero.length')}
        </span>

        <h2 className="font-serif text-3xl leading-tight text-[#12333C] md:text-4xl">
          {t('intro.title')}
        </h2>

        <p className="leading-relaxed text-slate-600">{t('intro.p1')}</p>

        <ul className="mt-1 space-y-2">
          {t
            .raw('highlights.items')
            .map((item: { value: string; label: string }) => (
              <li
                key={item.label}
                className="flex items-baseline gap-3 text-sm text-slate-700"
              >
                <span className="font-serif text-lg text-[#12333C]">
                  {item.value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </span>
              </li>
            ))}
        </ul>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/faces-and-whales"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#12333C] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#F6F1E6] transition-transform duration-300 hover:scale-105"
          >
            {t('hero.cta2')}
            <FaArrowRight className="text-xs" />
          </Link>
          <a
            href={t('hero.payUrl')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-[#12333C]/30 px-7 py-4 text-sm uppercase tracking-[0.15em] text-[#12333C] transition-colors duration-300 hover:bg-[#12333C]/5"
          >
            {t('hero.payCta')}
          </a>
        </div>

        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          {t('hero.price')} · {t('hero.priceNote')}
        </p>
        <p className="max-w-md text-[10px] leading-snug text-slate-400">
          {t('hero.feeNote')}
        </p>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
