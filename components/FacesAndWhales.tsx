'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaArrowRight } from 'react-icons/fa6';

const INK = '#12333C';
const CREAM = '#F6F1E6';
const MUSTARD = '#D9A94C';
const SAGE = '#B8C9C0';

type GalleryPhoto = {
  src: string;
  captionIndex: number;
  className: string;
  sizes: string;
  position?: string;
};

const GALLERY: GalleryPhoto[] = [
  {
    src: '/faces-whales/gallery-flukes.jpg',
    captionIndex: 0,
    className: 'md:col-span-7',
    sizes: '(max-width: 768px) 92vw, 56vw'
  },
  {
    src: '/faces-whales/gallery-aerial.jpg',
    captionIndex: 1,
    className: 'md:col-span-5',
    sizes: '(max-width: 768px) 92vw, 40vw'
  },
  {
    src: '/faces-whales/gallery-coast.jpg',
    captionIndex: 2,
    className: 'md:col-span-5',
    sizes: '(max-width: 768px) 92vw, 40vw'
  },
  {
    src: '/faces-whales/gallery-boat.jpg',
    captionIndex: 3,
    className: 'md:col-span-7',
    sizes: '(max-width: 768px) 92vw, 56vw',
    position: 'center 72%'
  }
];

const FacesAndWhales = () => {
  const t = useTranslations('facesWhales');
  const highlights = t.raw('highlights.items') as {
    value: string;
    label: string;
  }[];
  const includes = t.raw('includes.items') as string[];
  const days = t.raw('itinerary.days') as {
    day: string;
    label: string;
    items: { time: string; text: string }[];
  }[];
  const faceDays = t.raw('faceProgram.days') as {
    label: string;
    when: string;
    items: { title: string; text: string }[];
  }[];
  const practical = t.raw('practical.items') as {
    label: string;
    value: string;
  }[];
  const notes = t.raw('notes.items') as string[];
  const captions = t.raw('gallery.captions') as string[];

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: CREAM }}>
      {/* HERO */}
      <section
        className="relative isolate overflow-hidden"
        style={{ backgroundColor: INK }}
      >
        <Image
          src="/faces-whales/hero-whale.jpg"
          alt="Ballena jorobada y su cría bajo la superficie del océano"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 md:hidden"
          style={{ backgroundColor: 'rgba(18,51,60,0.8)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 hidden md:block"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(18,51,60,0.97) 0%, rgba(18,51,60,0.92) 34%, rgba(18,51,60,0.62) 68%, rgba(18,51,60,0.28) 100%)'
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-20"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(246,241,230,0) 0%, rgba(246,241,230,0.92) 100%)'
          }}
        />

        <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-1 items-center gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-24">
          <div className="md:col-span-7">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]"
              style={{ backgroundColor: MUSTARD, color: INK }}
            >
              {t('hero.badge')}
            </span>

            <h1
              className="mt-6 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl"
              style={{ color: CREAM }}
            >
              {t('hero.brand')}
            </h1>

            <p
              className="mt-5 max-w-md text-lg font-light leading-snug md:text-xl"
              style={{ color: SAGE }}
            >
              {t('hero.subtitle')}
            </p>

            <div className="mt-8 space-y-2">
              <p
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: MUSTARD }}
              >
                {t('hero.dates')}
              </p>
              <p
                className="text-[11px] uppercase tracking-[0.28em]"
                style={{ color: CREAM, opacity: 0.75 }}
              >
                {t('hero.length')}
              </p>
              <p
                className="pt-2 text-sm tracking-wide"
                style={{ color: CREAM, opacity: 0.9 }}
              >
                {t('hero.place')}
              </p>
              <p className="text-sm" style={{ color: SAGE }}>
                {t('hero.hotel')}
              </p>
            </div>

            <p
              className="mt-8 max-w-lg font-serif text-xl leading-relaxed md:text-2xl"
              style={{ color: CREAM }}
            >
              {t('hero.lead')}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={t('hero.payUrl')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6F1E6]"
                style={{ backgroundColor: MUSTARD, color: INK }}
              >
                {t('hero.payCta')}
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="#itinerario"
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-7 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-white/10"
                style={{ borderColor: SAGE, color: CREAM }}
              >
                {t('hero.cta2')}
              </a>
            </div>

            <p className="mt-4 text-[11px]" style={{ color: SAGE }}>
              {t('hero.phone')}
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="mx-auto max-w-sm md:ml-auto">
              <div
                className="rounded-tl-3xl rounded-br-3xl border p-6 backdrop-blur-sm"
                style={{
                  borderColor: 'rgba(184,201,192,0.4)',
                  backgroundColor: 'rgba(18,51,60,0.45)'
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.28em]"
                  style={{ color: SAGE }}
                >
                  {t('hero.priceCardLabel')}
                </p>
                <p
                  className="mt-2 font-serif text-4xl leading-none"
                  style={{ color: CREAM }}
                >
                  {t('hero.price')}
                </p>
                <p className="mt-2 text-xs" style={{ color: SAGE }}>
                  {t('hero.priceCardNote')}
                </p>
                <p
                  className="mt-1 text-[10px] uppercase tracking-[0.16em]"
                  style={{ color: MUSTARD }}
                >
                  {t('hero.priceCardFee')}
                </p>
                <p
                  className="mt-4 border-t pt-3 text-[11px] leading-snug"
                  style={{ borderColor: 'rgba(184,201,192,0.3)', color: SAGE }}
                >
                  {t('hero.singleNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + CIFRAS */}
      <section className="mx-auto w-11/12 max-w-6xl py-16 md:py-24">
        <h2
          className="max-w-2xl font-serif text-3xl leading-tight md:text-4xl"
          style={{ color: INK }}
        >
          {t('intro.title')}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          <p className="leading-relaxed" style={{ color: '#3C4A4F' }}>
            {t('intro.p1')}
          </p>
          <p className="leading-relaxed" style={{ color: '#3C4A4F' }}>
            {t('intro.p2')}
          </p>
        </div>

        <dl
          className="mt-12 grid grid-cols-1 gap-6 border-y py-8 sm:grid-cols-3"
          style={{ borderColor: 'rgba(18,51,60,0.15)' }}
        >
          {highlights.map((item) => (
            <div key={item.label}>
              <dd
                className="font-serif text-4xl leading-none"
                style={{ color: INK }}
              >
                {item.value}
              </dd>
              <dt
                className="mt-2 text-[11px] uppercase leading-snug tracking-[0.18em]"
                style={{ color: '#6B7B80' }}
              >
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      {/* GALERÍA · EL MAR */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-11/12 max-w-6xl">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-10"
              style={{ backgroundColor: 'rgba(217,169,76,0.9)' }}
            />
            <span
              className="text-[11px] uppercase tracking-[0.35em]"
              style={{ color: '#8A6A1F' }}
            >
              {t('gallery.eyebrow')}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
            <h2
              className="font-serif text-3xl leading-tight md:col-span-6 md:text-4xl"
              style={{ color: INK }}
            >
              {t('gallery.title')}
            </h2>
            <p
              className="text-sm leading-relaxed md:col-span-6 md:text-base"
              style={{ color: '#3C4A4F' }}
            >
              {t('gallery.intro')}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
            {GALLERY.map((photo) => (
              <figure key={photo.src} className={`group ${photo.className}`}>
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-2xl rounded-br-2xl md:aspect-auto md:h-[340px] lg:h-[400px]"
                  style={{ backgroundColor: 'rgba(18,51,60,0.08)' }}
                >
                  <Image
                    src={photo.src}
                    alt={captions[photo.captionIndex]}
                    fill
                    sizes={photo.sizes}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    style={photo.position ? { objectPosition: photo.position } : undefined}
                  />
                </div>
                <figcaption
                  className="mt-3 flex items-start gap-2 text-[11px] leading-snug tracking-wide"
                  style={{ color: '#6B7B80' }}
                >
                  <span aria-hidden style={{ color: MUSTARD }}>
                    —
                  </span>
                  <span>{captions[photo.captionIndex]}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUYE + EQUIPO */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#EFE8D9' }}>
        <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2
              className="font-serif text-3xl leading-tight md:text-4xl"
              style={{ color: INK }}
            >
              {t('includes.title')}
            </h2>
            <ul className="mt-8 space-y-4">
              {includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b pb-4 text-sm leading-relaxed last:border-0 md:text-base"
                  style={{ borderColor: 'rgba(18,51,60,0.12)', color: '#3C4A4F' }}
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: MUSTARD }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h2
              className="font-serif text-3xl leading-tight md:text-4xl"
              style={{ color: INK }}
            >
              {t('team.title')}
            </h2>
            <div className="mt-8 space-y-6">
              <div
                className="rounded-tl-2xl rounded-br-2xl border-l-2 bg-white/70 p-5"
                style={{ borderColor: INK }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.24em]"
                  style={{ color: '#6B7B80' }}
                >
                  {t('team.whaleLabel')}
                </p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: INK }}>
                  {t('team.whaleText')}
                </p>
              </div>
              <div
                className="rounded-tl-2xl rounded-br-2xl border-l-2 bg-white/70 p-5"
                style={{ borderColor: MUSTARD }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.24em]"
                  style={{ color: '#6B7B80' }}
                >
                  {t('team.faceLabel')}
                </p>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: INK }}>
                  {t('team.faceText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARIO */}
      <section id="itinerario" className="mx-auto w-11/12 max-w-6xl py-16 md:py-24">
        <span
          className="text-[11px] uppercase tracking-[0.35em]"
          style={{ color: '#8A6A1F' }}
        >
          {t('itinerary.title')}
        </span>
        <h2
          className="mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-4xl"
          style={{ color: INK }}
        >
          {t('itinerary.intro')}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {days.map((day, index) => (
            <article
              key={day.day}
              className="rounded-tl-3xl rounded-br-3xl border bg-white p-6 shadow-[0_14px_40px_-32px_rgba(18,51,60,0.6)]"
              style={{ borderColor: 'rgba(18,51,60,0.1)' }}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-xl" style={{ color: INK }}>
                  {day.day}
                </h3>
                <span
                  className="text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: '#8A6A1F' }}
                >
                  0{index + 1}
                </span>
              </div>
              <p
                className="mt-1 text-[11px] uppercase tracking-[0.2em]"
                style={{ color: '#6B7B80' }}
              >
                {day.label}
              </p>

              <ul className="mt-5 space-y-3">
                {day.items.map((item) => (
                  <li key={`${day.day}-${item.time}`} className="flex gap-4">
                    <span
                      className="w-32 shrink-0 text-[11px] uppercase tracking-[0.12em]"
                      style={{ color: '#8A6A1F' }}
                    >
                      {item.time}
                    </span>
                    <span className="text-sm leading-snug" style={{ color: '#3C4A4F' }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* PROGRAMA DE LECTURA DE ROSTRO */}
      <section className="py-20 md:py-28" style={{ backgroundColor: INK }}>
        <div className="mx-auto w-11/12 max-w-6xl">
          <span
            className="text-[11px] uppercase tracking-[0.35em]"
            style={{ color: MUSTARD }}
          >
            {t('faceProgram.total')}
          </span>
          <h2
            className="mt-5 max-w-2xl font-serif text-3xl leading-tight md:text-4xl"
            style={{ color: CREAM }}
          >
            {t('faceProgram.title')}
          </h2>
          <p className="mt-4 max-w-xl text-sm" style={{ color: SAGE }}>
            {t('faceProgram.subtitle')}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {faceDays.map((day) => (
              <article
                key={day.label}
                className="rounded-tl-3xl rounded-br-3xl border p-7 md:p-9"
                style={{ borderColor: 'rgba(184,201,192,0.3)' }}
              >
                <h3 className="font-serif text-xl" style={{ color: CREAM }}>
                  {day.label}
                </h3>
                <p
                  className="mt-2 text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: MUSTARD }}
                >
                  {day.when}
                </p>

                <ul className="mt-6">
                  {day.items.map((item) => (
                    <li
                      key={item.title}
                      className="border-t py-4 first:border-t-0 first:pt-0 last:pb-0"
                      style={{ borderColor: 'rgba(184,201,192,0.2)' }}
                    >
                      <p
                        className="text-[15px] font-semibold leading-snug"
                        style={{ color: CREAM }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: SAGE }}
                      >
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CITA SOBRE EL MAR */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/faces-whales/gallery-surface.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(18,51,60,0.78) 0%, rgba(18,51,60,0.58) 50%, rgba(18,51,60,0.82) 100%)'
          }}
        />
        <div className="mx-auto w-11/12 max-w-3xl py-20 text-center md:py-28">
          <span
            className="text-[11px] uppercase tracking-[0.35em]"
            style={{ color: MUSTARD }}
          >
            {t('quoteLabel')}
          </span>
          <p
            className="mt-6 font-serif text-2xl leading-snug md:text-4xl"
            style={{ color: CREAM }}
          >
            &ldquo;{t('quote')}&rdquo;
          </p>
          <div
            className="mx-auto mt-8 h-px w-16"
            style={{ backgroundColor: MUSTARD }}
          />
        </div>
      </section>

      {/* DATOS PRÁCTICOS + NOTAS */}
      <section className="mx-auto w-11/12 max-w-6xl pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <h2
              className="font-serif text-2xl md:text-3xl"
              style={{ color: INK }}
            >
              {t('practical.title')}
            </h2>
            <dl className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
              {practical.map((item, index) => (
                <div
                  key={item.label}
                  className={`border-t pt-4 ${
                    index === practical.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                  style={{ borderColor: 'rgba(18,51,60,0.14)' }}
                >
                  <dt
                    className="text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: '#6B7B80' }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    className="mt-2 text-[15px] leading-relaxed"
                    style={{ color: INK }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="md:col-span-5">
            <h2
              className="font-serif text-2xl md:text-3xl"
              style={{ color: INK }}
            >
              {t('notes.title')}
            </h2>
            <div
              className="mt-8 rounded-tl-3xl rounded-br-3xl border p-7 md:p-8"
              style={{
                borderColor: 'rgba(18,51,60,0.12)',
                backgroundColor: 'rgba(239,232,217,0.55)'
              }}
            >
              <ul className="space-y-5">
                {notes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-3 text-[13px] leading-relaxed"
                    style={{ color: '#5C6E74' }}
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: MUSTARD }}
                    />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#EFE8D9' }}>
        <div className="mx-auto flex w-11/12 max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2
              className="font-serif text-3xl leading-tight md:text-4xl"
              style={{ color: INK }}
            >
              {t('cta.title')}
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: '#3C4A4F' }}>
              {t('cta.text')}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em]" style={{ color: '#6B7B80' }}>
              {t('cta.phone')}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={t('hero.payUrl')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: INK, color: CREAM }}
            >
              {t('cta.button')}
              <FaArrowRight className="text-xs" />
            </a>
            <a
              href="/faces-and-whales-flyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border px-7 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-white/60"
              style={{ borderColor: 'rgba(18,51,60,0.35)', color: INK }}
            >
              {t('cta.secondary')}
            </a>
          </div>
        </div>
      </section>

      {/* VOLVER AL ARCHIVO */}
      <div
        className="mx-auto flex w-11/12 max-w-6xl items-center justify-between py-8 text-[11px] uppercase tracking-[0.22em]"
        style={{ color: '#6B7B80' }}
      >
        <Link href="/past-courses" className="hover:opacity-70">
          ← {t('nav')}
        </Link>
        <Link href="/seminar" className="hover:opacity-70">
          Design Medicine
        </Link>
      </div>
    </div>
  );
};

export default FacesAndWhales;
