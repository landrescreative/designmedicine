'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaArrowRight } from 'react-icons/fa6';
import Formulario from './Formulario';

type Channel = {
  label: string;
  value: string;
  note: string;
  href: string;
};

type Card = {
  label: string;
  text: string;
  cta: string;
  href: string;
};

const ContactPage = () => {
  const t = useTranslations('contactPage');
  const channels = t.raw('channels') as Channel[];
  const cards = t.raw('cards') as Card[];

  return (
    <div className="overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="border-b border-primary/10 bg-primary/[0.03]">
        <div className="mx-auto w-11/12 max-w-6xl py-12 md:py-16">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-secondary/70" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-secondary">
              {t('eyebrow')}
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-light leading-tight tracking-tight text-primary md:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            {t('lead')}
          </p>
        </div>
      </section>

      {/* CANALES + FORMULARIO */}
      <section className="mx-auto w-11/12 max-w-6xl py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-[11px] uppercase tracking-[0.35em] text-secondary">
              {t('channelsTitle')}
            </h2>

            <ul className="mt-6 space-y-6">
              {channels.map((channel) => (
                <li
                  key={channel.label}
                  className="border-b border-primary/10 pb-5 last:border-0 last:pb-0"
                >
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
                    {channel.label}
                  </p>
                  <a
                    href={channel.href}
                    className="mt-1 inline-block text-lg text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                  >
                    {channel.value}
                  </a>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {channel.note}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4">
              {cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex items-start justify-between gap-4 rounded-tl-2xl rounded-br-2xl border border-primary/15 bg-primary/[0.03] p-5 transition-colors duration-300 hover:border-primary/40"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-secondary">
                      {card.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {card.text}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary">
                      {card.cta}
                      <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h2 className="text-[11px] uppercase tracking-[0.35em] text-secondary">
                {t('formTitle')}
              </h2>
              <p className="text-[11px] leading-snug text-slate-400 sm:text-right">
                {t('formNote')}
              </p>
            </div>

            <div className="mt-6">
              <Formulario variant="panel" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
