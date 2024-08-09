import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Hero = () => {
  return (
    <div className="relative min-h-screen	flex flex-col justify-between items-center pt-24 py-10">
      <div className="flex flex-col justify-center items-center py-10 gap-5">
        <div className="p-1">
          <h1 className="text-center text-white font-normal text-2xl">
            Discover the Secrets of Acupuncture with Kiiko Matsumoto
          </h1>
          <h1 className="text-center text-white font-light">
            Intensive Seminar and Unique Experiences in Mexico
          </h1>
        </div>
        <button className="bg-[#79A17A] hover:bg-[#5c805d] text-white p-3 w-1/3 rounded-xl ">
          Register Now
        </button>
      </div>
      <div className="flex flex-col text-white justify-center items-center">
        <span>View More</span>
        <IoIosArrowDown className="text-3xl text-[#5c805d]" />
      </div>
      <video
        autoPlay
        playsInline
        muted
        loop
        className="-z-10 w-full absolute top-0 left-0 h-full object-cover"
      >
        <source src="/video1.webm" type="video/webm" />
      </video>
      <div className="w-screen h-screen bg-black opacity-60 absolute top-0 right-0 -z-10 "></div>
    </div>
  );
};

export default Hero;
