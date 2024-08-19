'use client';
import React from 'react';
import LightGallery from 'lightgallery/react';
import { FaRegClock } from 'react-icons/fa';
import { MdLocalActivity } from 'react-icons/md';

// Importa los estilos de lightGallery
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// Importa los plugins que vas a usar
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import InfoTeotihuacan from '@/components/InfoTeotihuacan';

const Page = () => {
  return (
    <div className="min-h-screen pt-24  flex flex-col items-center p-4">
      <div className="flex flex-row items-center gap-3">
        <span className=" bg-red-200 opacity font-bold rounded-full px-5 py-1 text-red-500 text-center">
          <FaRegClock
            className="inline-block mr-2 text-primary font-bold"
            size={20}
          />
          1 día
        </span>
        <span className=" bg-red-200 opacity font-bold rounded-full px-5 py-1 text-red-500  text-center">
          <MdLocalActivity
            className="inline-block mr-2 text-primary font-bold"
            size={20}
          />
          2 Actividades
        </span>
      </div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4 w-full md:w-auto text-primary">
        Teotihuacan
      </h1>
      <p className="text-lg text-center max-w-prose pb-10">
        Adicional a la conferencia, te ofrecemos la oportunidad de visitar uno
        de los lugares más increíbles de México. Teotihuacan es una de las zonas
        arqueológicas más importantes de México y un lugar que no te puedes
        perder.
      </p>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        hideScrollbar={true}
        elementClassNames="flex flex-wrap justify-center"
      >
        <a href="/pyramids.jpg" className="m-0 p-0 w-full h-full">
          <img
            src="/pyramids.jpg"
            alt="Image 1"
            className="h-5/6 w-full object-cover  shadow-lg rounded-3xl m-0 "
          />
        </a>
      </LightGallery>
      <div className="descripcion del tour flex flex-col items-center mb-8">
        <h2 className="text-3xl text-left w-full pt-6 text-primary uppercase font-bold">
          What to Expect:
        </h2>
        <h2 className="text-lg text-left w-full py-3 text-primary uppercase font-bold ">
          • Pyramid of the Sun
        </h2>
        <p className="text-lg text-left max-w-prose">
          Pyramid of the Sun: Start your adventure with a guided tour of the
          largest pyramid in Teotihuacan, the Pyramid of the Sun. Learn about
          its construction, historical significance, and the mysterious rituals
          that took place here. Climb to the top for a breathtaking view of the
          ancient city and the surrounding landscape.
        </p>
        <h2 className="text-lg text-left w-full py-3 text-primary uppercase font-bold ">
          • Pyramid of the Moon
        </h2>
        <p className="text-lg text-left max-w-prose">
          Continue your exploration at the Pyramid of the Moon, which offers
          another incredible vantage point. Discover the plaza in front of the
          pyramid, which was used for ceremonial purposes, and learn about the
          Teotihuacan cosmology and religious practices.
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
            Pyramid of the Sun
          </h1>
        </div>
        <div className="max-w-md relative rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="/moon01.jpg"
            alt="Image 2"
          />
          <h1 className="absolute bottom-0 left-0 bg-primary text-white p-2 px-5 text-lg font-bold">
            Pyramid of the Moon
          </h1>
        </div>
        <InfoTeotihuacan />
        <div>
          <h1 className="text-3xl text-center max-w-prose text-primary font-bold uppercase">
            View in map
          </h1>
          <h2 className="text-gray-500 text-xl ">
            Check reviews, explore the zone, etc.
          </h2>
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
