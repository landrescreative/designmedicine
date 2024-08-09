import Image from 'next/image';
import Hero from './components/Hero';
import Separator from './components/Separator';
import AboutKiiko from './components/AboutKiiko';
import Benefits from './components/Benefits';
import SeminarSection from './components/SeminarSection';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Separator
        text="KIIKO MATSUMOTO´S MEXICO SHOULDER TO SHOULDER INTENSIVE SEMINAR
FEBRUARY 14-17TH  2025"
      />
      <AboutKiiko />
      <Separator text="DISCOVER THE UNIQUE BENEFITS OF OUR SPECIALIZED SEMINAR" />
      <Benefits />
      <SeminarSection />
    </main>
  );
}
