import React from 'react';
import { FaInfoCircle, FaClipboardList, FaDollarSign } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

// Icons
import { FaUser } from 'react-icons/fa';
import { BsFillFileImageFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';
import { FaBus } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';
import { GiClothes } from 'react-icons/gi';
import { FaHatCowboySide } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';
import { FaCamera } from 'react-icons/fa';

const InfoTemplo = () => {
  const t = useTranslations('xochimilcosite');
  return (
    <div className="flex justify-center items-center pb-12 w-full">
      <div className="flex flex-col lg:flex-row justify-start w-11/12 xl:w-9/12">
        {/* First Section - GENERAL */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('highlight')}
          </h2>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaUser
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('highlight1title')}</h3>
              <p className="text-gray-600">{t('highlight1paragraph')}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <BsFillFileImageFill
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('highlight2title')}</h3>
              <p className="text-gray-600">{t('highlight2paragraph')}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaLocationDot
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('highlight3title')}</h3>
              <p className="text-gray-600">{t('highlight3paragraph')}</p>
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Second Section - DESCRIPTION */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('tourdetails')}
          </h2>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaRegClock
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('tourdetails1title')}</h3>
              <p className="text-gray-600">{t('tourdetails1paragraph')}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaBus
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('tourdetails2title')}</h3>
              <p className="text-gray-600">{t('tourdetails2paragraph')}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <AiFillDollarCircle
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('tourdetails3title')}</h3>
              <p className="text-gray-600">{t('tourdetails3paragraph')}</p>
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Third Section - PRICING */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('whattobring')}
          </h2>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <GiClothes
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('whattobring1')}</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaHatCowboySide
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('whattobring2')}</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <IoIosWater
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('whattobring3')}</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaCamera
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('whattobring4')}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTemplo;
