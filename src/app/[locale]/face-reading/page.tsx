import React from 'react';
import Separator from '@/components/Separator';
import Testimonial from '@/components/Testimonial';
import PaymentSection from '@/components/PaymentSection';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import InfoFaceReading from '@/components/InfoFaceReading';

const Page = () => {
  const t = useTranslations('');
  return (
    <div className="flex justify-center items-center  flex-col overflow-x-hidden">
      <div className="w-full flex justify-center items-center flex-col py-10 mt-24">
        <h1 className="font-bold text-3xl uppercase text-primary">
          {t('face-reading.title')}
        </h1>
        <h2 className=" text-lg">{t('face-reading.date')}</h2>
        <h2 className=" text-lg">{t('face-reading.time')}</h2>
        <h2 className=" text-lg">{t('face-reading.cost')}</h2>
        <h2 className=" text-lg">{t('face-reading.instructor')}</h2>
      </div>
      <div className="lg:w-3/4 lg:max-h-[700px] overflow-hidden p-5 h-full object-cover rounded-3xl">
        <Image
          src="/seminar_01.jpg"
          alt="seminar"
          width={1920}
          height={1080}
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center w-10/12 mt-28">
        <div className="w-full ">
          <div className="flex flex-col gap-5 py-10 ">
            <h1 className="font-bold text-2xl uppercase text-primary">
              {t('face-reading.seminartitle')}
            </h1>
            <p>{t('face-reading.paragraph')}</p>
            <p>{t('face-reading.paragraph2')}</p>
            <h2 className="font-bold text-2xl uppercase text-primary">
              {t('face-reading.subtitle')}
            </h2>
            <ul className="list-disc px-10">
              <li className="font-bold">{t('face-reading.bullettitle1')}</li>
              <p className="mb-2">{t('face-reading.bullet1')}</p>
              <li className="font-bold">{t('face-reading.bullettitle2')}</li>
              <p className="mb-2">{t('face-reading.bullet2')}</p>
              <li className="font-bold">{t('face-reading.bullettitle3')}</li>
              <p className="mb-2">{t('face-reading.bullet3')}</p>
            </ul>
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
          </div>
          <InfoFaceReading />
          <PaymentSection />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/3 self-start gap-10 ">
          <div className="card-example bg-secondary/20 shadow-2xl shadow-black/10 rounded-3xl min-h-80   p-10">
            <h1>
              Another way to register is by filling out the form below and
              submit it.
            </h1>
          </div>
          <div className="card-example bg-secondary/20 shadow-2xl shadow-black/10 rounded-3xl min-h-80   p-10">
            <h1>
              Another way to register is by filling out the form below and
              submit it.
            </h1>
          </div>
        </div>
      </div>
      {/* <Register /> */}
      <Separator text={t('seminar.separator')} />
      <Testimonial
        testimonial1={t('testimonial.paragraph1')}
        testimonial2={t('testimonial.paragraph2')}
        testimonial3={t('testimonial.paragraph3')}
      />
    </div>
  );
};

export default Page;
