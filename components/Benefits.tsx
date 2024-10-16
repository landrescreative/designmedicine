import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Benefits: React.FC = () => {
  const t = useTranslations();
  return (
    <div className="w-full flex justify-center bg-[#F2EAE4]">
      <section className="md:m-20 flex flex-col gap-5 py-10 justify-center items-center w-4/6">
        <h2 className="text-2xl  uppercase tracking-widest mb-12 text-center text-[#757263] ">
          {t('benefits.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
          <div className="bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-110 duration-300 transition-all">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                {t('benefits.list.0')}
              </h3>
              <p className="text-gray-500 text-center">
                {t('benefits.description.0')}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-110 duration-300 transition-all">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                {t('benefits.list.1')}
              </h3>
              <p className="text-gray-500 text-center">
                {t('benefits.description.1')}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-110 duration-300 transition-all">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                {t('benefits.list.2')}
              </h3>
              <p className="text-gray-500 text-center">
                {t('benefits.description.2')}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-110 duration-300 transition-all">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                {t('benefits.list.3')}
              </h3>
              <p className="text-gray-500 text-center">
                {t('benefits.description.3')}
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl uppercase tracking-widest  my-12 text-center text-[#757263] ">
          {t('benefits.title2')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-110 duration-300 transition-all">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                {t('benefits.list.4')}
              </h3>
              <p className="text-gray-500 text-center">
                {t('benefits.description.4')}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-110 duration-300 transition-all">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                {t('benefits.list.5')}
              </h3>
              <p className="text-gray-500 text-center">
                {t('benefits.description.5')}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-110 duration-300 transition-all">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                {t('benefits.list.6')}
              </h3>
              <p className="text-gray-500 text-center">
                {t('benefits.description.6')}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-110 duration-300 transition-all">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                {t('benefits.list.7')}
              </h3>
              <p className="text-gray-500 text-center">
                {t('benefits.description.7')}
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-110 duration-300 transition-all">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                {t('benefits.list.8')}
              </h3>
              <p className="text-gray-500 text-center">
                {t('benefits.description.8')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
