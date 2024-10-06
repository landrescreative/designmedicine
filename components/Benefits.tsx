import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Benefits: React.FC = () => {
  const t = useTranslations();
  return (
    <section className="min-h-screen md:mx-20 flex flex-col gap-5 py-10 justify-center items-center w-10/12">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary ">
        {t('benefits.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
        <div className="bg-white p-8 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (7).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              {t('benefits.list.0')}
            </h3>
            <p className="text-gray-500 text-center">
              {t('benefits.description.0')}
            </p>
          </div>
        </div>
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (6).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              {t('benefits.list.1')}
            </h3>
            <p className="text-gray-500 text-center">
              {t('benefits.description.1')}
            </p>
          </div>
        </div>
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (5).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              {t('benefits.list.2')}
            </h3>
            <p className="text-gray-500 text-center">
              {t('benefits.description.2')}
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center text-primary ">
        {t('benefits.title2')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (4).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              {t('benefits.list.3')}
            </h3>
            <p className="text-gray-500 text-center">
              {t('benefits.description.3')}
            </p>
          </div>
        </div>
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (3).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              {t('benefits.list.4')}
            </h3>
            <p className="text-gray-500 text-center">
              {t('benefits.description.4')}
            </p>
          </div>
        </div>
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (2).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              {t('benefits.list.5')}
            </h3>
            <p className="text-gray-500 text-center">
              {t('benefits.description.5')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
