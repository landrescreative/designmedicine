import Image from 'next/image';
import Hero from '../../../components/Hero';
import Separator from '../../../components/Separator';
import AboutKiiko from '../../../components/AboutKiiko';
import Benefits from '../../../components/Benefits';
import SeminarSection from '../../../components/SeminarSection';
import Slider from '../../../components/Slider';
import Testimonial from '../../../components/Testimonial';
import Register from '../../../components/Register';
import Footer from '../../../components/Footer';
import InfoSeminar from '../../../components/InfoSeminar';
import PaymentSection from '../../../components/PaymentSection';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <main className="flex justify-center items-center flex-col px-10 md:px-28 lg:px-30 overflow-x-hidden">
      <Hero />
      <Separator text={t('separators.1')} />
      {/* <Separator text="DISCOVER THE UNIQUE BENEFITS OF OUR SPECIALIZED SEMINAR" /> */}
      <SeminarSection />
      <Benefits />
      <Separator text={t('separators.2')} />
      <Slider
        slide1title={t('slider.slides.1.title')}
        slide2title={t('slider.slides.2.title')}
        slide3title={t('slider.slides.3.title')}
        slide1parag={t('slider.slides.1.paragraph')}
        slide2parag={t('slider.slides.2.paragraph')}
        slide3parag={t('slider.slides.3.paragraph')}
      />
      <Separator text={t('separators.3')} />
      <AboutKiiko
        abouttitle={t('aboutKiiko.title')}
        aboutdes={t('aboutKiiko.description')}
      />
      <Testimonial
        testimonial1={t('testimonial.paragraph1')}
        testimonial2={t('testimonial.paragraph2')}
        testimonial3={t('testimonial.paragraph3')}
      />
      {/* <Separator text="REGISTER NOW" /> */}
      {/* <InfoSeminar />
      <PaymentSection />
      <Register /> */}
    </main>
  );
}
