import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

import InfoTresMuseos from '@/components/InfoTresMuseos';
import HeroSectionTrips from '@/components/HeroSectionTrips';
import Tarjetas from '@/components/Tarjetas';
import Formulario from '@/components/Formulario';
import PaymentSection from '@/components/PaymentSection';

const Page = () => {
  const t = useTranslations('tresmuseos');

  return (
    <div className="flex flex-col items-center">
      <Script
        async
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="afterInteractive"
      />
      <HeroSectionTrips
        title={t('title')}
        paragraph={t('paragraph')}
        img="/estudio diego rivera.jpeg"
        date={t('date')}
        hours={t('tourDetails.durationDescription')}
      />

      <div className="flex justify-center gap-10 flex-col-reverse md:flex-row items-start w-full px-5 mt-16 lg:w-10/12">
        <Tarjetas />
        <div className="descripcion del tour flex flex-col items-center mb-8 w-full">
          <h2 className="text-3xl text-center w-full text-primary uppercase font-bold">
            {t('whattoexpect')}
          </h2>
          <div className="cards flex gap-5 justify-center my-6 flex-wrap">
            <div className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all">
              <p>{t('highlight.0')}</p>
            </div>
            <div className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all">
              <p>{t('highlight.1')}</p>
            </div>
            <div className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all">
              <p>{t('highlight.2')}</p>
            </div>
            <div className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all">
              <p>{t('highlight.3')}</p>
            </div>
            <div className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all">
              <p>{t('highlight.4')}</p>
            </div>
          </div>
          <div className="my-4 self-start w-full">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Tour Includes
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>{t('tourincludes.0')}</li>
              <li>{t('tourincludes.1')}</li>
              <li>{t('tourincludes.2')}</li>
              <li>{t('tourincludes.3')}</li>
              <li>{t('tourincludes.4')}</li>
            </ul>
            <h3 className="text-xl font-semibold text-primary my-5">
              Does not include
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>{t('tourexcludes.0')}</li>
              <li>{t('tourexcludes.1')}</li>
            </ul>
            <h3 className="text-xl text-left font-semibold text-primary mt-5">
              Full Description
            </h3>
            {t.raw('fulldescription').map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-700 my-2">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="atracciones flex flex-wrap justify-center gap-10">
        <InfoTresMuseos />
        <PaymentSection buyButtonId="buy_btn_1SkweRBceNIiOkbg0Z3df5q5" />
        <div className="w-full justify-center items-center flex py-16 bg-secondary/10 min-h-screen">
          <Formulario />
        </div>
        <div>
          <h1 className="text-3xl text-center max-w-prose text-primary font-bold uppercase">
            {t('viewmap')}
          </h1>
          <h2 className="text-gray-500 text-xl">{t('viewmapparagraph')}</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.12345678901234!3d19.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA5OcKwMDcnMjQuNCJX!5e0!3m2!1ses-419!2smx!4v1234567890123!5m2!1ses-419!2smx"
          width="600"
          height="450"
          loading="lazy"
          style={{
            border: 0,
            width: '100%',
            height: '450px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,10px,0,0.2)'
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Page;

