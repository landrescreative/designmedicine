import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const SeminarSection: React.FC = () => {
  const t = useTranslations();
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center w-screen md:flex-row py-10 px-10 md:px-24 gap-10  "
      id="viewmore"
    >
      <div className="lg:w-1/4">
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
      <div className=" lg:w-1/2 flex flex-col justify-center items-center md:items-start gap-4 text-black">
        <h3 className="text-center md:text-left font-bold w-3/4 py-1 px-5 rounded-full text-white bg-primary">
          {t('seminarSection.date')}
        </h3>
        <h2 className="text-2xl font-bold text-center md:text-left text-primary ">
          {t('seminarSection.title')}
        </h2>
        <p className="mb-4 text-center md:text-left text-gray-700">
          {t('seminarSection.paragraph')}
        </p>
        <Link href="/seminar" className="btn shadow-primary/30">
          {t('seminarSection.cta')}
        </Link>
      </div>
    </div>
  );
};

export default SeminarSection;
