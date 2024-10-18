import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Page: React.FC = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Ocultar flechas
  };

  return (
    <>
      {/* Sección de Design Medicine Shop con fondo verde */}
      <div className="bg-[#5b737b] min-h-screen p-60">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Lado izquierdo */}
          <div className="md:w-1/2 ml-4" style={{ width: '420px', height: '408px', backgroundColor: '#5b737b', borderRadius: '8px', padding: '20px' }}>
            <h1 className="text-white text-6xl font-bold">Design</h1>
            <h1 className="text-white text-6xl font-bold">Medicine</h1>
            <h1 className="text-white text-6xl font-bold">Shop</h1>
            <p className="text-white mt-4">
              Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.
            </p>
            <div className="mt-6">
              <button className="bg-white text-[#5b737b] px-4 py-2 rounded mr-4">Shop Now</button>
              <button className="bg-white text-[#5b737b] px-4 py-2 rounded">Explore Products</button>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="md:w-1/2 flex flex-col justify-center items-center relative mt-8 md:mt-0">
            <div className="flex items-center">
              <div className="flex flex-col justify-center items-center space-y-4">
                <div className="w-[230px] h-[230px] bg-white ml-4 p-4 flex flex-col justify-between"></div>
                <div className="w-[230px] h-[230px] bg-white ml-4 p-4 flex flex-col justify-between"></div>
              </div>
              <div className="w-[380px] h-[475px] bg-white ml-4 p-4 flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-bold ml-3 mt-72 text-[#5f827b]">Relevant Product</h1>
                  <p className="mt-2 text-[#5f827b] ml-3">
                    Descripción del producto, dimensiones, características, etc.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="bg-[#004f44] text-white ml-3 px-4 py-2 rounded w-80">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ajuste del espacio entre las secciones */}
      <div className="mt-8"></div> {/* Ajustado a mt-8 para menos espacio */}

      {/* Sección Featured separada con fondo blanco */}
      <div className="w-full bg-white p-32">
        <div className="flex justify-between items-center">
          <h1 className="text-[#5b737b] text-3xl font-bold">Featured</h1>
          <a href="#" className="text-[#5b737b] underline">View All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md">
              <img src={`producto${index + 1}.jpg`} alt={`Producto ${index + 1}`} className="w-full h-48 object-cover rounded" />
              <p className="text-[#5b737b] mt-4">Producto {index + 1} - ${29.99 + index * 10}</p>
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

      {/* Sección Latest Products con carrusel */}
      

       
    </>
  );
};

export default Page;
