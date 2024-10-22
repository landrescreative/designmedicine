'use client'; // Esto asegura que el componente se ejecute en el cliente

import Link from 'next/link'; // Importamos Link de Next.js
import React, { useState } from 'react';

// Carrusel personalizado (CustomCarousel)
const images = [
  'https://symposium.pacificcollege.edu/wp-content/uploads/2021/02/Kiiko-02-1.jpg',
  'https://www.qiology.com.au/wp-content/uploads/2019/05/Kiiko-866x1024.jpg',
  'https://altaivida.net/wp-content/uploads/2017/01/kiiko-matsumoto-altaivida-e1483914916971-300x273.jpeg',
  'https://m.media-amazon.com/images/I/A1aTrRY3W7L._AC_UF894,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg',
  'https://www.easterncurrents.ca/wp-content/uploads/2020/01/B5760.jpg',
];

const CustomCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-1 mt-8 mb-40 p-6 md:p-32">
  <h1 className="text-[#004F44] font-montserrat font-normal text-[40px]  leading-[48.76px] tracking-[0.5px]">
      LATEST PRODUCTS
    </h1>
  <div className="flex items-center gap-4 mt-10 "> {/* Alineación de las imágenes y el texto "more-->" */}
    <div className="flex overflow-hidden gap-4"> {/* Añadimos un gap entre imágenes */}
      {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${currentIndex + index + 1}`}
          className="w-[550px] h-[466.78px] object-cover opacity-100"
          style={{
            top: '2018.11px',
            left: '170.4px',
            opacity: '1',
          }}
        />
      ))}
    </div>

    {/* Texto para cambiar imágenes centrado verticalmente con las imágenes */}
    <div className="flex items-center justify-center">
      <button
        onClick={nextSlide} // Función que avanza al siguiente conjunto de imágenes
        className="text-[#5b737b] font-bold cursor-pointer"
      >
        more➔
      </button>
    </div>
  </div>
</div>

  
  
  
  );
};

// Página principal (Page)
const Page: React.FC = () => {
  // Definimos las opciones de color
  const colorOptions = ['#f00', '#0f0', '#00f']; // Colores de ejemplo para las variantes

  return (
    <>
      {/* Sección de Design Medicine Shop con fondo verde */}
      <div className="bg-[#5b737b] min-h-screen p-6 md:p-20 flex justify-center items-center">
  <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-10/12 space-x-0 md:space-x-8"> {/* Añadimos espacio entre columnas */}
    {/* Lado izquierdo: Design Medicine Shop */}
    <div
      className="w-full md:w-1/2 text-center ml-8 md:text-left"
      style={{
        maxWidth: '420px',
        backgroundColor: '#5b737b',
        borderRadius: '8px',
        padding: '20px',
      }}
    >
      <div>
        <h1 
          className="text-white text-[70px] font-medium leading-[72px] tracking-[1.5px] text-left" 
          style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
          Design
        </h1>
        <h1 
          className="text-white text-[70px] font-medium leading-[72px] tracking-[1.5px] text-left"
          style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
          Medicine
        </h1>
        <h1 
          className="text-white text-[70px] font-medium leading-[72px] tracking-[1.5px] text-left"
          style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
          Shop
        </h1>
        <p 
          className="text-white mt-4 text-left"
          style={{ fontFamily: 'Montserrat' }}>
          Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.
        </p>
      </div>

      <div className="mt-6 flex justify-center md:justify-start">
        <Link href="/ProductPage">
          <button className="bg-white text-[#5b737b] px-4 py-2 rounded mr-4">
            Shop Now
          </button>
        </Link>
        <Link href="/ProductPage">
          <button className="bg-[#5b737b] text-white px-4 py-2 rounded">
            Explore Products     ->
          </button>
        </Link>
      </div>
    </div>

    {/* Lado derecho: Cuadros pequeños apilados verticalmente y rectángulo grande al lado derecho */}
    <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center md:justify-start relative mt-8 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex flex-col justify-center items-center w-full md:w-auto space-y-4">
        <div className="w-[90%] md:w-[222px] h-[257px] bg-white p-4 flex flex-col justify-between"></div> {/* Ajuste del ancho en pantalla chica */}
        <div className="w-[90%] md:w-[222px] h-[257px] bg-white p-4 flex flex-col justify-between mt-4 md:mt-0"></div>
      </div>
      <div className="w-[90%] md:w-[379px] h-[530px] bg-white p-4 flex flex-col justify-end mt-4 md:ml-4">
  <div>
    <h1 className="text-[#5f827b] text-left" style={{ fontFamily: 'Montserrat', fontSize: '28px', fontWeight: 400, lineHeight: '34.13px', textAlign: 'left' }}>
      Relevant Product
    </h1>
    <p className="mt-2 text-[#5f827b] text-center md:text-left px-2 md:px-3">
      Descripción del producto, dimensiones, características, etc.
    </p>
  </div>

  {/* Botón colocado en la parte inferior */}
  <div className="mt-2">
    <Link href="/ProductPage">
      <button className="bg-[#004f44] text-white" style={{ width: '327.1px', height: '48.3px' }}>READ MORE</button>
    </Link>
        </div>
      </div>
    </div>
  </div>
</div>

{/*COMPONENTE FEATURED*/}
<div className="w-full bg-white p-6 md:p-32">
  <div className="flex justify-between items-center">
    <h1 className="text-[#004F44] font-montserrat font-normal text-[40px] leading-[48.76px] tracking-[0.5px]">
      FEATURED
    </h1>
    <Link href="/listProducts" className="text-[#5b737b] underline">
      View All
    </Link>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
    {Array.from({ length: 4 }, (_, index) => (
      <Link
        key={index}
        href={`/ProductPage?id=${index + 1}`}
        className="text-center bg-white p-4 rounded-lg"
      >
        {/* Imagen con tamaño especificado y sin borde redondeado */}
        <img
          src={`https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg`}
          alt={`Producto ${index + 1}`}
          className="w-[355px] h-[360px] object-cover cursor-pointer"
        />

        {/* Nombre del producto y precio alineados */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-[#004F44] text-left" style={{ width: '355px' }}> {/* Alineado al borde de la imagen */}
            Producto {index + 1}
          </p>
          <p className="text-[#5b737b] font-bold text-right">
            ${(29.99 + index * 10).toFixed(1)}
          </p>
        </div>

        {/* Variante y círculos de colores alineados */}
        <div className="flex justify-between items-center mt-2">
          <div className="text-left" style={{ width: '355px' }}> {/* Alineado al borde de la imagen */}
            <label className="text-[#9EA9A7]" htmlFor={`color${index + 1}`}>
              Variante:
            </label>
            <div className="flex space-x-2 mt-1">
              <div className="w-4 h-4 bg-red-500 rounded-full border"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full border"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full border"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full border"></div>
            </div>
          </div>

          {/* Botón Buy alineado al borde derecho de la imagen */}
          <button className="bg-[#004f44] text-white px-4 py-2 text-right" style={{ marginLeft: 'auto' }}>
            Buy
          </button>
        </div>
      </Link>
    ))}
  </div>
</div>





      {/* Sección LATEST PRODUCTS */}
      <div className="w-full bg-[#f2fdf3] p-6 rounded-lg">
        <CustomCarousel />
      </div>

      {/* BANNER */}
      <div className="w-full md:w-[1590px] h-[291px] bg-[#004F44] text-white p-6 md:p-16 text-center rounded-lg mt-8 mx-auto flex justify-center items-center">
  <h2 className="font-bold text-[32px] md:text-[64px] leading-[48px] md:leading-[96px] tracking-[0.05em] md:tracking-[0.22em] text-center" style={{ fontFamily: 'Poppins', fontWeight: 900 }}>
    BANNER/FLYER
  </h2>
</div>




      {/* Sección de ALL PRODUCTS */}
      <div className="w-full bg-white p-6 md:p-32">
  <div className="flex justify-between items-center">
  <h1 
  className="text-[#004F44]" 
  style={{ 
    fontFamily: 'Montserrat', 
    fontSize: '40px', 
    fontWeight: 400, 
    lineHeight: '48.76px', 
    letterSpacing: '0.5px', 
    textAlign: 'left' 
  }}
>
  ALL PRODUCTS
</h1>

    <Link href="/listProducts" className="text-[#5b737b] underline">
      View All
    </Link>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
    {Array.from({ length: 12 }, (_, index) => (
      <Link
        key={index}
        href={`/ProductPage?id=${index + 1}`}
        className="text-center bg-white p-4 rounded-lg"
      >
        {/* Imagen con tamaño especificado y sin borde redondeado */}
        <img
          src={`https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg`}
          alt={`Producto ${index + 1}`}
          className="w-[355px] h-[360px] object-cover cursor-pointer"
        />

        {/* Nombre del producto y precio alineados */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-[#004F44] text-left" style={{ width: '355px' }}> {/* Alineado al borde de la imagen */}
            Producto {index + 1}
          </p>
          <p className="text-[#5b737b] font-bold text-right">
            ${(29.99 + index * 10).toFixed(1)}
          </p>
        </div>

        {/* Variante y círculos de colores alineados */}
        <div className="flex justify-between items-center mt-2">
          <div className="text-left" style={{ width: '355px' }}> {/* Alineado al borde de la imagen */}
            <label className="text-[#9EA9A7]" htmlFor={`color${index + 1}`}>
              Variante:
            </label>
            <div className="flex space-x-2 mt-1">
              <div className="w-4 h-4 bg-red-500 rounded-full border"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full border"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full border"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full border"></div>
            </div>
          </div>

          {/* Botón Buy alineado al borde derecho de la imagen */}
          <button className="bg-[#004f44] text-white px-4 py-2 text-right" style={{ marginLeft: 'auto' }}>
            Buy
          </button>
        </div>
      </Link>
    ))}
  </div>
</div>

    </>
  );
};

export default Page;
