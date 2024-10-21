'use client'; // Esto asegura que el componente se ejecute en el cliente

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useState } from 'react';

// Carrusel personalizado (CustomCarousel)
const images = [
  'https://symposium.pacificcollege.edu/wp-content/uploads/2021/02/Kiiko-02-1.jpg',
  'https://www.qiology.com.au/wp-content/uploads/2019/05/Kiiko-866x1024.jpg',
  'https://altaivida.net/wp-content/uploads/2017/01/kiiko-matsumoto-altaivida-e1483914916971-300x273.jpeg',
  'https://m.media-amazon.com/images/I/A1aTrRY3W7L._AC_UF894,1000_QL80_.jpg',
  'https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg',
  'https://www.easterncurrents.ca/wp-content/uploads/2020/01/B5760.jpg'
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
    <div className="relative w-full max-w-5xl mx-auto mt-8 mb-40">
      <h1 className="text-[#5b737b] text-3xl font-bold mb-10">
        LATEST PRODUCTS
      </h1>
      <div className="flex overflow-hidden">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${currentIndex + index + 1}`}
            className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover rounded-lg mx-2"
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
};

// Página principal (Page)
const Page: React.FC = () => {
  const router = useRouter(); // Usamos el hook useRouter para la navegación

  // Función para redirigir a /listProducts
  const handleShopNowClick = () => {
    router.push('/listProducts'); // Redirige a la página de productos
  };

  // Función para redirigir a /productPage
  const handleExploreProductsClick = () => {
    router.push('/productPage'); // Redirige a la página productPage
  };

  // Función para redirigir al hacer clic en una imagen
  const handleProductClick = (index: number) => {
    router.push(`/productPage?id=${index + 1}`); // Redirige a la página del producto con un id
  };

  // Definimos las opciones de color
  const colorOptions = ['#f00', '#0f0', '#00f']; // Colores de ejemplo para las variantes

  return (
    <>
      {/* Sección de Design Medicine Shop con fondo verde */}
      <div className="bg-[#5b737b] min-h-screen p-6 md:p-20 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-10/12">
          {/* Lado izquierdo: Design Medicine Shop */}
          <div
            className="w-full md:w-1/2 text-center md:text-left"
            style={{
              maxWidth: '420px',
              backgroundColor: '#5b737b',
              borderRadius: '8px',
              padding: '20px'
            }}
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Design
            </h1>
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Medicine
            </h1>
            <h1 className="text-white text-4xl md:text-6xl font-bold">Shop</h1>
            <p className="text-white mt-4">
              Our environment, the world in which we live and work, is a mirror
              of our attitudes and expectations.
            </p>
            <div className="mt-6 flex justify-center md:justify-start">
              <button
                className="bg-white text-[#5b737b] px-4 py-2 rounded mr-4"
                onClick={handleShopNowClick} // Aquí manejamos la redirección a /listProducts
              >
                Shop Now
              </button>
              <button
                className="bg-[#5b737b] text-white px-4 py-2 rounded"
                onClick={handleExploreProductsClick} // Aquí manejamos la redirección a /productPage
              >
                Explore Products
              </button>
            </div>
          </div>

          {/* Lado derecho: Cuadros pequeños apilados verticalmente y rectángulo grande al lado derecho */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center md:justify-start relative mt-8 md:mt-0">
            <div className="flex flex-col justify-center items-center space-y-4">
              <div className="w-[150px] h-[150px] md:w-[230px] md:h-[230px] bg-white p-4 flex flex-col justify-between rounded-lg"></div>
              <div className="w-[150px] h-[150px] md:w-[230px] md:h-[230px] bg-white p-4 flex flex-col justify-between rounded-lg"></div>
            </div>
            <div className="w-[250px] h-[350px] md:w-[380px] md:h-[475px] bg-white p-4 flex flex-col justify-between rounded-lg mt-4 md:ml-4">
              <div>
                <h1 className="text-xl md:text-3xl font-bold text-[#5f827b] text-center md:text-left">
                  Relevant Product
                </h1>
                <p className="mt-2 text-[#5f827b] text-center md:text-left px-2 md:px-3">
                  Descripción del producto, dimensiones, características, etc.
                </p>
              </div>
              <div className="mt-4">
                <button
                  className="bg-[#004f44] text-white px-10 py-2 w-full md:w-80"
                  onClick={handleExploreProductsClick} // Aquí manejamos la redirección a /productPage
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ajuste del espacio entre las secciones */}
      <div className="mt-8"></div>

      {/* Sección Featured separada con fondo blanco */}
      <div className="w-full bg-white p-6 md:p-32">
        <div className="flex justify-between items-center">
          <h1 className="text-[#5b737b] text-3xl font-bold">Featured</h1>
          <a href="/listProducts" className="text-[#5b737b] underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
          {Array.from({ length: 4 }, (_, index) => (
            <Link
              href={'/ProductPage'}
              className="text-center bg-white p-4 rounded-lg shadow-md"
            >
              {/* Imagen aleatoria */}
              <img
                src={`https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg`}
                alt={`Producto ${index + 1}`}
                className="w-full h-48 object-cover rounded cursor-pointer"
              />

              {/* Nombre del producto y precio */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-[#5b737b]">Producto {index + 1}</p>
                <p className="text-[#5b737b] font-bold">
                  ${(29.99 + index * 10).toFixed(2)}
                </p>
              </div>

              {/* Variante y círculos de colores */}
              <div className="flex justify-between items-center mt-2">
                <div>
                  <label
                    className="text-sm text-[#5b737b]"
                    htmlFor={`color${index + 1}`}
                  >
                    Variante:
                  </label>
                  <div className="flex space-x-2 mt-1">
                    <div className="w-4 h-4 rounded-full bg-red-500 border"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500 border"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500 border"></div>
                  </div>
                </div>

                {/* Botón Buy */}
                <button className="bg-[#004f44] text-white px-4 py-2 rounded">
                  Buy
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Sección LASTEST PRODUCTS */}
      <div className="w-full bg-[#f2fdf3] p-6 rounded-lg">
        <CustomCarousel />
      </div>

      {/* BANNER */}
      <div className="w-[90%] md:w-[90%] bg-[#004F44] text-white p-6 md:p-16 text-center rounded-lg mt-8 mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">BANNER/FLYER</h2>
      </div>

      {/* Sección ALL PRODUCTS */}
      <div className="w-full bg-white p-6 md:p-32">
        <div className="flex justify-between items-center">
          <h1 className="text-[#5b737b] text-3xl font-bold">ALL PRODUCTS</h1>
          <a href="/listProducts" className="text-[#5b737b] underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
          {Array.from({ length: 12 }, (_, index) => (
            <div
              key={index}
              className="text-center bg-white p-4 rounded-lg shadow-md"
              onClick={() => handleProductClick(index)} // Redirección al hacer clic en la imagen
            >
              {/* Imagen aleatoria */}
              <img
                src={`https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg`}
                alt={`Producto ${index + 1}`}
                className="w-full h-48 object-cover rounded cursor-pointer"
              />

              {/* Nombre del producto y precio */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-[#5b737b]">Producto {index + 1}</p>
                <p className="text-[#5b737b] font-bold">
                  ${(29.99 + index * 10).toFixed(2)}
                </p>
              </div>

              {/* Variante y círculos de colores */}
              <div className="flex justify-between items-center mt-2">
                <div>
                  <label
                    className="text-sm text-[#5b737b]"
                    htmlFor={`color${index + 1}`}
                  >
                    Variante:
                  </label>
                  <div className="flex space-x-2 mt-1">
                    <div className="w-4 h-4 rounded-full bg-red-500 border"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 border"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500 border"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500 border"></div>
                  </div>
                </div>

                {/* Botón Buy */}
                <button className="bg-[#004f44] text-white px-4 py-2 rounded">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
