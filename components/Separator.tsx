import Image from 'next/image';
import React from 'react';

interface SeparatorProps {
  text: string;
}

const Separator: React.FC<SeparatorProps> = ({ text }) => {
  return (
    <div className="flex w-screen overflow-y-hidden relative border-y-2 border-gray-300 justify-center md:justify-end py-10 px-2 overflow-hidden">
      <h2 className="text-3xl md:w-1/2 md:pr-10 flex justify-end items-center  text-center md:text-right text-primary uppercase font-bold">
        {text}
      </h2>
      <div className=" absolute w-full md:w-1/2 flex h-full md:h-auto  justify-center items-center left-0 scale-150 md:scale-100 top-[1rem] md:top-[-5rem] object-fit  rotate-180">
        <Image
          src="/patron.svg"
          alt="separator"
          width={50}
          height={50}
          className="h-full w-full opacity-20 md:opacity-50"
        />
      </div>
    </div>
  );
};

export default Separator;
