// components/InfoSoumaya.tsx
import React from 'react';
import { useTranslations } from 'next-intl';
import { FaRegClock, FaBus, FaSun } from 'react-icons/fa';
import { BsFillFileImageFill, BsSunglasses } from 'react-icons/bs';
import { AiFillDollarCircle } from 'react-icons/ai';
import { GiClothes, GiShirt } from 'react-icons/gi';

const InfoSoumaya = () => {
  const t = useTranslations('soumaya');

  return (
    <div className="flex justify-center items-center pb-12 w-full">
      <div className="flex flex-col lg:flex-row justify-start md:w-10/12">
        {/* First Section - HIGHLIGHTS */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('whattoexpect')}
          </h2>

          {t.raw('highlight').map((highlight: string, index: number) => (
            <div key={index} className="grid grid-cols-6 grid-rows-1">
              <BsFillFileImageFill
                size={30}
                className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center"
              />
              <div className="col-start-2 col-end-6 self-center justify-self-start">
                <p className="text-gray-600">{highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Second Section - TOUR DETAILS */}
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
          {t('whatToBring.hatTitle') && (
            <div className="grid grid-cols-6 grid-rows-1">
              <BsSunglasses
                size={30}
                className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center"
              />
              <div className="col-start-2 col-end-6 self-center justify-self-start">
                <h3 className="text-lg font-medium">
                  {t('whatToBring.hatTitle')}
                </h3>
              </div>
            </div>
          )}
          {t('whatToBring.waterTitle') && (
            <div className="grid grid-cols-6 grid-rows-1">
              <FaSun
                size={30}
                className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center"
              />
              <div className="col-start-2 col-end-6 self-center justify-self-start">
                <h3 className="text-lg font-medium">
                  {t('whatToBring.waterTitle')}
                </h3>
              </div>
            </div>
          )}
          {t('whatToBring.cameraTitle') && (
            <div className="grid grid-cols-6 grid-rows-1">
              <GiShirt
                size={30}
                className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center"
              />
              <div className="col-start-2 col-end-6 self-center justify-self-start">
                <h3 className="text-lg font-medium">
                  {t('whatToBring.cameraTitle')}
                </h3>
              </div>
            </div>
          )}
          {t('whatToBring.extraTitle') && (
            <div className="grid grid-cols-6 grid-rows-1">
              <GiClothes
                size={30}
                className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center"
              />
              <div className="col-start-2 col-end-6 self-center justify-self-start">
                <h3 className="text-lg font-medium">
                  {t('whatToBring.extraTitle')}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoSoumaya;

