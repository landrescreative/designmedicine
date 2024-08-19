import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations();
  return (
    <div className="relative w-screen h-screen	flex flex-col justify-between items-center pt-24 px-10 py-10">
      <div className="flex flex-col justify-center items-center py-16 gap-5">
        <div className="">
          <h1 className="text-center text-white font-normal text-3xl shadow">
            {t('hero.title')}
          </h1>
          <h1 className="text-center text-white font-light shadow">
            {t('hero.subtitle')}
          </h1>
        </div>
        <Link
          href="/seminar"
          className="bg-primary hover:bg-[#c74d4d] hover:scale-110 text-white py-2 px-5  rounded-xl shadow-xl transition-all duration-300 "
        >
          {t('hero.cta')}
        </Link>
      </div>
      <Link
        href="#viewmore"
        className="flex flex-col text-white justify-center items-center"
      >
        <span>{t('hero.cta2')}</span>
        <IoIosArrowDown className="text-3xl text-primary" />
      </Link>
      <video
        autoPlay
        playsInline
        muted
        loop
        className=" absolute top-0 left-0 w-full h-full -z-40 object-cover"
      >
        <source src="/test.webm" type="video/webm" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-40 object-cover"></div>
    </div>
  );
};

export default Hero;
