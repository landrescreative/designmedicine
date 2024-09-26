import React from 'react';
import LightGallery from 'lightgallery/react';
import { FaRegClock } from 'react-icons/fa';
import { MdLocalActivity } from 'react-icons/md';
import { useTranslations } from 'next-intl';

// Importa los estilos de lightGallery
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// Importa los plugins que vas a usar
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import InfoXochimilco from '@/components/InfoXochimilco';

const Page = () => {
  // Add translated strings here
  const t = useTranslations('teotihuacansite');
  return (
    <div className="min-h-screen pt-24  flex flex-col items-center p-4">
      <div className="flex flex-row items-center gap-3">
        <span className=" bg-red-200 opacity font-bold rounded-full px-5 py-1 text-red-500 text-center">
          <FaRegClock
            className="inline-block mr-2 text-primary font-bold"
            size={20}
          />
          {t('length')}
        </span>
        <span className=" bg-red-200 opacity font-bold rounded-full px-5 py-1 text-red-500  text-center">
          <MdLocalActivity
            className="inline-block mr-2 text-primary font-bold"
            size={20}
          />
          {t('activities')}
        </span>
      </div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4 w-full md:w-auto text-primary">
        {t('title')}
      </h1>
      <p className="text-lg text-center max-w-prose pb-10">{t('paragraph')}</p>
      <div className="img-hero w-3/4 md:w-2/4 py-8 justify-center items-center">
        <img src="/pyramids.jpg" alt="Templo Mayor" className="rounded-2xl" />
      </div>
      <div className="descripcion del tour flex flex-col items-center mb-8">
        <h2 className="text-3xl text-left w-full pt-6 text-primary uppercase font-bold">
          {t('whattoexpect')}
        </h2>
        <h2 className="text-lg text-left w-full py-3 text-primary uppercase font-bold ">
          {t('piramidedelsol')}
        </h2>
        <p className="text-lg text-left max-w-prose">
          {t('piramidedelsolparagraph')}
        </p>
        <h2 className="text-lg text-left w-full py-3 text-primary uppercase font-bold ">
          {t('piramidedelaluna')}
        </h2>
        <p className="text-lg text-left max-w-prose">
          {t('piramidedelalunaparagraph')}
        </p>
      </div>

      <div className="text-lg text-center max-w-prose"></div>
      <div className="atracciones flex  flex-wrap justify-center gap-10">
        <div className="max-w-md relative rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="/sun01.jpg"
            alt="Image 1"
          />
          <h1 className="absolute bottom-0 left-0 bg-primary text-white p-2 px-5 text-lg font-bold">
            {t('piramidedelsol')}
          </h1>
        </div>
        <div className="max-w-md relative rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="/moon01.jpg"
            alt="Image 2"
          />
          <h1 className="absolute bottom-0 left-0 bg-primary text-white p-2 px-5 text-lg font-bold">
            {t('piramidedelaluna')}
          </h1>
        </div>
        <InfoXochimilco />
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
