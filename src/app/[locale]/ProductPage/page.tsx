"use client"; // Esto asegura que el componente se ejecute en el cliente

import React, { useState } from 'react';
import { FaShareAlt, FaStar, FaTruck } from 'react-icons/fa';

// Carrusel de "More Products"
const moreProductsImages = [
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
      prevIndex === 0 ? moreProductsImages.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= moreProductsImages.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-0 mb-40 px-4">
      <h1 className="text-[#5b737b] text-2xl md:text-3xl font-bold mb-10 text-center">MORE PRODUCTS</h1>
      <div className="flex overflow-hidden justify-center">
        {moreProductsImages.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${currentIndex + index + 1}`}
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover rounded-lg mx-2"
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

// Página de Producto
const ProductPage: React.FC = () => {
  const images = [
    'https://symposium.pacificcollege.edu/wp-content/uploads/2021/02/Kiiko-02-1.jpg',
    'https://www.qiology.com.au/wp-content/uploads/2019/05/Kiiko-866x1024.jpg',
    'https://altaivida.net/wp-content/uploads/2017/01/kiiko-matsumoto-altaivida-e1483914916971-300x273.jpeg',
    'https://m.media-amazon.com/images/I/81dB8Q2iqqL._AC_CR0%2C0%2C0%2C0_SY315_.jpg',
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
          <img src={selectedImage} alt="Producto grande" className="w-full h-[300px] md:h-[500px] object-cover rounded-lg" />

          {/* Miniaturas debajo de la imagen */}
          <div className="flex mt-4 space-x-2 justify-center md:justify-start">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Producto miniatura ${index + 1}`}
                className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg cursor-pointer ${selectedImage === image ? 'border-4 border-[#004f44]' : ''}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Columna derecha - Información del producto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Nombre del producto y descripción corta */}
          <div className="flex justify-between items-center mb-4 w-full max-w-lg">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#5b737b]">Nombre del Producto</h1>
              <p className="text-sm text-gray-500">Product Description</p>
            </div>
            <FaShareAlt className="text-[#5b737b] cursor-pointer" size={24} />
          </div>

          {/* Precio y calificación */}
          <div className="flex justify-between items-center mb-4 w-full max-w-lg">
            <div>
              <p className="text-sm text-gray-500 line-through">$59.99</p>
              <p className="text-2xl font-semibold text-gray-600">$49.99</p>
            </div>
            <div className="flex items-center">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-300" />
              <span className="ml-2 text-gray-600">4.8 (50 Reviews)</span>
            </div>
          </div>

          {/* Choose a color */}
          <div className="mb-4 w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-2">Choose a color:</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              {['Red', 'Blue', 'Green', 'Yellow'].map((color) => (
                <div
                  key={color}
                  className={`w-10 h-10 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-[#004f44]' : 'border-gray-300'}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>
          </div>

          {/* Choose a size con radio buttons */}
          <div className="mb-4 w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-2">Choose a size:</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              {['Small', 'Medium', 'Large', 'Extra Large'].map((size) => (
                <label key={size} className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => handleSizeChange(size)}
                    className="form-radio text-[#004f44]"
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Choose quantity */}
          <div className="mb-4 w-full max-w-lg flex justify-center md:justify-start items-center space-x-4">
            <div className="flex items-center space-x-2">
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
            <button className="bg-[#004f44] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#003833]">
              Add to Cart
            </button>
          </div>

          {/* Free delivery y link de código postal */}
          <div className="p-8 bg-white border rounded-lg mb-4 w-full max-w-lg">
            <div className="flex items-center space-x-2">
              <FaTruck className="text-[#004f44]" size={24} />
              <span className="text-sm font-bold text-gray-600">Free Delivery</span>
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
            className={`px-4 py-2 font-bold ${activeTab === 'description' ? 'border-b-4 border-[#004f44] text-[#004f44]' : 'text-gray-600'}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 font-bold ${activeTab === 'reviews' ? 'border-b-4 border-[#004f44] text-[#004f44]' : 'text-gray-600'}`}
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
                <h2 className="text-2xl font-semibold mb-2">Product Description</h2>
                <p className="text-gray-700">
                  Este es un producto excelente que brinda múltiples beneficios a los usuarios. Fabricado con los mejores
                  materiales, este producto garantiza calidad y durabilidad.
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
                  Para más información sobre el uso y mantenimiento de este producto, por favor consulta el manual de usuario
                  o contáctanos para obtener más asistencia.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Customer Reviews</h2>
              <p className="text-gray-700">Todavía no hay reseñas para este producto. ¡Sé el primero en dejar una reseña!</p>
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
