'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Icons
import { IoIosArrowForward } from 'react-icons/io';

type SliderProps = {
  slide1title: string;
  slide2title: string;
  slide3title: string;
  slide1parag: string;
  slide2parag: string;
  slide3parag: string;
};

const Slider: React.FC<SliderProps> = ({
  slide1title,
  slide2title,
  slide3title,
  slide1parag,
  slide2parag,
  slide3parag
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/1.jpg',
      title: slide1title,
      paragraph: slide1parag,
      url: '/templomayor'
    },
    {
      id: 2,
      image: '/2.jpg',
      title: slide2title,
      paragraph: slide2parag,
      url: '/teotihuacan'
    },
    {
      id: 3,
      image: '/3.jpg',
      title: slide3title,
      paragraph: slide3parag,
      url: '/xochimilco'
    },
    {
      id: 4,
      image: '/Lucha-libre-México-CMLL.webp',
      title: 'Luchas',
      paragraph:
        'Disfruta de una experiencia única en las luchas de la ciudad de México',
      url: '/xochimilco'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Cambia de diapositiva cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div
      className="min-h-screen relative py-24 flex justify-center items-center w-full xl:w-9/12"
      id="tours"
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          {slides.map((slide) => (
            <Link
              href={slide.url}
              key={slide.id}
              className="card-slider bg-white rounded-xl shadow-md w-full flex flex-col justify-between gap-5 border-t-8 border-primary md:hover:scale-105 transition-all duration-300"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover rounded-t-lg w-full h-[20rem] shadow-lg"
              />
              <div className="px-11 py-5">
                <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                <p className="text-gray-600">{slide.paragraph}</p>
              </div>
              <span className="flex items-center justify-center justify-self-end bg-primary text-white p-4 w-full rounded-b-lg">
                VIEW DETAILS
                <IoIosArrowForward
                  className="card-hover-effect transition-all duration-300"
                  size={32}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
