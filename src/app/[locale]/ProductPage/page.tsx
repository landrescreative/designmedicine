"use client"; // Esto hace que el componente sea un Client Component

import React, { useState } from 'react';

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
    <div className="relative w-full max-w-5xl mx-auto mt-0 mb-40">
      <h1 className="text-[#5b737b] text-3xl font-bold mb-10">MORE PRODUCTS</h1>
      <div className="flex overflow-hidden">
        {moreProductsImages.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${currentIndex + index + 1}`}
            className="w-[400px] h-[400px] object-cover rounded-lg mx-2"
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
  const [activeTab, setActiveTab] = useState('description'); // Controla la pestaña activa

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
      <div className="max-w-6xl mx-auto p-28 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna izquierda - Imagen grande y miniaturas */}
        <div>
          <img src={selectedImage} alt="Producto grande" className="w-full h-[500px] object-cover rounded-lg" />

          {/* Miniaturas debajo de la imagen */}
          <div className="flex mt-4 space-x-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Producto miniatura ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${selectedImage === image ? 'border-4 border-[#004f44]' : ''}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Columna derecha - Información del producto */}
        <div>
          {/* Nombre del producto */}
          <h1 className="text-4xl font-bold text-[#5b737b] mb-4">Nombre del Producto</h1>
          {/* Precio */}
          <p className="text-2xl font-semibold text-gray-600 mb-4">$49.99</p>

          {/* Choose a color */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Choose a color:</h2>
            <div className="flex space-x-4">
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

          {/* Choose a size */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Choose a size:</h2>
            <div className="flex space-x-4">
              {['Small', 'Medium', 'Large', 'Extra Large'].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-lg cursor-pointer ${selectedSize === size ? 'bg-[#004f44] text-white' : 'bg-white text-gray-600'}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Choose quantity */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Quantity:</h2>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="w-16 p-2 border rounded-lg"
            />
          </div>

          {/* Botón Add to Cart */}
          <button className="mt-4 bg-[#004f44] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003833]">
            Add to Cart
          </button>
        </div>

        {/* Sección de pestañas debajo de la información del producto */}
        <div className="col-span-2 mt-10">
          {/* Pestañas */}
          <div className="flex border-b border-gray-300">
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
          <div className="mt-6">
            {activeTab === 'description' && (
              <div>
                {/* Product Description */}
                <section className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Product Description</h2>
                  <p className="text-gray-700">
                    Este es un producto excelente que brinda múltiples beneficios a los usuarios. Fabricado con los mejores
                    materiales, este producto garantiza calidad y durabilidad.
                  </p>
                </section>

                {/* Benefits */}
                <section className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
                  <ul className="list-disc ml-6 text-gray-700">
                    <li>Beneficio 1: Aumenta la productividad.</li>
                    <li>Beneficio 2: Mejora la experiencia del usuario.</li>
                    <li>Beneficio 3: Durabilidad asegurada.</li>
                  </ul>
                </section>

                {/* Product Details */}
                <section className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Product Details</h2>
                  <p className="text-gray-700">
                    Dimensiones: 25x35x15 cm <br />
                    Peso: 1.5 kg <br />
                    Material: Aleación de aluminio
                  </p>
                </section>

                {/* More Details */}
                <section className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">More Details</h2>
                  <p className="text-gray-700">
                    Para más información sobre el uso y mantenimiento de este producto, por favor consulta el manual de usuario
                    o contáctanos para obtener más asistencia.
                  </p>
                </section>
              </div>
            )}

            {/* Contenido de la segunda pestaña (Reviews) */}
            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Customer Reviews</h2>
                <p className="text-gray-700">
                  Todavía no hay reseñas para este producto. ¡Sé el primero en dejar una reseña!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sección More Products con carrusel personalizado */}
      <CustomCarousel />
    </>
  );
};

export default ProductPage;
