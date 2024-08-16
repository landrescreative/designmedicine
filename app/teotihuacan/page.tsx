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

const Page = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-100 flex flex-col items-center p-4">
      <div className="flex flex-row items-center gap-3">
        <span className=" bg-red-200  rounded-full px-5 py-1 text-black font-light text-center">
          <FaRegClock className="inline-block mr-2 text-primary" size={20} />1
          día
        </span>
        <span className=" bg-red-200  rounded-full px-5 py-1 text-black font-light text-center">
          <MdLocalActivity
            className="inline-block mr-2 text-primary"
            size={20}
          />
          2 Actividades
        </span>
      </div>
      <h1 className="text-4xl font-bold text-left mt-8 mb-4 w-full md:w-auto text-primary">
        Teotihuacan
      </h1>
      <p className="text-lg text-left max-w-prose pb-10">
        Adicional a la conferencia, te ofrecemos la oportunidad de visitar uno
        de los lugares más increíbles de México. Teotihuacan es una de las zonas
        arqueológicas más importantes de México y un lugar que no te puedes
        perder.
      </p>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        hideScrollbar={true}
        elementClassNames="flex flex-wrap justify-center  gap-4"
      >
        <a href="/1.jpg" className="block w-full sm:w-1/2 md:w-1/4">
          <img
            src="/1.jpg"
            alt="Image 1"
            className="h-64 w-full object-cover  shadow-lg rounded-3xl "
          />
        </a>
        <a href="/2.jpg" className="block w-full sm:w-1/2 md:w-1/4">
          <img
            src="/2.jpg"
            alt="Image 2"
            className="h-64 w-full object-cover  shadow-lg rounded-3xl "
          />
        </a>
        <a href="/3.jpg" className="block w-full sm:w-1/2 md:w-1/4">
          <img
            src="/3.jpg"
            alt="Image 3"
            className="h-64 w-full object-cover  shadow-lg rounded-3xl "
          />
        </a>
        <a href="/3.jpg" className="block w-full sm:w-1/2 md:w-1/4">
          <img
            src="/3.jpg"
            alt="Image 4"
            className="h-64 w-full object-cover  shadow-lg rounded-3xl "
          />
        </a>
        <a href="/3.jpg" className="block w-full sm:w-1/2 md:w-1/4">
          <img
            src="/3.jpg"
            alt="Image 4"
            className="h-64 w-full object-cover  shadow-lg rounded-3xl "
          />
        </a>
        <a href="/3.jpg" className="block w-full sm:w-1/2 md:w-1/4">
          <img
            src="/3.jpg"
            alt="Image 4"
            className="h-64 w-full object-cover  shadow-lg rounded-3xl "
          />
        </a>
      </LightGallery>
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-2xl font-bold mt-8 text-primary">Prepárate</h2>
        <p className="text-lg text-center  max-w-prose">
          Revisa los detalles del viaje y prepárate para disfrutar de una de las
          experiencias más increíbles de tu vida.
        </p>
      </div>
      <div className="flex  flex-wrap justify-center gap-10">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-full" src="/1.jpg" alt="Image 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Title 1</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, justo ac tincidunt tristique, neque elit lacinia
              mauris, id lacinia nunc neque vitae nunc.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img className="w-full" src="/1.jpg" alt="Image 2" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Title 2</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, justo ac tincidunt tristique, neque elit lacinia
              mauris, id lacinia nunc neque vitae nunc.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/1.jpg" alt="Image 3" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Title 3</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consectetur, justo ac tincidunt tristique, neque elit lacinia
              mauris, id lacinia nunc neque vitae nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
