'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineDateRange, MdOutlineTranslate } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import EditionGallery from './EditionGallery';

// Imágenes reales de las ediciones (public/past-courses/)
const editionMedia = [
  {
    src: '/past-courses/edicion-2025.jpg',
    width: 2000,
    height: 1333,
    ratio: 'aspect-[4/3]'
  },
  {
    src: '/past-courses/edicion-2026.jpg',
    width: 2000,
    height: 1291,
    ratio: 'aspect-[4/3]'
  },
  {
    src: '/past-courses/edicion-taller.jpg',
    width: 1400,
    height: 850,
    ratio: 'aspect-[16/10]'
  }
];

type Edition = {
  year: string;
  tag: string;
  title: string;
  subtitle: string;
  dates: string;
  duration: string;
  location: string;
  language: string;
  schedule: string;
  summary: string;
  highlights: string[];
  footnote: string;
  alt: string;
  link?: string;
  linkLabel?: string;
};

const PastCourses = () => {
  const t = useTranslations('pastCourses');
  const editions = t.raw('editions') as Edition[];
  const stats = t.raw('stats') as { value: string; label: string }[];
  const principles = t.raw('principles.items') as {
    title: string;
    text: string;
  }[];

  return (
    <div className="overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-1/2"
        >
          <Image
            src="/past-courses/cta-bg.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-[55%_35%]"
          />
          <div className="absolute inset-0 bg-white/80 md:bg-gradient-to-r md:from-white md:via-white/50 md:to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/25" />
          <div className="absolute inset-0 bg-primary/[0.08]" />
        </div>

        <div className="relative mx-auto w-11/12 max-w-6xl pb-14 pt-6 md:pb-24 md:pt-10">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-secondary/70" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
              {t('hero.eyebrow')}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-light leading-[1.05] tracking-tight text-primary md:text-6xl">
            {t('hero.title')}{' '}
            <span className="font-semibold">{t('hero.titleAccent')}</span>
          </h1>

          <p className="mt-4 text-lg font-light tracking-wide text-slate-500 md:text-2xl">
            {t('hero.subtitle')}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            {t('hero.lead')}
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
            <Link
              href="/faces-and-whales"
              className="btn inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {t('hero.cta')}
              <FaArrowRight className="text-sm" />
            </Link>
            <a
              href="mailto:info@designmedicine.org"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary"
            >
              {t('hero.ctaSecondary')}
              <span className="h-px w-8 bg-primary transition-all duration-300 group-hover:w-12" />
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 divide-x divide-primary/15 border-y border-primary/15">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col px-3 py-6 sm:px-8 sm:py-7 sm:first:pl-0"
              >
                <dt className="order-2 mt-2 text-[9px] uppercase leading-tight tracking-[0.18em] text-slate-500 sm:text-[11px] sm:tracking-[0.28em]">
                  {stat.label}
                </dt>
                <dd className="order-1 text-3xl font-light text-primary sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ARCHIVO */}
      <section className="mx-auto w-11/12 max-w-6xl py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-secondary/70" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
              {t('archive.eyebrow')}
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-light leading-tight text-primary md:text-5xl">
            {t('archive.title')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            {t('archive.intro')}
          </p>
        </div>

        <div className="mt-16 space-y-24 md:mt-20 md:space-y-32">
          {editions.map((edition, index) => {
            const media = editionMedia[index] ?? editionMedia[0];
            const detailKey = edition.link?.match(/\/past-courses\/(\d{4})$/)?.[1];
            const editionStats = detailKey
              ? ((
                  t.raw(`details.${detailKey}.stats`) as {
                    value: string;
                    label: string;
                  }[]
                )?.[1] ?? null)
              : null;

            return (
              <motion.article
                key={edition.year + index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="border-t border-primary/10 pt-10 md:pt-14"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-14">
                  <figure className="relative md:col-span-7">
                    <div className={`relative ${media.ratio} overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] bg-primary/5 shadow-[0_18px_50px_-24px_rgba(91,116,123,0.55)]`}>
                      <Image
                        src={media.src}
                        alt={edition.alt}
                        fill
                        sizes="(max-width: 768px) 92vw, 55vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
                      <figcaption className="absolute bottom-4 left-5 flex items-center gap-3 text-white">
                        <span className="text-3xl font-light tracking-tight">
                          {edition.year}
                        </span>
                        <span className="h-px w-6 bg-white/70" />
                        <span className="text-[10px] uppercase tracking-[0.28em] text-white/90">
                          {t('archive.caption')}
                        </span>
                      </figcaption>
                    </div>
                  </figure>

                  <div className="md:col-span-5">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] tracking-[0.3em] text-slate-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px w-6 bg-primary/25" />
                      <span className="inline-block rounded-full bg-secondary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary">
                        {edition.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold leading-snug text-primary md:text-3xl">
                      {edition.title}
                    </h3>
                    <p className="mt-1 text-lg font-light tracking-wide text-slate-500">
                      {edition.subtitle}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                      <MdOutlineDateRange className="shrink-0 text-base" />
                      <span>{edition.dates}</span>
                    </div>

                    <p className="mt-5 leading-relaxed text-slate-600">
                      {edition.summary}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {edition.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-snug text-slate-700"
                        >
                          <FaCheck className="mt-1 shrink-0 text-[10px] text-secondary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {edition.link && (
                      <Link
                        href={edition.link}
                        className="group mt-7 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-primary"
                      >
                        {edition.linkLabel}
                        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 border-t border-primary/15 pt-6 md:mt-10 md:grid-cols-12 md:items-start md:gap-8">
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm md:col-span-8 md:gap-x-8 xl:grid-cols-4">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {t('labels.schedule')}
                      </dt>
                      <dd className="mt-1 flex items-start gap-2 text-slate-700">
                        <FaRegClock className="mt-0.5 shrink-0 text-primary/70" />
                        <span>{edition.schedule}</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {t('labels.location')}
                      </dt>
                      <dd className="mt-1 flex items-start gap-2 text-slate-700">
                        <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-primary/70" />
                        <span>{edition.location}</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {t('labels.language')}
                      </dt>
                      <dd className="mt-1 flex items-start gap-2 text-slate-700">
                        <MdOutlineTranslate className="mt-0.5 shrink-0 text-primary/70" />
                        <span>{edition.language}</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {t('labels.duration')}
                      </dt>
                      <dd className="mt-1 flex items-start gap-2 text-slate-700">
                        <MdOutlineDateRange className="mt-0.5 shrink-0 text-primary/70" />
                        <span>{edition.duration}</span>
                      </dd>
                    </div>
                  </dl>

                  <div className="md:col-span-4">
                    <p className="text-xs leading-relaxed text-slate-400">
                      {edition.footnote}
                    </p>
                    {editionStats && (
                      <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-secondary">
                        {editionStats.value} {editionStats.label}
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* CITA */}
      <section className="border-y border-primary/15 bg-secondary/[0.06]">
        <blockquote className="mx-auto w-11/12 max-w-3xl py-16 text-center md:py-20">
          <span
            aria-hidden
            className="block font-serif text-5xl leading-none text-secondary/50"
          >
            &ldquo;
          </span>
          <p className="mt-3 font-serif text-xl leading-relaxed text-primary md:text-3xl">
            {t('quote.text')}
          </p>
          <footer className="mt-6 text-[11px] uppercase tracking-[0.3em] text-slate-500">
            {t('quote.author')}
          </footer>
        </blockquote>
      </section>

      {/* GALERÍA — la misma que en las dos fichas de edición */}
      <EditionGallery />

      {/* PRINCIPIOS */}
      <section className="mx-auto w-11/12 max-w-6xl py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-secondary/70" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
              {t('principles.eyebrow')}
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-light leading-tight text-primary md:text-5xl">
            {t('principles.title')}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="group flex h-full flex-col rounded-br-3xl border-t-2 border-secondary/40 bg-secondary/[0.07] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary/[0.12]"
            >
              <span className="text-[11px] tracking-[0.3em] text-secondary/70">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src="/past-courses/hero-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.28]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60" />
        </div>
        <div className="relative mx-auto w-11/12 max-w-6xl py-16 md:py-24">
          <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">
            {t('cta.eyebrow')}
          </span>
          <div className="mt-5 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-light leading-tight md:text-5xl">
                {t('cta.title')}
              </h2>
              <p className="mt-4 leading-relaxed text-white/80">
                {t('cta.text')}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:info@designmedicine.org"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {t('cta.button')}
                <FaArrowRight className="text-xs" />
              </a>
              <Link
                href="/faces-and-whales"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/40 px-7 py-4 text-sm uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {t('cta.link')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastCourses;

