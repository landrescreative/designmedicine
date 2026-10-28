'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';
import { FaArrowLeft, FaArrowRight, FaXmark } from 'react-icons/fa6';

// Las mismas fotos para las dos ediciones: no hay forma fiable de separarlas
// por año, así que la galería es una sola y se comparte.
const sources = [
  'clinica-01.jpg',
  'clinica-02.jpg',
  'clinica-03.jpg',
  'clinica-04.jpg',
  'clinica-05.jpg',
  'clinica-06.jpg',
  'xochimilco-01.jpg',
  'xochimilco-02.jpg',
  'xochimilco-03.jpg',
  'comida-01.jpg',
  'globo-01.jpg',
  'teotihuacan-01.jpg',
  'lucha-01.jpg',
  'monarca-01.jpg',
  'monarca-02.jpg',
  'grupo-01.jpg'
];

type Copy = { caption: string; alt: string };

const EditionGallery = () => {
  const t = useTranslations('pastCourses.galleryShared');
  const copy = t.raw('items') as Copy[];
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((current) =>
        current === null
          ? current
          : (current + dir + sources.length) % sources.length
      ),
    []
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };

    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close, step]);

  const current = open === null ? null : copy[open];

  return (
    <section className="border-t border-primary/10 bg-white py-16 md:py-24">
      <div className="mx-auto w-11/12 max-w-6xl">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-secondary/70" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
              {t('eyebrow')}
            </span>
          </div>
          <h2 className="mt-5 max-w-xl text-3xl font-light leading-tight text-primary md:text-4xl">
            {t('title')}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {sources.map((file, index) => {
            const item = copy[index] ?? copy[0];
            return (
              <figure
                key={file}
                className="group relative overflow-hidden rounded-tl-2xl rounded-br-2xl bg-primary/10"
              >
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  aria-label={item.caption}
                  className="relative block aspect-[4/5] w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <Image
                    src={`/past-courses/archivo/${file}`}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 46vw, (max-width: 1024px) 31vw, 23vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-3 top-3 rounded-full bg-black/35 px-2 py-0.5 text-[10px] tracking-[0.22em] text-white/90 backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              </figure>
            );
          })}
        </div>

        <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-slate-400">
          {t('note')}
        </p>
      </div>

      {mounted &&
        open !== null &&
        current &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            className="fixed inset-0 z-[9999] flex flex-col bg-primary/95 backdrop-blur-xl"
            onClick={close}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-[11px] uppercase tracking-[0.28em] text-white/70">
                {String(open + 1).padStart(2, '0')} /{' '}
                {String(sources.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label={t('close')}
                className="rounded-full p-2 text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <FaXmark className="text-xl" />
              </button>
            </div>

            <div className="relative flex-1">
              <Image
                src={`/past-courses/archivo/${sources[open]}`}
                alt={current.alt}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>

            <div
              className="flex items-center justify-between gap-4 px-5 py-5"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label={t('prev')}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white/80 transition-colors hover:border-white hover:text-white sm:px-4"
              >
                <FaArrowLeft className="text-[10px]" />
                <span className="hidden sm:inline">{t('prev')}</span>
              </button>
              <p className="flex-1 text-center text-xs uppercase tracking-[0.2em] text-white/80">
                {current.caption}
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label={t('next')}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white/80 transition-colors hover:border-white hover:text-white sm:px-4"
              >
                <span className="hidden sm:inline">{t('next')}</span>
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default EditionGallery;
