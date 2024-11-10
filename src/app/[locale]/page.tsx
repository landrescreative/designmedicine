import Hero from '../../../components/Hero';
import Separator from '../../../components/Separator';
import AboutKiiko from '../../../components/AboutKiiko';
import Benefits from '../../../components/Benefits';
import SeminarSection from '../../../components/SeminarSection';
import Slider from '../../../components/Slider';
import Testimonial from '../../../components/Testimonial';
import { useTranslations } from 'next-intl';
import StickyBanner from '@/components/StickyBanner';

export default function Home() {
  const t = useTranslations();
  return (
    <main className="flex justify-center items-center flex-col overflow-x-hidden">
      <StickyBanner />
      <Hero />
      <Separator text={t('separators.1')} />
      {/* <Separator text="DISCOVER THE UNIQUE BENEFITS OF OUR SPECIALIZED SEMINAR" /> */}
      <SeminarSection />
      <Benefits />
      <Separator text={t('separators.2')} />
      <Slider />
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
