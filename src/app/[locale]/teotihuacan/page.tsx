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
import Tarjetas from '@/components/Tarjetas';
import Formulario from '@/components/Formulario';
import PaymentSection from '@/components/PaymentSection';

const Page = () => {
  // Add translated strings here
  const t = useTranslations('teotihuacansite');
  return (
    <div className="flex flex-col items-center ">
      <HeroSectionTrips
        title={t('title')}
        paragraph={t('paragraph')}
        img="/viaja-en-globo-por-las-piramides-de-teotihuacan.webp"
        date={t('date')}
        hours={t('tourDetails.durationDescription')}
      />

      <div className="flex justify-center gap-10 flex-col-reverse md:flex-row items-start w-full px-5 mt-16 lg:w-10/12">
        <Tarjetas />
        <div className="descripcion del tour flex flex-col items-center mb-8 w-full">
          <h2 className="text-3xl text-center w-full  text-primary uppercase font-bold">
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
          </div>
          <div className="my-4 self-start w-full">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Tour Includes
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 ">
              <li>{t('tourincludes.0')}</li>
              <li>{t('tourincludes.1')}</li>
              <li>{t('tourincludes.2')}</li>
              <li>{t('tourincludes.3')}</li>
              <li>{t('tourincludes.4')}</li>
              <li>{t('tourincludes.5')}</li>
              <li>{t('tourincludes.6')}</li>
              <li>{t('tourincludes.7')}</li>
              <li>{t('tourincludes.8')}</li>
              <li>{t('tourincludes.9')}</li>
              <li>{t('tourincludes.10')}</li>
              <li>{t('tourincludes.11')}</li>
              <li>{t('tourincludes.12')}</li>
            </ul>
            <h3 className="text-xl font-semibold text-primary my-5">
              Does not include
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>{t('tourexcludes.0')}</li>
              <li>{t('tourexcludes.1')}</li>
              <li>{t('tourexcludes.2')}</li>
              <li>{t('tourexcludes.3')}</li>
            </ul>
            <h3 className="text-xl text-left font-semibold text-primary mt-5">
              Full Description
            </h3>
            <p className="text-gray-700 my-2">{t('fulldescription.0')}</p>
            <p className="text-gray-700 my-2">{t('fulldescription.1')}</p>
            <p className="text-gray-700 my-2">{t('fulldescription.2')}</p>
            <p className="text-gray-700 my-2">{t('fulldescription.3')}</p>
          </div>
        </div>
      </div>

      <div className="atracciones flex flex-wrap justify-center gap-10 ">
        <div className="flex gap-10 flex-col md:flex-row mx-4 md:w-10/12">
          <div className=" relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              className="w-full h-full object-cover"
              src="/Imagen-de-Teotihuacan.webp"
              alt="Image 1"
              width={500}
              height={500}
            />
            <h1 className="absolute bottom-0 left-0 bg-primary text-white p-2 px-5 text-lg font-bold">
              {t('phototitle.0')}
            </h1>
          </div>
          <div className=" relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              className="w-full h-full object-cover"
              src="/11154952_445560532268265_5060642880520825132_o.webp"
              alt="Image 2"
              width={500}
              height={500}
            />
            <h1 className="absolute bottom-0 left-0 bg-primary text-white p-2 px-5 text-lg font-bold">
              {t('phototitle.1')}
            </h1>
          </div>
        </div>
        <InfoTeotihuacan />
        <PaymentSection buyButtonId="buy_btn_1QN0BdBceNIiOkbglJnAktAI" />
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
