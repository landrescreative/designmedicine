// pages/xochimilco.tsx
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

import InfoXochimilco from '@/components/InfoXochimilco';
import HeroSectionTrips from '@/components/HeroSectionTrips';
import Formulario from '@/components/Formulario';
import PaymentSection from '@/components/PaymentSection';

const Page = () => {
  const t = useTranslations('xochimilcosite');

  return (
    <div className="flex flex-col items-center">
      <Script
        async
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="afterInteractive"
      />
      <HeroSectionTrips
        title={t('tour.title')}
        paragraph={t('tour.description')}
        img="/xochimilco.jpeg"
        date={t('tour.date')}
        hours={t('tourdetails1paragraph')}
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 w-full px-5 mt-16 lg:w-9/12">
        {/* Sidebar with Image Links */}
        <div className="hidden md:flex flex-col items-center w-full md:w-1/4 gap-10">
          {[
            '/Face Reading 2026.jpg',
            '/KIIKO FLYER 2026.jpg',
            '/flyer_shop.jpg'
          ].map((src, index) => (
            <Link
              href="/seminar"
              key={index}
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={src}
                alt="Event Flyer"
                width={300}
                height={300}
                className="rounded-3xl shadow-lg"
              />
            </Link>
          ))}
        </div>

        {/* Tour Description */}
        <div className="flex flex-col w-full">
          <h2 className="text-3xl text-primary uppercase font-bold">
            {t('whattoexpect')}
          </h2>
          <div className="cards flex gap-5 justify-center my-6 flex-wrap">
            {t.raw('highlights').map((highlight: string, index: number) => (
              <div
                key={index}
                className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all"
              >
                <p>{highlight}</p>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-primary mt-5">
            Full Description
          </h3>
          {t.raw('fullDescription').map((paragraph: string, index: number) => (
            <p key={index} className="text-gray-700 my-2">
              {paragraph}
            </p>
          ))}

          {/* Tour Includes */}
          <h3 className="text-xl font-semibold text-primary mb-2">
            Tour Includes
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {t.raw('includes').map((include: string, index: number) => (
              <li key={index}>{include}</li>
            ))}
          </ul>

          {/* Does not include */}
          <h3 className="text-xl font-semibold text-primary my-5">
            Does not include
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {t.raw('excludes').map((exclude: string, index: number) => (
              <li key={index}>{exclude}</li>
            ))}
          </ul>
        </div>
      </div>
      <InfoXochimilco />
      <PaymentSection buyButtonId="buy_btn_1SkwmCBceNIiOkbgPZgbWIyS" />
      <div className="w-full justify-center items-center flex py-16 bg-secondary/10 min-h-screen">
        <Formulario />
      </div>
      {/* Map Section */}
      <div className="text-center w-full lg:w-10/12 mt-10">
        <h1 className="text-3xl text-primary font-bold uppercase">
          {t('viewmap')}
        </h1>
        <h2 className="text-gray-500 text-xl mt-2">{t('viewmapparagraph')}</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.816631050711!2d-99.10668908508903!3d19.26182948696526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce014ecb8f9c1d%3A0x8a9afc542a68813e!2sXochimilco!5e0!3m2!1ses-419!2smx!4v1723970226563!5m2!1ses-419!2smx"
          loading="lazy"
          className="w-full h-96 rounded-lg shadow-lg mt-4"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
