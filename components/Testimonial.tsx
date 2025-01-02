'use client';
import Link from 'next/link'; // Importa el componente Link
import { useTranslations } from 'next-intl';
import React, { useState, useEffect } from 'react';

// Icons
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Testimonial: React.FC = () => {
  const t = useTranslations();
  const testimonials = [
    {
      date: t('xochimilcosite.tour.date') as string,
      title: t('testimonials.0.title'),
      subtitle: t('testimonials.0.subtitle'),
      buttonText: t('testimonials.0.buttonText'),
      imageUrl: '/xochimilco03.jpg',
      link: '/xochimilco' // Ruta asociada
    },
    {
      date: t('teotihuacansite.date') as string,
      title: t('testimonials.1.title'),
      subtitle: t('testimonials.1.subtitle'),
      buttonText: t('testimonials.1.buttonText'),
      imageUrl: '/1540469443356.jpg',
      link: '/teotihuacan' // Ruta asociada
    },
    {
      date: t('luchas.event.date') as string,
      title: t('testimonials.2.title'),
      subtitle: t('testimonials.2.subtitle'),
      buttonText: t('testimonials.2.buttonText'),
      imageUrl: '/Lucha-libre-México-CMLL.webp',
      link: '/luchas' // Ruta asociada
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeTestimonial = (index: number) => {
    if (animating || index === currentIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimating(false);
    }, 500); // Duración de la animación
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeTestimonial((currentIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-100 -z-40 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500"
          style={{
            backgroundImage: `url(${currentTestimonial.imageUrl})`,
            transform: animating ? 'scale(1.05)' : 'scale(1)' // Zoom-in durante el cambio
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>{' '}
          {/* Overlay oscuro */}
        </div>
      </div>

      {/* Content */}
      <div
        className={`z-10 transition-opacity duration-500 ${
          animating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-xl  text-white mb-4 mx-16">
          {currentTestimonial.date}
        </h1>
        <h1 className="text-4xl font-bold text-white mb-4 mx-16">
          {currentTestimonial.title}
        </h1>
        <p className="text-xl text-white mb-6 mx-16 ">
          {currentTestimonial.subtitle}
        </p>
        <Link href={currentTestimonial.link}>
          <button className="px-6 py-3 btn transition">
            {currentTestimonial.buttonText}
          </button>
        </Link>
      </div>

      {/* Navigation */}
      <button
        onClick={() =>
          changeTestimonial(
            currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
          )
        }
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white z-20"
      >
        <IoIosArrowBack size={40} />
      </button>
      <button
        onClick={() =>
          changeTestimonial((currentIndex + 1) % testimonials.length)
        }
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white z-20"
      >
        <IoIosArrowForward size={40} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 flex space-x-2 z-20">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => changeTestimonial(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            } transition-colors duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
