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
      <div className="w-full bg-white p-32">
        <div className="flex justify-between items-center">
          <h1 className="text-[#5b737b] text-3xl font-bold">ALL PRODUCTS</h1>
          <Link href="/ProductPage" className="text-[#5b737b] underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
          {Array.from({ length: 64 }, (_, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md">
              <Link href={`/productPage?id=${index + 1}`}>
                <img
                  src={productImages[index % productImages.length]}
                  alt={`Producto ${index + 1}`}
                  className="w-full h-48 object-cover rounded cursor-pointer"
                />
              </Link>
              <p className="text-[#5b737b] mt-4">Producto {index + 1} - ${29.99 + index * 5}</p>
              <label className="text-[#5b737b] mt-2" htmlFor={`color${index + 1}`}>Variante:</label>
              <select id={`color${index + 1}`} className="mt-1 mb-2">
                <option value="color1">Color 1</option>
                <option value="color2">Color 2</option>
                <option value="color3">Color 3</option>
              </select>
              <button className="bg-[#004f44] text-white px-4 py-2 mt-2 rounded">Buy</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListProductsPage;
