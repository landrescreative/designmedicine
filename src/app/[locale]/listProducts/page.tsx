"use client"; // Esto hace que el componente sea un Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Utilizamos useRouter para navegar

const productImages = [
  'https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg',
  'https://m.media-amazon.com/images/I/A1aTrRY3W7L._AC_UF894,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/I/81d9kxH-RfL._AC_UL320_.jpg',
  'https://m.media-amazon.com/images/I/81WCNt7W-OL._AC_SY879_.jpg',
  'https://m.media-amazon.com/images/I/71pPbKsN6SL._AC_SX679_.jpg',
  'https://m.media-amazon.com/images/I/61IBBVJvSDL._AC_UL640_QL65_.jpg',
  'https://m.media-amazon.com/images/I/71lUzGsSwtL._AC_SY450_.jpg',
  'https://m.media-amazon.com/images/I/81Stbpw1lRL._AC_SY450_.jpg',
  'https://m.media-amazon.com/images/I/51o5RmQtroL._AC_SY450_.jpg',
  'https://m.media-amazon.com/images/I/71eGbhWPEBL._AC_SY450_.jpg',
  'https://m.media-amazon.com/images/I/61dUOK9eziL._AC_SX679_.jpg',
  'https://m.media-amazon.com/images/I/81fqMYx+Z9L._AC_UL640_QL65_.jpg',
  'https://m.media-amazon.com/images/I/91ASxDm9MDL._AC_UL640_QL65_.jpg',
  'https://m.media-amazon.com/images/I/51z6oKwdyJL._AC_SY450_.jpg',
  'https://m.media-amazon.com/images/I/71UGkJVoEcL._AC_SY450_.jpg',
  'https://m.media-amazon.com/images/I/61J4pxlc99L._AC_SY450_.jpg',
  'https://m.media-amazon.com/images/I/61WXVpZyY7L._AC_SY450_.jpg',
];

const ListProductsPage: React.FC = () => {
  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/productPage`); // Redirige siempre a la página estática de producto
  };

  return (
    <>
      <div className="w-full bg-white p-32">
        <div className="flex justify-between items-center">
          <h1 className="text-[#5b737b] text-3xl font-bold">ALL PRODUCTS</h1>
          <a href="/ProductPage" className="text-[#5b737b] underline">View All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
          {Array.from({ length: 64 }, (_, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md">
              <img
                src={productImages[index % productImages.length]}
                alt={`Producto ${index + 1}`}
                className="w-full h-48 object-cover rounded cursor-pointer"
                onClick={() => handleProductClick(index)} // Cuando se haga clic en la imagen
              />
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
