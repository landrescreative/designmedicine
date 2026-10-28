'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaArrowRight, FaCheck } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineDateRange, MdOutlineTranslate } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import EditionGallery from './EditionGallery';

const editionMedia: Record<string, { src: string; altKey: string }> = {
  '2025': { src: '/past-courses/edicion-2025.jpg', altKey: 'heroAlt' },
  '2026': { src: '/past-courses/edicion-2026.jpg', altKey: 'heroAlt' }
};

type Extra = {
  type: string;
  name: string;
  date: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

type Edition = {
  kicker: string;
  title: string;
  subtitle: string;
  dates: string;
  venue: string;
  language: string;
  schedule: string;
  duration: string;
  intro: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  extrasTitle: string;
  extrasIntro: string;
  extras: Extra[];
  notes: string;
  heroAlt: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

const EditionDetail = ({ slug }: { slug: string }) => {
  const t = useTranslations('pastCourses');
  const d = t.raw(`details.${slug}`) as Edition;
  const media = editionMedia[slug];

  return (
    <div className="overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="border-b border-primary/10 bg-primary/[0.03]">
        <div className="mx-auto w-11/12 max-w-6xl py-8 md:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-slate-400"
          >
            <Link href="/past-courses" className="hover:text-primary">
              {t('nav')}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-primary">{slug}</span>
          </nav>

          <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <span className="inline-block rounded-full bg-secondary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary">
                {d.kicker}
              </span>
              <h1 className="mt-5 text-3xl font-light leading-tight tracking-tight text-primary md:text-5xl">
                {d.title}
              </h1>
              <p className="mt-2 text-lg font-light tracking-wide text-slate-500">
                {d.subtitle}
              </p>

              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-primary/15 pt-6 text-sm">
                <div className="flex items-start gap-2">
                  <MdOutlineDateRange className="mt-0.5 shrink-0 text-primary/70" />
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {t('labels.dates')}
                    </dt>
                    <dd className="text-slate-700">{d.dates}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-primary/70" />
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {t('labels.location')}
                    </dt>
                    <dd className="text-slate-700">{d.venue}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FaRegClock className="mt-0.5 shrink-0 text-primary/70" />
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {t('labels.schedule')}
                    </dt>
                    <dd className="text-slate-700">{d.schedule}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MdOutlineTranslate className="mt-0.5 shrink-0 text-primary/70" />
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      {t('labels.language')}
                    </dt>
                    <dd className="text-slate-700">{d.language}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <figure className="md:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[2rem] rounded-br-[2rem] bg-primary/10 shadow-[0_18px_50px_-24px_rgba(91,116,123,0.55)]">
                <Image
                  src={media.src}
                  alt={d.heroAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 40vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* RESUMEN + CIFRAS */}
      <section className="mx-auto w-11/12 max-w-6xl py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              {d.intro}
            </p>
            <ul className="mt-8 space-y-3">
              {d.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-snug text-slate-700"
                >
                  <FaCheck className="mt-1 shrink-0 text-[10px] text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <dl className="grid grid-cols-3 divide-x divide-primary/15 rounded-br-3xl border-y border-primary/15 bg-secondary/[0.06]">
              {d.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col px-3 py-6 sm:px-4"
                >
                  <dt className="order-2 mt-2 text-[9px] uppercase leading-tight tracking-[0.18em] text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-3xl font-light text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-slate-400">
              {d.notes}
            </p>
          </div>
        </div>
      </section>

      {/* TALLERES Y EXPERIENCIAS */}
      <section
        id="talleres"
        className="border-t border-primary/10 bg-primary/[0.04] py-16 md:py-24"
      >
        <div className="mx-auto w-11/12 max-w-6xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-secondary/70" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
              {t('extrasEyebrow')}
            </span>
          </div>
          <h2 className="mt-5 max-w-2xl text-3xl font-light leading-tight text-primary md:text-4xl">
            {d.extrasTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
            {d.extrasIntro}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.extras.map((extra) => (
              <Link
                key={`${extra.name}-${extra.date}`}
                href={extra.href}
                className="group flex h-full flex-col overflow-hidden rounded-tl-2xl rounded-br-2xl bg-white shadow-[0_14px_40px_-28px_rgba(31,42,46,0.55)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary/10">
                  <Image
                    src={extra.image}
                    alt={extra.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {extra.type}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">
                    {extra.date}
                  </span>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-primary">
                    {extra.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {extra.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary">
                    {t('extrasLink')}
                    <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA — las mismas fotos en las dos ediciones */}
      <EditionGallery />

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="mx-auto flex w-11/12 max-w-6xl flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl">
            <h2 className="text-2xl font-light leading-tight md:text-4xl">
              {d.ctaTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
              {d.ctaText}
            </p>
          </div>
          <Link
            href="/faces-and-whales"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {d.ctaButton}
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EditionDetail;
