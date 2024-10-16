import React from 'react';
import Separator from '@/components/Separator';
import Header from '@/components/Header';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import InfoSeminar from '@/components/InfoSeminar';
import PaymentSection from '@/components/PaymentSection';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Register from '@/components/Register';

const Page = () => {
  const t = useTranslations('');
  return (
    <div className="flex justify-center items-center  flex-col overflow-x-hidden">
      <Header text="" />
      <div className="lg:w-3/4 lg:max-h-[700px] overflow-hidden p-5 h-full object-cover rounded-3xl">
        <Image
          src="/seminar_01.jpg"
          alt="seminar"
          width={1920}
          height={1080}
          className="rounded-3xl object-cover "
        />
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center w-11/12 mt-28">
        <div className="w-full ">
          <div className="flex flex-col gap-5 py-10 ">
            <h1 className="font-bold text-2xl uppercase text-primary">
              {t('seminar.title')}
            </h1>
            <p>{t('seminar.description')}</p>
            <h2 className="font-bold text-2xl uppercase text-primary">
              {t('seminar.subtitle')}
            </h2>
            <ul className="list-disc px-10">
              <li className="mb-2">{t('seminar.list.0')}</li>
              <li className="mb-2">{t('seminar.list.1')}</li>
              <li className="mb-2">{t('seminar.list.2')}</li>
              <li className="mb-2">{t('seminar.list.3')}</li>
            </ul>
            <h2 className="font-bold text-2xl uppercase text-primary">
              {t('seminar.subtitle2')}
            </h2>
            <ul className="list-disc px-10">
              <li className="mb-2 font-bold text-primary">
                {t('seminar.list2.0')}
              </li>
              <p>{t('seminar.list2.1')}</p>
              <li className="mb-2 font-bold text-primary">
                {t('seminar.list2.2')}
              </li>
              <p>{t('seminar.list2.3')}</p>
              <li className="mb-2 font-bold text-primary">
                {t('seminar.list2.4')}
              </li>
              <p>{t('seminar.list2.5')}</p>
              <li className="mb-2 font-bold text-primary">
                {t('seminar.list2.6')}
              </li>
              <p>{t('seminar.list2.7')}</p>
              <li className="mb-2 font-bold text-primary">
                {t('seminar.list2.8')}
              </li>
              <p>{t('seminar.list2.9')}</p>
            </ul>
            <h2 className="font-bold text-2xl text-primary">
              {t('seminar.thirdtitle')}
            </h2>
            <p>{t('seminar.2ndparagraph')}</p>
            <ul className="list-disc px-10">
              <li className="mb-2">{t('seminar.2ndlist.0')}</li>
              <li className="mb-2">{t('seminar.2ndlist.1')}</li>
              <li className="mb-2">{t('seminar.2ndlist.2')}</li>
              <li className="mb-2">{t('seminar.2ndlist.3')}</li>
            </ul>
            <h2 className="font-bold text-2xl text-primary">
              {t('seminar.thirdtitle')}
            </h2>
            <ul className="list-disc px-10">
              <li className=" font-bold text-primary">
                {t('seminar.3rdlisttitles.0')}
              </li>
              <p className="mb-5">{t('seminar.3rdlistparagraphs.0')}</p>
              <li className=" font-bold text-primary">
                {t('seminar.3rdlisttitles.1')}
              </li>
              <p className="mb-5">{t('seminar.3rdlistparagraphs.1')}</p>
              <li className=" font-bold text-primary">
                {t('seminar.3rdlisttitles.2')}
              </li>
              <p className="mb-5">{t('seminar.3rdlistparagraphs.2')}</p>
            </ul>
            <h2 className="font-bold text-2xl text-primary">
              {t('seminar.fivetitle')}
            </h2>
            <p>{t('seminar.5thparagraph')}</p>
            <h2 className="font-bold text-2xl text-primary">
              {t('seminar.sixtitle')}
            </h2>
            <p className="">{t('seminar.6thparagraph')}</p>
            <p>{t('seminar.7thparagraph')}</p>
          </div>
          <h1 id="register"></h1>
          <InfoSeminar />
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
