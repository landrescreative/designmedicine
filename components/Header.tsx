import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

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
