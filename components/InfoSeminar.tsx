import React from 'react';
import { FaInfoCircle, FaClipboardList, FaDollarSign } from 'react-icons/fa';

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
import { useTranslations } from 'next-intl';

const InfoSeminar = () => {
  const t = useTranslations('infoseminar');
  return (
    <div className="flex justify-center items-center pb-12 w-full">
      <div className="flex flex-col lg:flex-row justify-start w-11/12 xl:w-9/12">
        {/* First Section - GENERAL */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('title1')}
          </h2>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaUser
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('subtitle1')}</h3>
              <p className="text-gray-600">{t('description1')}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <BsFillFileImageFill
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('subtitle2')}</h3>
              <p className="text-gray-600">{t('description2')}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaLocationDot
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('subtitle3')}</h3>
              <p className="text-gray-600">{t('description3')}</p>
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Second Section - DESCRIPTION */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('title2')}
          </h2>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaRegClock
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('subtitle4')}</h3>
              <p className="text-gray-600">{t('description4')}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaBus
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('subtitle5')}</h3>
              <p className="text-gray-600">{t('description5')}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <AiFillDollarCircle
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('subtitle6')}</h3>
              <p className="text-gray-600">{t('description6')}</p>
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Third Section - PRICING */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('title3')}
          </h2>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <GiClothes
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('subtitle7')}</h3>
              <p className="text-gray-600">{t('description7')}</p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaHatCowboySide
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('subtitle8')}</h3>
              <p className="text-gray-600">{t('description8')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSeminar;
