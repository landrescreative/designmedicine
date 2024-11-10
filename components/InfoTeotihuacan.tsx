// components/InfoTeotihuacan.js
import React from 'react';
import { useTranslations } from 'next-intl';
import { FaRegClock, FaBus, FaCamera, FaHatCowboySide } from 'react-icons/fa';
import { BsFillFileImageFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { AiFillDollarCircle } from 'react-icons/ai';
import { GiClothes } from 'react-icons/gi';
import { IoIosWater } from 'react-icons/io';

const InfoTeotihuacan = () => {
  const t = useTranslations('teotihuacansite');

  return (
    <div className="flex justify-center items-center pb-12 w-full">
      <div className="flex flex-col lg:flex-row justify-start md:w-10/12">
        {/* First Section - GENERAL */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('highlights.title')}
          </h2>

          <div className="grid grid-cols-6 grid-rows-1">
            <BsFillFileImageFill
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center"
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start">
              <h3 className="text-lg font-medium">
                {t('highlights.viewsTitle')}
              </h3>
              <p className="text-gray-600">
                {t('highlights.viewsDescription')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1">
            <FaLocationDot
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center"
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start">
              <h3 className="text-lg font-medium">
                {t('highlights.locationTitle')}
              </h3>
              <p className="text-gray-600">
                {t('highlights.locationDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Second Section - DESCRIPTION */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('tourDetails.title')}
          </h2>
          <div className="grid grid-cols-6 grid-rows-1">
            <FaRegClock
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center"
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start">
              <h3 className="text-lg font-medium">
                {t('tourDetails.durationTitle')}
              </h3>
              <p className="text-gray-600">
                {t('tourDetails.durationDescription')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1">
            <FaBus
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center"
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start">
              <h3 className="text-lg font-medium">
                {t('tourDetails.transportTitle')}
              </h3>
              <p className="text-gray-600">
                {t('tourDetails.transportDescription')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1">
            <AiFillDollarCircle
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center"
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start">
              <h3 className="text-lg font-medium">
                {t('tourDetails.priceTitle')}
              </h3>
              <p className="text-gray-600">
                {t('tourDetails.priceDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Third Section - WHAT TO BRING */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('whatToBring.title')}
          </h2>
          <div className="grid grid-cols-6 grid-rows-1">
            <GiClothes
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center"
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start">
              <h3 className="text-lg font-medium">
                {t('whatToBring.clothingTitle')}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1">
            <FaHatCowboySide
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center"
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start">
              <h3 className="text-lg font-medium">
                {t('whatToBring.hatTitle')}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1">
            <IoIosWater
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center"
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start">
              <h3 className="text-lg font-medium">
                {t('whatToBring.waterTitle')}
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1">
            <FaCamera
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center"
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start">
              <h3 className="text-lg font-medium">
                {t('whatToBring.cameraTitle')}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTeotihuacan;
