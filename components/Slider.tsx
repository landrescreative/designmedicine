'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Icons
import { IoIosArrowForward } from 'react-icons/io';

interface SliderProps {
  // Define any props here if needed
}

const Slider: React.FC<SliderProps> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations('');

  const slides = [
    {
      id: 2,
      image: '/viaja-en-globo-por-las-piramides-de-teotihuacan.webp',
      title: t('slider.slides.2.title') as string,
      paragraph: t('slider.slides.2.paragraph') as string,
      url: '/teotihuacan'
    },
    {
      id: 3,
      image: '/3.jpg',
      title: t('slider.slides.3.title') as string,
      paragraph: t('slider.slides.3.paragraph') as string,
      url: '/xochimilco'
    },
    {
      id: 4,
      image: '/Lucha-libre-México-CMLL.webp',
      title: t('luchas.event.title') as string,
      paragraph: t('luchas.event.subtitle2') as string,
      url: '/luchas'
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
      className="min-h-screen relative py-24 px-3 flex flex-col justify-around items-center w-full lg:w-10/12"
      id="tours"
    >
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold text-center text-primary uppercase">
          {t('slider.title')}
        </h2>
        <a
          href="mailto:info@designmedicine.org"
          className="text-primary text-lg underline text-center"
        >
          info@designmedicine.org
        </a>
      </div>

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
