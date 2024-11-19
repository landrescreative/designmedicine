import React from 'react';
import Separator from '@/components/Separator';
import Testimonial from '@/components/Testimonial';
import PaymentSection from '@/components/PaymentSection';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import InfoFaceReading from '@/components/InfoFaceReading';
import Link from 'next/link';
import Tarjetas from '@/components/Tarjetas';
import Formulario from '@/components/Formulario';
import InfoMerchant from '@/components/InfoMerchant';

const Page = () => {
  const t = useTranslations('');
  return (
    <div className="flex justify-center items-center  flex-col overflow-x-hidden ">
      <div className="w-full flex justify-center items-center flex-col py-10 mt-24 px-4 md:px-0">
        <h1 className="font-bold text-center text-3xl uppercase text-primary">
          {t('face-reading.title')}
        </h1>
        <h2 className=" text-lg text-slate-600">{t('face-reading.date')}</h2>
        <h2 className=" text-lg text-slate-600">{t('face-reading.time')}</h2>
        <h2 className=" text-lg text-slate-600">
          {t('face-reading.instructor')}
        </h2>
        <a
          href="mailto:info@designmedicine.org"
          className="text-primary text-lg underline text-center"
        >
          info@designmedicine.org
        </a>
      </div>
      <div className="lg:w-3/4  overflow-hidden p-5 h-full object-cover rounded-3xl px-4 md:px-0">
        <Image
          src="/3Y9P7962.jpg"
          alt="seminar"
          width={1920}
          height={1080}
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="flex justify-center flex-col lg:flex-row items-center lg:w-10/12 mt-28 px-4 md:px-0">
        <div className="w-full md:px-10">
          <div className="flex flex-col gap-5 py-10 ">
            <h1 className="font-bold text-2xl uppercase text-primary">
              {t('face-reading.seminartitle')}
            </h1>
            <p>{t('face-reading.paragraph')}</p>
            <p>{t('face-reading.paragraph2')}</p>
            <h2 className="font-bold text-2xl uppercase text-primary">
              {t('face-reading.subtitle')}
            </h2>

            <div className="flex gap-5 justify-center mb-10 flex-wrap">
              <div className="p-10 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all  flex-grow">
                <span className="font-bold text-secondary text-lg">
                  {t('face-reading.bullettitle1')}
                </span>
                <p>{t('face-reading.bullet1')}</p>
              </div>
              <div className="p-10 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all  flex-grow">
                <span className="font-bold text-secondary text-lg">
                  {t('face-reading.bullettitle2')}
                </span>
                <p>{t('face-reading.bullet2')}</p>
              </div>
              <div className="p-10 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all  flex-grow">
                <span className="font-bold text-secondary text-lg">
                  {t('face-reading.bullettitle3')}
                </span>
                <p>{t('face-reading.bullet3')}</p>
              </div>
            </div>
            <h2 className="font-bold text-2xl uppercase text-primary">
              {t('face-reading.subtitle2')}
            </h2>
            <ul className="list-disc px-10">
              <li className="mb-2">{t('face-reading.bullettitle4')}</li>
              <p className="mb-2">{t('face-reading.bullet4')}</p>
              <li className="mb-2">{t('face-reading.bullettitle5')}</li>
              <p className="mb-2">{t('face-reading.bullet5')}</p>
              <li className="mb-2">{t('face-reading.bullettitle6')}</li>
              <p className="mb-2">{t('face-reading.bullet6')}</p>
            </ul>
            <h2 className="font-bold text-2xl uppercase text-primary">
              {t('face-reading.subtitle4')}
            </h2>
            <ul className="list-disc px-10">
              <li className="mb-2 font-bold">
                {t('face-reading.bullettitle7')}
              </li>
              <p className="mb-2">{t('face-reading.bullet7')}</p>
              <li className="mb-2 font-bold">
                {t('face-reading.bulletittle8')}
              </li>
              <p className="mb-2">{t('face-reading.bullet8')}</p>
              <li className="mb-2 font-bold">
                {t('face-reading.bulletittle9')}
              </li>
              <p className="mb-2">{t('face-reading.bullet9')}</p>
              <li className="mb-2 font-bold">
                {t('face-reading.bulletittle10')}
              </li>
              <p className="mb-2">{t('face-reading.bullet10')}</p>
            </ul>
            <h2 className="font-bold text-2xl uppercase text-primary">
              {t('face-reading.subtitle3')}
            </h2>
            <p>{t('face-reading.description')}</p>
            <div className="w-full h-1 bg-slate-300"></div>
            <p>{t('face-reading.conclusion')}</p>
            <InfoFaceReading />
          </div>
          {/* <PaymentSection /> */}
        </div>
        <Tarjetas />
      </div>

      <PaymentSection buyButtonId="buy_btn_1QMzyiBceNIiOkbghs2IY2jW" />
      <Separator text="" />
      <div className="flex flex-col w-10/12 justify-center mb-10 gap-2">
        <h2 className="font-bold text-2xl uppercase text-primary mt-10">
          {t('face-reading.workshop2title')}
        </h2>
        <p>{t('face-reading.workshop2paragraph.0')}</p>
        <p>{t('face-reading.workshop2paragraph.1')}</p>
        <p>{t('face-reading.workshop2paragraph.2')}</p>
        <p>{t('face-reading.workshop2paragraph.3')}</p>
        <p>{t('face-reading.workshop2paragraph.4')}</p>
        <p>{t('face-reading.workshop2paragraph.5')}</p>
        <p>{t('face-reading.workshop2paragraph.6')}</p>
        <p>{t('face-reading.workshop2paragraph.7')}</p>
        <p>{t('face-reading.workshop2paragraph.8')}</p>
      </div>
      <InfoMerchant />
      <PaymentSection buyButtonId="buy_btn_1QKWmwBceNIiOkbgt8w5Nq36" />

      <div className="w-full justify-center items-center flex py-16 bg-secondary/10 min-h-screen">
        <Formulario />
      </div>
      <Separator text="" />
      <Testimonial />
    </div>
  );
};

export default Page;
