// pages/xochimilco.tsx
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

import InfoXochimilco from '@/components/InfoXochimilco';
import HeroSectionTrips from '@/components/HeroSectionTrips';
import Formulario from '@/components/Formulario';

const Page = () => {
  const t = useTranslations('xochimilcosite');

  return (
    <div className="pt-16 flex flex-col items-center">
      <HeroSectionTrips
        title={t('tour.title')}
        paragraph={t('tour.description')}
        img="/xochimilco03.jpg"
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-10 w-full px-5 mt-16 lg:w-9/12">
        {/* Sidebar with Image Links */}
        <div className="hidden md:flex flex-col items-center w-full md:w-1/4 gap-10">
          {[
            '/flyer_facereading.png',
            '/flyer_kiiko.jpg',
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
            {t.raw('highlights').map((highlight, index) => (
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
          {t.raw('fullDescription').map((paragraph, index) => (
            <p key={index} className="text-gray-700 my-2">
              {paragraph}
            </p>
          ))}

          {/* Tour Includes */}
          <h3 className="text-xl font-semibold text-primary mb-2">
            Tour Includes
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {t.raw('includes').map((include, index) => (
              <li key={index}>{include}</li>
            ))}
          </ul>

          {/* Recommendations */}
          <h3 className="text-xl font-semibold text-primary my-5">
            Recommendations
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {t.raw('recommendations').map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>

          {/* Additional Details */}
          <div className="text-lg text-gray-700 font-bold text-secondary mt-4 space-y-2">
            <p>{t('pickup')}</p>
            <p>{t('duration')}</p>
            <p>{t('kayaks')}</p>
            <p>{t('experience')}</p>
          </div>

          {/* Full Description */}
        </div>
      </div>

      {/* Museum Section */}
      <div className="w-full lg:w-9/12 px-5 mt-10">
        <h2 className="text-4xl font-bold text-primary">{t('museum.title')}</h2>
        <p className="text-lg mt-4 text-gray-700">{t('museum.description')}</p>
        <h2 className="text-3xl my-5 text-primary uppercase font-bold">
          {t('whattoexpect')}
        </h2>
        <div className="cards flex gap-5 justify-center my-6 flex-wrap">
          {t.raw('museum.highlights').map((highlight, index) => (
            <div
              key={index}
              className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all"
            >
              <p>{highlight}</p>
            </div>
          ))}
        </div>

        {/* Museum Full Description */}
        <h3 className="text-xl font-semibold text-primary mt-8">
          Full Description
        </h3>
        {t.raw('museum.fullDescription').map((paragraph, index) => (
          <p key={index} className="text-gray-700 my-2">
            {paragraph}
          </p>
        ))}

        {/* Museum Includes */}
        <h3 className="text-xl font-semibold text-primary mt-5">Includes</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 font-bold">
          {t.raw('museum.includes').map((include, index) => (
            <li key={index}>{include}</li>
          ))}
        </ul>
        <p className="text-lg text-gray-700 mt-4">{t('museum.return')}</p>
      </div>

      {/* General Includes and Cost */}
      <div className="w-full lg:w-9/12 px-5 mt-10">
        <h3 className="text-2xl font-semibold text-primary">
          General Tour Includes
        </h3>
        <ul className="list-disc pl-6 text-gray-700 my-4">
          {t.raw('generalIncludes').map((include, index) => (
            <li key={index}>{include}</li>
          ))}
        </ul>
      </div>

      {/* IMAGES  */}
      <div className="flex gap-10 flex-col md:flex-row px-2 md:w-10/12">
        <div className=" relative rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="/3.jpg"
            alt="Image 1"
          />
          <h1 className="absolute bottom-0 left-0 bg-primary text-white p-2 px-5 text-lg font-bold">
            {t('phototitle.0')}
          </h1>
        </div>
        <div className=" relative rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="/11154952_445560532268265_5060642880520825132_o.webp"
            alt="Image 2"
          />
          <h1 className="absolute bottom-0 left-0 bg-primary text-white p-2 px-5 text-lg font-bold">
            {t('phototitle.1')}
          </h1>
        </div>
      </div>
      <InfoXochimilco />
      <div className="w-full justify-center items-center flex py-16 bg-secondary/10 min-h-screen">
        <Formulario />
      </div>
      {/* Map Section */}
      <div className="text-center w-full lg:w-10/12 px-5 mt-10">
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
