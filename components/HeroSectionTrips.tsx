// components/HeroSectionTrips.tsx
import React from 'react';

interface HeroSectionTripsProps {
  title: string;
  paragraph: string;
  img: string;
}

const HeroSectionTrips: React.FC<HeroSectionTripsProps> = ({
  title,
  paragraph,
  img
}) => {
  return (
    <div className="relative w-full min-h-[75vh] text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Contenedor con efecto de corte de eclipse */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-b-[1%] overflow-hidden"
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        {/* Título grande y destacado */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-2xl mb-6 max-w-lg text-gray-200 drop-shadow-md">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default HeroSectionTrips;
