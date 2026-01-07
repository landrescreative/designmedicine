import React from 'react';
import { FaInfoCircle, FaClipboardList, FaDollarSign } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

// Icons
import { FaRegClock } from 'react-icons/fa';
import { FaBus } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';
import { GiClothes, GiShirt, GiRunningShoe } from 'react-icons/gi';
import { FaSun } from 'react-icons/fa';
import { BsSunglasses, BsFillFileImageFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';

const InfoTemplo = () => {
  const t = useTranslations('xochimilcosite');
  return (
    <div className="flex justify-center items-center pb-12 w-full">
      <div className="flex flex-col lg:flex-row justify-start md:w-9/12">
        {/* First Section - WHAT TO EXPECT */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            {t('whattoexpect')}
          </h2>
          {t.raw('whattoexpectitems').map((item: string, index: number) => (
            <div key={index} className="grid grid-cols-6 grid-rows-1">
              <BsFillFileImageFill
                size={30}
                className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center"
              />
              <div className="col-start-2 col-end-6 self-center justify-self-start">
                <p className="text-gray-600">{item}</p>
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
            <GiRunningShoe
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('whattobring1')}</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <BsSunglasses
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('whattobring2')}</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaSun
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('whattobring3')}</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <GiShirt
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('whattobring4')}</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <GiClothes
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">{t('whattobring5')}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTemplo;
