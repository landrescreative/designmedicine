"use client"; // Esto hace que el componente sea un Client Component

import React from 'react';
import Link from 'next/link'; // Utilizamos Link para la navegación entre páginas

const productImages = [
  'https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg',
  'https://m.media-amazon.com/images/I/A1aTrRY3W7L._AC_UF894,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/I/81d9kxH-RfL._AC_UL320_.jpg',
  // Resto de las imágenes...
];

const ListProductsPage: React.FC = () => {
  return (
    <>
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
    {Array.from({ length: 64 }, (_, index) => (
      <Link
        key={index}
        href={`/productPage?id=${index + 1}`}
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

export default ListProductsPage;
