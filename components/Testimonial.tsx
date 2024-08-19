'use client';
import React, { useState, useEffect } from 'react';

// Icons
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

type TestimonialProps = {
  testimonial1: string;
  testimonial2: string;
  testimonial3: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  testimonial1,
  testimonial2,
  testimonial3
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: testimonial1
    },
    {
      id: 2,
      text: testimonial2
    },
    {
      id: 3,
      text: testimonial3
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Cambia de diapositiva cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center align-center text-center overflow-hidden w-screen">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full flex-shrink-0 flex items-center justify-center p-8 w-1/2"
            >
              <p className="text-2xl font-medium text-white italic">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevTestimonial}
        className="hidden absolute top-1/2 transform -translate-y-1/2 left-[10%] text-white px-4 py-2 rounded-full text-center"
      >
        <IoIosArrowBack size={40} />
      </button>
      <button
        onClick={nextTestimonial}
        className="hidden absolute top-1/2 transform -translate-y-1/2 right-[10%] text-white px-4 py-2 rounded-full text-center"
      >
        <IoIosArrowForward size={40} />
      </button>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-100 -z-40 object-cover">
        <img
          src="/BU1I2082.jpg"
          alt="testimonial"
          className="h-[100vh] w-[100vw] object-cover blur-sm grayscale opacity-30"
        />
      </div>
    </div>
  );
};

export default Testimonial;
