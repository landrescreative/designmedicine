'use client';
import React, { useState } from 'react';

// Icons
import { IoIosArrowForward } from 'react-icons/io';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/1.jpg',
      title: 'MEXICO CITY TEMPLO MAYOR RUINS',
      paragraph:
        ' Mexico City is the capital of Mexico and is known for its Templo Mayor ruins, the baroque Catedral Metropolitana de México of the Spanish conquistadors and the Palacio Nacional, which houses historic murals by Diego Rivera. All of these are situated in and around the Plaza de la Constitución, the massive main square also known as the Zócalo.'
    },
    {
      id: 2,
      image: '/2.jpg',
      title: 'TEOTIHUACAN PYRAMIDS',
      paragraph:
        ' Teotihuacan is an ancient Mesoamerican city located 30 miles (50 km) northeast of modern-day Mexico City. The city, which was designated a UNESCO World Heritage site in 1987, was settled as early as 400 B.C. and became the most powerful and influential city in the region by 400 A.D.'
    },
    {
      id: 3,
      image: '/3.jpg',
      title: 'XOCHIMILCO',
      paragraph:
        ' Xochimilco is known for its extended series of canals — all that remains of the ancient Lake Xochimilco. Xochimilco has kept its ancient traditions, like the cultivation of flowers, which are sold around the city. In 1987, Xochimilco was declared a World Heritage site by UNESCO.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative py-24 flex justify-center items-center lg:w-11/12">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="card-slider bg-white rounded-xl shadow-md w-full flex flex-col justify-between gap-5 border-t-8 border-primary md:hover:scale-105 transition-all duration-300"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover rounded-t-lg w-full h-[20rem] rounded-3xl shadow-lg"
              />
              <div className="px-11 py-5">
                <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                <p className="text-gray-600">{slide.paragraph}</p>
              </div>
              <button className="flex items-center justify-center justify-self-end bg-primary text-white p-4  w-full rounded-b-lg ">
                VIEW DETAILS{' '}
                <IoIosArrowForward
                  className="card-hover-effect transition-all duration-300"
                  size={32}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
