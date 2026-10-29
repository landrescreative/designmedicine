'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslations } from 'next-intl';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Hero = () => {
  const t = useTranslations('facesWhales');
  return (
    <div className="relative isolate flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-[#12333C] px-6 pb-10 pt-28 md:px-10">
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
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(18,51,60,0.8) 0%, rgba(18,51,60,0.64) 45%, rgba(18,51,60,0.88) 100%)'
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(1200px 520px at 50% 120%, rgba(184,201,192,0.22), transparent 70%)'
        }}
      />

      <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative flex flex-col items-center justify-center gap-6 pt-6 text-center md:pt-14">
        <span className="rounded-full bg-[#D9A94C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#12333C]">
          {t('hero.badge')}
        </span>

        <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-[#F6F1E6] md:text-7xl">
          {t('hero.brand')}
        </h1>

        <p className="max-w-2xl text-base font-light leading-snug text-[#B8C9C0] md:text-xl">
          {t('hero.subtitle')}
        </p>

        <div className="mt-2 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9A94C] md:text-sm">
            {t('hero.dates')} · {t('hero.length')}
          </p>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#F6F1E6]/80">
            {t('hero.place')}
          </p>
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#F6F1E6]/60">
            {t('hero.hotel')}
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={t('hero.payUrl')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-[#D9A94C] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#12333C] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6F1E6]"
          >
            {t('hero.payCta')}
            <FaArrowRight className="text-xs" />
          </a>
          <Link
            href="/faces-and-whales"
            className="inline-flex items-center gap-2 rounded-xl border border-[#B8C9C0]/60 px-7 py-4 text-sm uppercase tracking-[0.15em] text-[#F6F1E6] transition-colors duration-300 hover:bg-white/10"
          >
            {t('hero.cta2')}
          </Link>
        </div>

        <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-[#F6F1E6]/50">
          {t('hero.price')} · {t('hero.priceNote')}
        </p>
        <p className="mt-1 max-w-md text-[10px] leading-snug text-[#B8C9C0]/80">
          {t('hero.feeNote')}
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative flex flex-col items-center gap-2">
        <Link
          href="/past-courses"
          className="text-[10px] uppercase tracking-[0.24em] text-[#B8C9C0] underline decoration-[#B8C9C0]/40 underline-offset-4 hover:text-[#F6F1E6]"
        >
          {t('archiveLabel')} · 2025 — 2026
        </Link>
        <Link
          href="#viewmore"
          className="flex flex-col items-center justify-center text-[#F6F1E6] animate-bounce"
        >
          <IoIosArrowDown className="text-3xl text-[#D9A94C]" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
