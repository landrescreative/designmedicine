import React from 'react';
import Separator from '@/components/Separator';
import Header from '@/components/Header';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import InfoSeminar from '@/components/InfoSeminar';
import PaymentSection from '@/components/PaymentSection';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('');
  return (
    <div className="flex justify-center items-center flex-col overflow-x-hidden">
      <Header text="" />
      <div className="lg:w-3/4 p-5 h-full object-cover">
        <Image
          src="/seminar01.jpg"
          alt="seminar"
          width={1920}
          height={1080}
          className="rounded-3xl object-cover shadow-2xl"
        />
      </div>
      
      <div className="flex flex-col gap-5 py-10 w-5/6 md:w-4/6">
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
          <li className="mb-2">{t('seminar.list.4')}</li>
          <li className="mb-2">{t('seminar.list.5')}</li>
          <li className="mb-2">{t('seminar.list.6')}</li>
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
      </div>
      <h1 id="register"></h1>
      <InfoSeminar />
      <PaymentSection />
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
