'use client';
import React, { useState } from 'react';

// Icons
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "This service is amazing! I've never seen anything like it."
    },
    {
      id: 2,
      text: 'The team was incredibly helpful and the results were fantastic.'
    },
    {
      id: 3,
      text: 'I would recommend this to anyone looking for top-notch service.'
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

  const automaticSlide = () => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  // if (window.innerWidth < 768) {
  //   automaticSlide();
  // }

  return (
    <div className="relative h-screen flex flex-col justify-center align-center  text-center overflow-hidden w-screen ">
      <div className="overflow-hidden  ">
        <div
          className="flex transition-transform duration-500 ease-in-out "
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
        className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-[10%] text-white px-4 py-2 rounded-full text-center "
      >
        <IoIosArrowBack size={40} />
      </button>
      <button
        onClick={nextTestimonial}
        className="hidden md:block absolute top-1/2 transform -translate-y-1/2 right-[10%] text-white px-4 py-2 rounded-full text-center "
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
