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
import InfoTemplo from '@/components/InfoTemplo';

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
        Templo Mayor
      </h1>
      <p className="text-lg text-center max-w-prose pb-10">
        Además de explorar la historia, te ofrecemos la oportunidad de visitar
        uno de los sitios más emblemáticos de México. El Templo Mayor fue el
        centro religioso más importante de la antigua Tenochtitlán, la capital
        del imperio azteca.
      </p>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        hideScrollbar={true}
        elementClassNames="flex flex-wrap justify-center py-10"
      >
        <a href="/1.jpg" className="m-0 p-0 w-full h-full">
          <img
            src="/1.jpg"
            alt="Templo Mayor"
            className="h-4/6 w-full object-cover shadow-lg rounded-3xl m-0 "
          />
        </a>
      </LightGallery>
      <div className="descripcion del tour flex flex-col items-center mb-8">
        <h2 className="text-3xl text-left w-full pt-6 text-primary uppercase font-bold">
          Qué Esperar:
        </h2>
        <h2 className="text-lg text-left w-full py-3 text-primary uppercase font-bold ">
          • La Gran Pirámide
        </h2>
        <p className="text-lg text-left max-w-prose">
          Comienza tu recorrido en el Templo Mayor, explorando la estructura de
          la Gran Pirámide. Aprende sobre su construcción y la importancia
          religiosa en la cultura azteca. Descubre los altares y las deidades
          que fueron honradas aquí, como Huitzilopochtli y Tláloc.
        </p>
        <h2 className="text-lg text-left w-full py-3 text-primary uppercase font-bold ">
          • El Museo del Templo Mayor
        </h2>
        <p className="text-lg text-left max-w-prose">
          Continúa tu visita en el Museo del Templo Mayor, donde podrás admirar
          una amplia colección de artefactos descubiertos en las excavaciones
          del sitio. Aprende sobre la vida cotidiana, las prácticas religiosas y
          los sacrificios que fueron una parte integral de la cultura azteca.
        </p>
      </div>

      <div className="text-lg text-center max-w-prose"></div>
      <div className="atracciones flex  flex-wrap justify-center gap-10">
        <div className="max-w-md relative rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="/templo01.jpg"
            alt="Templo Mayor"
          />
          <h1 className="absolute bottom-0 left-0 bg-primary text-white p-2 px-5 text-lg font-bold">
            Templo Mayor
          </h1>
        </div>
        <div className="max-w-md relative rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="/templo02.webp"
            alt="Museo del Templo Mayor"
          />
          <h1 className="absolute bottom-0 left-0 bg-primary text-white p-2 px-5 text-lg font-bold">
            Museo del Templo Mayor
          </h1>
        </div>
        <InfoTemplo />
        <div>
          <h1 className="text-3xl text-center max-w-prose text-primary font-bold uppercase">
            Ver en el mapa
          </h1>
          <h2 className="text-gray-500 text-xl ">
            Consulta reseñas, explora la zona, etc.
          </h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.002005927727!2d-99.13320868509252!3d19.435515386884347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b8db44f87%3A0xf411f229e0cfd2a!2sMuseo%20del%20Templo%20Mayor!5e0!3m2!1ses-419!2smx!4v1723970226563!5m2!1ses-419!2smx"
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