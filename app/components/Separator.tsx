import Image from 'next/image';
import React from 'react';

interface SeparatorProps {
  text: string;
}

const Separator: React.FC<SeparatorProps> = ({ text }) => {
  return (
    <div className="flex overflow-y-hidden relative border-y-2 border-gray-400">
      <h2 className="text-3xl max-h-60 md:w-1/2 md:pl-10 py-10 flex justify-center items-center font-light text-center md:text-left text-[#79A17A]">
        {text}
      </h2>
      <div className="w-1/2 flex justify-center items-center absolute right-0 rotate-180 top-0 object-fit">
        <Image
          src="/patron.svg"
          alt="separator"
          width={50}
          height={50}
          className="h-full w-full opacity-50"
        />
      </div>
    </div>
  );
};

export default Separator;
