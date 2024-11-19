'use client';
import { useEffect, useState } from 'react';
import Separator from '@/components/Separator';
import Header from '@/components/Header';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import InfoSeminar from '@/components/InfoSeminar';
import PaymentSection from '@/components/PaymentSection';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Formulario from '@/components/Formulario';
import Tarjetas from '@/components/Tarjetas';
import StickyBanner from '@/components/StickyBanner';

const Page = () => {
  const t = useTranslations('');

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center  flex-col overflow-x-hidden">
      <StickyBanner />
      <Header text="" />
      <div className="lg:w-3/4 lg:max-h-[700px] overflow-hidden p-5 h-full object-cover rounded-3xl">
        <Image
          src="/seminar_03.jpg"
          alt="seminar"
          width={1920}
          height={1080}
          className="rounded-3xl object-cover "
        />
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center w-full px-5 md:px-0 lg:w-10/12 mt-28">
        <div className="w-full md:px-10">
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

            <div className="flex gap-5 justify-center my-10 flex-wrap">
              <div className="p-10 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all  flex-grow">
                <span className="font-bold text-secondary text-lg">
                  {t('seminar.list2.0')}
                </span>
                <p>{t('seminar.list2.1')}</p>
              </div>
              <div className="p-10 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all  flex-grow">
                <span className="font-bold text-secondary text-lg">
                  {t('seminar.list2.2')}
                </span>
                <p>{t('seminar.list2.3')}</p>
              </div>
              <div className="p-10 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all  flex-grow">
                <span className="font-bold text-secondary text-lg">
                  {t('seminar.list2.4')}
                </span>
                <p>{t('seminar.list2.5')}</p>
              </div>
              <div className="p-10 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all  flex-grow">
                <span className="font-bold text-secondary text-lg">
                  {t('seminar.list2.6')}
                </span>
                <p>{t('seminar.list2.7')}</p>
              </div>
              <div className="p-10 flex-1 flex flex-col justify-center items-center bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all  flex-grow">
                <span className="font-bold text-secondary text-lg">
                  {t('seminar.list2.8')}
                </span>
                <p>{t('seminar.list2.9')}</p>
              </div>
            </div>
            <h2 className="font-bold text-2xl text-primary">
              ABOUT KIIKO MATSUMOTO
            </h2>
            <p>{t('seminar.2ndparagraph')}</p>
            <div className="flex gap-5 justify-center my-10 flex-wrap">
              <span className="p-10 flex-1 bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all text-lg flex-grow">
                {t('seminar.2ndlist.0')}
              </span>
              <span className="p-10 flex-1 bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all text-lg flex-grow">
                {t('seminar.2ndlist.1')}
              </span>
              <span className="p-10 flex-1 bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all text-lg flex-grow">
                {t('seminar.2ndlist.2')}
              </span>
              <span className="p-10 flex-1 bg-secondary/20 rounded-tl-2xl rounded-br-2xl text-center text-slate-800 font-serif md:hover:scale-110 duration-300 transition-all text-lg flex-grow">
                {t('seminar.2ndlist.3')}
              </span>
            </div>
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
            <p>{t('seminar.newinfo.0')}</p>
            <p>{t('seminar.newinfo.1')}</p>
            <p>{t('seminar.newinfo.2')}</p>
            <p>{t('seminar.newinfo.3')}</p>
            <Link href="/hotels">
              <span className="text-primary font-bold text-lg cursor-pointer underline">
                {t('seminar.link')}
              </span>
            </Link>
          </div>

          {/* <PaymentSection /> */}
          {/* <Register /> */}
        </div>
        <Tarjetas />
      </div>
      <InfoSeminar />
      <p className="text-center text-lg my-10 opacity-70">
        *includes transportation, breakfast and lunch (with vegan options)
      </p>
      {/* <PaymentOptions /> */}
      <PaymentSection buyButtonId="buy_btn_1QKVsEBceNIiOkbgdYH6VsLn" />
      <div className="w-full justify-center items-center flex py-16 bg-secondary/10 min-h-screen">
        <Formulario />
      </div>
      {isMobile && <Tarjetas />}
      <Separator text={t('seminar.separator')} />
      <Testimonial />
    </div>
  );
};

export default Page;
