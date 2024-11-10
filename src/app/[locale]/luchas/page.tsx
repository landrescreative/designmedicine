import React from 'react';
import LightGallery from 'lightgallery/react';
import { FaRegClock } from 'react-icons/fa';
import { MdLocalActivity } from 'react-icons/md';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

// Importa los estilos de lightGallery
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// Importa los plugins que vas a usar
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import InfoXochimilco from '@/components/InfoXochimilco';
import HeroSectionTrips from '@/components/HeroSectionTrips';
import InfoTeotihuacan from '@/components/InfoTeotihuacan';
import Register from '@/components/Register';
import Tarjetas from '@/components/Tarjetas';
import Formulario from '@/components/Formulario';

const Page = () => {
  // Add translated strings here
  const t = useTranslations('luchas');
  return (
    <div className="pt-16 flex flex-col items-center ">
      <HeroSectionTrips
        title={t('event.title')}
        paragraph={t('event.date')}
        img="/Lucha-libre-México-CMLL.webp"
      />

      <div className="flex justify-center gap-10 flex-col-reverse md:flex-row items-start w-full px-5 mt-16 lg:w-10/12">
        <Tarjetas />
        <div className="descripcion del tour flex flex-col items-center mb-8 w-full">
          <h2 className="text-3xl text-left w-full  text-primary uppercase font-bold">
            {t('event.subtitle2')}
          </h2>
          <p className="text-gray-700 my-2 text-left w-full">
            {t('event.description')}
          </p>
          <p className="text-gray-700 my-2 text-left w-full">
            {t('experience.intro')}
          </p>
          <p className="text-gray-700 my-2 text-left w-full">
            {t('experience.cta')}
          </p>
          <p className="text-gray-700 my-2 text-left w-full">
            {t('experience.evening')}
          </p>
          <h2 className="text-3xl text-left w-full mt-6 text-primary uppercase font-bold">
            {t('package.includesTitle')}
          </h2>
          <div className="cards flex gap-5 justify-center my-6 flex-wrap">
            <div className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all">
              <p>{t('package.includes.0')}</p>
            </div>
            <div className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all">
              <p>{t('package.includes.1')}</p>
            </div>
            <div className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all">
              <p>{t('package.includes.2')}</p>
            </div>
            <div className="px-3 py-7 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all">
              <p>{t('package.includes.3')}</p>
            </div>
          </div>
          <div className="self-start w-full">
            <h3 className="text-xl font-semibold text-primary my-5">
              {t('package.excludesTitle')}
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>{t('package.excludes.0')}</li>
            </ul>
            <p className="text-primary my-2 font-bold">
              {t('details.duration')}
            </p>
            <p className="text-primary my-2 font-bold">{t('details.signup')}</p>
            <p className="text-primary my-2 font-bold">{t('details.cost')}</p>
          </div>
          <div className="flex gap-10 flex-col md:flex-row w-full my-5">
            <div className=" relative rounded-2xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="/Imagen-de-Teotihuacan.webp"
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
        </div>
      </div>

      <div className="atracciones flex flex-col flex-wrap justify-center items-center my-10 gap-10 w-full">
        <InfoTeotihuacan />
        <div className="w-full justify-center items-center flex py-16 bg-secondary/10 min-h-screen">
          <Formulario />
        </div>
        <div>
          <h1 className="text-3xl text-center max-w-prose text-primary font-bold uppercase">
            {t('viewmap')}
          </h1>
          <h2 className="text-gray-500 text-xl ">{t('viewmapparagraph')}</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9751.701205715277!2d-98.84468653143622!3d19.691080076013023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ea859fdaaa75%3A0x643ae28a2e1df8f0!2sPir%C3%A1mides%20de%20Teotihuacan!5e0!3m2!1ses-419!2smx!4v1723970226563!5m2!1ses-419!2smx"
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
