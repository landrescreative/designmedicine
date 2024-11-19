import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Hero = () => {
  const t = useTranslations();
  return (
    <div className="relative w-screen h-screen flex flex-col justify-between items-center pt-24 px-10 py-10">
      <div className="flex flex-col justify-center items-center pt-16 gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-center text-white  text-3xl shadow mb-4 font-serif">
            {t('hero.title')}
          </h1>
          <h1 className="text-center text-white uppercase">
            {t('hero.subtitle')}
          </h1>
          <h1 className="text-center text-white">{t('seminarSection.date')}</h1>
          <a
            href="mailto:info@designmedicine.org"
            className="text-white text-lg underline text-center"
          >
            info@designmedicine.org
          </a>
        </div>
        <Link href="/seminar" className="btn">
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
