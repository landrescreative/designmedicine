import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import { FaLocationDot } from 'react-icons/fa6';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  const t = useTranslations('seminar');
  return (
    <div className="flex flex-col justify-center items-center py-16 w-2/3 mt-16">
      <h2 className=" text-2xl md:text-4xl flex justify-center items-center text-center uppercase font-light text-primary">
        {t('title')}
      </h2>
      <h2 className="text-xl md:text-2xl font-bold text-center mt-2 text-slate-500">
        {t('date')}
      </h2>
      <a
        className="flex  justify-center items-center gap-2"
        href="https://maps.app.goo.gl/PfATkGYK8ySsVZpj7"
      >
        <p className="text-primary text-center underline ">
          {t('description9')}
        </p>
        <FaLocationDot className="text-primary text-center" />
      </a>
      <a
        href="mailto:info@designmedicine.org"
        className="text-primary text-lg underline text-center"
      >
        info@designmedicine.org
      </a>
      <div className="w-full md:w-1/2 flex justify-center items-center absolute left-0 top-[3rem] md:top-[-5rem] object-fit overflow-hidden">
        <Image
          src="/patron.svg"
          alt="separator"
          width={50}
          height={50}
          className="h-full w-full opacity-20 -z-10"
        />
      </div>
    </div>
  );
};

export default Header;
