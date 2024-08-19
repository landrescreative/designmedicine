import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SeminarSection: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen md:flex-row py-10 px-10 md:px-24 gap-10 "
      id="viewmore"
    >
      <div className="md:w-1/4">
        <video
          className="w-full rounded shadow-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/seminar01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" md:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 text-black">
        <h3 className="text-center md:text-left font-bold w-3/4 py-1 px-5 rounded-full bg-[#ffdbdb]">
          FEBRUARY 14-17TH  2025
        </h3>
        <h2 className="text-2xl font-bold text-center md:text-left text-primary ">
          KIIKO MATSUMOTO 3 DAY INTENSIVE  SHOULDER TO SHOULDER:
        </h2>
        <p className="mb-4 text-center md:text-left">
          She shares this knowledge with her patients in her clinic and with
          students around the world in her seminars. Kiiko's passion for sharing
          her research makes her a popular and sought after teacher. Her
          students find her seminars to be practical, fun and dynamic. Now ,for
          the first time we have the amazing opportunity to be taught by her
          shoulder to shoulder, while treating patients along her side.
        </p>
        <Link
          href="/seminar"
          className="bg-primary hover:bg-[#c74d4d] hover:scale-110 text-white p-2 px-5 rounded-xl mt-3 transition-all duration-300 shadow-xl"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
};

export default SeminarSection;
