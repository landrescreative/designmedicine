'use client'; // Esto asegura que el componente se ejecute en el cliente

import React, { useState } from 'react';
import { FaSave, FaShareAlt, FaStar, FaTruck } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa6';

// Carrusel de "More Products"
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
    <div className="relative w-full mx-1 mt-8 mb-40 p-6 md:p-32">
      <h1 className="text-[#004F44] font-montserrat font-normal text-[40px]  leading-[48.76px] tracking-[0.5px]">
        MORE PRODUCTS
      </h1>
      <div className="flex items-center gap-4 mt-10 ">
        {' '}
        {/* Alineación de las imágenes y el texto "more-->" */}
        <div className="flex overflow-hidden gap-4">
          {' '}
          {/* Añadimos un gap entre imágenes */}
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen ${currentIndex + index + 1}`}
              className="w-[550px] h-[466.78px] object-cover opacity-100"
              style={{
                top: '2018.11px',
                left: '170.4px',
                opacity: '1'
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

// Página de Producto
const ProductPage: React.FC = () => {
  const images = [
    'https://symposium.pacificcollege.edu/wp-content/uploads/2021/02/Kiiko-02-1.jpg',
    'https://www.qiology.com.au/wp-content/uploads/2019/05/Kiiko-866x1024.jpg',
    'https://altaivida.net/wp-content/uploads/2017/01/kiiko-matsumoto-altaivida-e1483914916971-300x273.jpeg',
    'https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg'
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState('Red');
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <>
      <div className="max-w-6xl mx-auto mt-40 px-4 md:px-20 py-12 flex flex-col md:grid md:grid-cols-2 gap-8">
        {/* Columna izquierda - Imagen grande y miniaturas */}
        <div className="flex flex-col items-center">
          <img
            src={selectedImage}
            alt="Producto grande"
            className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
          />

          {/* Miniaturas debajo de la imagen */}
          <div className="flex mt-4 space-x-2 justify-center md:justify-start">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Producto miniatura ${index + 1}`}
                className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer ${
                  selectedImage === image ? 'border-4 border-[#004f44]' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Columna derecha - Información del producto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          {/* Nombre del producto y descripción corta */}
          <div className="flex justify-between items-center mb-4 w-full max-w-lg border-b border-[#E4E4E4] pb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#000000]">
                Product
              </h1>
              <p className="text-sm text-gray-500">Product Description</p>
            </div>
            {/* Iconos de guardado y compartir */}
            <div className="flex space-x-2 justify-end">
              <div
                className="bg-[#EDF0F8] p-2 rounded-xl inline-flex items-center justify-center"
                style={{ width: '40px', height: '40px' }}
              >
                <FaBookmark
                  className="text-[#5b737b] cursor-pointer"
                  size={24}
                />
              </div>
              <div
                className="bg-[#EDF0F8] p-2 rounded-xl inline-flex items-center justify-center"
                style={{ width: '40px', height: '40px' }}
              >
                <FaShareAlt
                  className="text-[#5b737b] cursor-pointer"
                  size={24}
                />
              </div>
            </div>
          </div>

          {/* Precio y calificación */}
          <div className="flex justify-between items-center mb-4 w-full max-w-lg border-b border-[#E4E4E4] pb-4">
            <div>
              <p className="text-2xl font-semibold text-gray-600">$49.99</p>
              <p className="text-sm text-gray-500 line-through">$59.99</p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Óvalo para calificación */}
              <div
                className="flex items-end bg-[#FBF3EA] p-1 rounded-3xl"
                style={{ width: '60px' }}
              >
                {' '}
                {/* Ancho fijo */}
                <span className="text-[#e0c8a2]" style={{ fontSize: '18px' }}>
                  ☆
                </span>
                <span className="ml-1 text-gray-600 text-sm">4.8</span>
              </div>

              {/* Óvalo para reseñas */}
              <div
                className="flex items-center bg-[#EDF0F8] p-1.5 rounded-full"
                style={{ width: '130px' }}
              >
                {' '}
                {/* Ancho fijo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#5b737b]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14l4 4z"
                  />
                </svg>
                <span className="ml-1 text-gray-600 text-sm">(50 Reviews)</span>
              </div>
            </div>
          </div>

          {/* Choose a color */}
          <div className="mb-4 w-full max-w-lg border-b border-[#E4E4E4] pb-4">
            <h2 className="text-xl font-semibold mb-2">Choose a color:</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              {['Red', 'Blue', 'Green', 'Yellow'].map((color) => (
                <div
                  key={color}
                  className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
                    selectedColor === color
                      ? 'border-[#004f44]'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>
          </div>

          {/* Choose a size con radio buttons  Choose quantity */}
          <div className="mb-4 w-full max-w-lg border-b border-[#E4E4E4] pb-4">
            <h2 className="text-xl font-semibold mb-2">Choose a size:</h2>
            <div className="flex justify-center md:justify-start space-x-2">
              {' '}
              {/* Espacio reducido entre óvalos */}
              {['Small', 'Medium', 'Large', 'Extra Large', 'XXL'].map(
                (size) => (
                  <div
                    key={size}
                    className="bg-[#EDF0F8] rounded-full px-3 py-0.5" // Aún más delgado
                  >
                    <label className="inline-flex items-center space-x-1">
                      {' '}
                      {/* Espacio reducido */}
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={() => handleSizeChange(size)}
                        className="form-radio text-[#004f44]"
                      />
                      <span className="text-xs">{size}</span>{' '}
                      {/* Tamaño de texto más pequeño */}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Choose quantity */}

          {/* Choose quantity with oval background only for the counter */}
          <div className="mb-4 w-full max-w-lg flex justify-center md:justify-start items-center space-x-4">
            <div className="bg-[#F3F3F3] rounded-full p-3 inline-flex items-center space-x-2">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-2 py-1 bg-gray-200 rounded-md"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                min="1"
                onChange={handleQuantityChange}
                className="w-12 text-center border border-gray-300 rounded-md"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded-md"
              >
                +
              </button>
            </div>

            <button
              className="bg-[#5B747B] text-white font-bold hover:bg-[#003833] rounded-3xl"
              style={{ width: '250px', height: '59px' }} // Ajuste del tamaño
            >
              Add to Cart
            </button>
          </div>

          {/* Free delivery y link de código postal */}
          <div className="mt-auto p-8 bg-white border rounded-lg mb-4 w-full max-w-lg">
            <div className="flex items-center space-x-2">
              <FaTruck className="text-[#004f44]" size={24} />
              <span className="text-sm font-bold text-gray-600">
                Free Delivery
              </span>
            </div>
            <p className="text-sm text-[#004f44] underline cursor-pointer mt-2">
              Enter your postal code for delivery availability
            </p>
          </div>
        </div>
      </div>

      {/* Sección de pestañas debajo de la información del producto */}
      <div className="col-span-2 mt-10 justify-center flex flex-col items-center md:items-center">
        <div className="flex border-b border-gray-300 w-full max-w-5xl">
          <button
            className={`px-4 py-2 font-bold ${
              activeTab === 'description'
                ? 'border-b-4 border-[#004f44] text-[#004f44]'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 font-bold ${
              activeTab === 'reviews'
                ? 'border-b-4 border-[#004f44] text-[#004f44]'
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>

        {/* Contenido de las pestañas */}
        <div className="mt-6 max-w-3xl">
          {activeTab === 'description' && (
            <div className="text-center md:text-left">
              <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Product Description
                </h2>
                <p className="text-gray-700">
                  Este es un producto excelente que brinda múltiples beneficios
                  a los usuarios. Fabricado con los mejores materiales, este
                  producto garantiza calidad y durabilidad.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>Beneficio 1: Aumenta la productividad.</li>
                  <li>Beneficio 2: Mejora la experiencia del usuario.</li>
                  <li>Beneficio 3: Durabilidad asegurada.</li>
                </ul>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Product Details</h2>
                <p className="text-gray-700">
                  Dimensiones: 25x35x15 cm <br />
                  Peso: 1.5 kg <br />
                  Material: Aleación de aluminio
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">More Details</h2>
                <p className="text-gray-700">
                  Para más información sobre el uso y mantenimiento de este
                  producto, por favor consulta el manual de usuario o
                  contáctanos para obtener más asistencia.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Customer Reviews</h2>
              <p className="text-gray-700">
                Todavía no hay reseñas para este producto. ¡Sé el primero en
                dejar una reseña!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Sección More Products con carrusel personalizado */}
      <CustomCarousel />
    </>
  );
};

export default ProductPage;
