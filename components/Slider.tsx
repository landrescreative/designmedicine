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
      id: 1,
      image: '/museos.jpg',
      date: t('soumaya.date') as string,
      title: t('slider.slides.1.title') as string,
      paragraph: t('slider.slides.1.paragraph') as string,
      url: '/soumaya'
    },
    {
      id: 2,
      image: '/moon01.jpg',
      date: t('mariposamonarca.date') as string,
      title: t('slider.slides.2.title') as string,
      paragraph: t('slider.slides.2.paragraph') as string,
      url: '/mariposamonarca'
    },
    {
      id: 3,
      date: t('tresmuseos.date') as string,
      image: '/MNA_2021_1.jpg',
      title: t('slider.slides.3.title') as string,
      paragraph: t('slider.slides.3.paragraph') as string,
      url: '/tresmuseos'
    },
    {
      id: 4,
      date: t('temazcalmuseo.date') as string,
      image: '/temazcal.jpg',
      title: t('temazcalmuseo.title') as string,
      paragraph: t('temazcalmuseo.paragraph') as string,
      url: '/temazcalmuseo'
    },
    {
      id: 5,
      date: t('xochimilcosite.tour.date') as string,
      image: '/xochimilco03.jpg',
      title: t('slider.slides.4.title') as string,
      paragraph: t('slider.slides.4.paragraph') as string,
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
      className="min-h-screen relative py-24 px-5 md:px-8 lg:px-10 flex flex-col justify-around items-center w-full"
      id="tours"
    >
      <h1 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
        {t('slider.2ndtitle')}
      </h1>
      <h1 className="text-base md:text-lg mb-12 text-center text-primary max-w-3xl">
        {t('slider.advice')}
      </h1>

      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          {slides.map((slide) => (
            <Link
              href={slide.url}
              key={slide.id}
              className="card-slider bg-white rounded-xl shadow-md w-full flex flex-col justify-between border-t-8 border-primary md:hover:scale-105 transition-all duration-300 min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover rounded-t-lg w-full h-[16rem] sm:h-[18rem] md:h-[20rem] lg:h-[22rem] shadow-lg"
              />
              <div className="px-5 sm:px-6 md:px-7 lg:px-8 py-5 sm:py-6 lg:py-7 flex-grow">
                <p className="text-white mb-3 sm:mb-4 bg-primary px-4 sm:px-5 py-1.5 rounded-2xl inline-block text-xs sm:text-sm lg:text-base">
                  {slide.date}
                </p>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-5">{slide.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{slide.paragraph}</p>
              </div>
              <span className="flex items-center justify-center bg-primary text-white p-4 sm:p-5 lg:p-6 w-full rounded-b-lg font-medium text-sm sm:text-base lg:text-lg">
                {t('slider.viewDetails')}
                <IoIosArrowForward
                  className="card-hover-effect transition-all duration-300 ml-2 w-6 h-6 sm:w-8 sm:h-8"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-10">
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
    </div>
  );
};

export default Slider;
