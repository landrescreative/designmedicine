'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

type AboutTeacherProps = {
  abouttitle: string;
  aboutdes: string;
};

const AboutKiiko: React.FC<AboutTeacherProps> = ({ abouttitle, aboutdes }) => {
  const t = useTranslations('facesWhales');
  return (
    <section className="relative flex flex-col items-center px-6 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
        <motion.figure initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] bg-[#12333C]/10">
            <Image
              src="/past-courses/extras/face-reading.jpg"
              alt={abouttitle}
              fill
              sizes="(max-width: 768px) 92vw, 38vw"
              className="object-cover"
              style={{ objectPosition: '72% center' }}
            />
          </div>
        </motion.figure>

        <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.15 }} className="md:col-span-7">
          <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
            {t('team.faceLabel')}
          </span>
          <h2 className="mt-4 text-2xl font-light leading-tight text-primary md:text-4xl">
            {abouttitle}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#58585A] md:text-lg">
            {aboutdes}
          </p>
          <Link
            href="/faces-and-whales"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-primary"
          >
            {t('aboutCta')}
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutKiiko;
