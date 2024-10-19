

import { useRouter } from 'next/router';
import React from 'react';

const productImages = [
  'https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg',
  'https://m.media-amazon.com/images/I/A1aTrRY3W7L._AC_UF894,1000_QL80_.jpg',
  // Agrega más imágenes aquí
];

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Obtén el ID de la URL

  const productImage = productImages[parseInt(id as string, 10)];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-[#5b737b] mb-4">Producto {id}</h1>
      <img src={productImage} alt={`Producto ${id}`} className="w-full h-[500px] object-cover rounded-lg" />
      <p className="text-2xl font-semibold text-gray-600 mb-4">Precio: ${29.99 + parseInt(id as string, 10) * 5}</p>
      <button className="bg-[#004f44] text-white px-6 py-3 rounded-lg font-bold">Add to Cart</button>
    </div>
  );
};

export default ProductPage;

