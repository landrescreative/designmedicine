'use client';
import { url } from 'inspector';
import Link from 'next/link';
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
        ' Mexico City is the capital of Mexico and is known for its Templo Mayor ruins, the baroque Catedral Metropolitana de México of the Spanish conquistadors and the Palacio Nacional.',
      url: '/templomayor'
    },
    {
      id: 2,
      image: '/2.jpg',
      title: 'TEOTIHUACAN PYRAMIDS',
      paragraph:
        ' Teotihuacan is an ancient Mesoamerican city located 30 miles (50 km) northeast of modern-day Mexico City. ',
      url: '/teotihuacan'
    },
    {
      id: 3,
      image: '/3.jpg',
      title: 'XOCHIMILCO',
      paragraph:
        ' Xochimilco is known for its extended series of canals — all that remains of the ancient Lake Xochimilco. ',
      url: '/xochimilco'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div
      className="relative py-24 flex justify-center items-center w-full xl:w-9/12 "
      id="tours"
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="card-slider bg-white rounded-xl shadow-md w-full flex flex-col justify-between gap-5 border-t-8 border-primary md:hover:scale-105 transition-all duration-300"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover rounded-t-lg w-full h-[20rem]  shadow-lg"
              />
              <div className="px-11 py-5">
                <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                <p className="text-gray-600">{slide.paragraph}</p>
              </div>
              <Link
                href={slide.url}
                className="flex items-center justify-center justify-self-end bg-primary text-white p-4  w-full rounded-b-lg "
              >
                VIEW DETAILS{' '}
                <IoIosArrowForward
                  className="card-hover-effect transition-all duration-300"
                  size={32}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
