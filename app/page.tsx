import Image from 'next/image';
import Hero from '../components/Hero';
import Separator from '../components/Separator';
import AboutKiiko from '../components/AboutKiiko';
import Benefits from '../components/Benefits';
import SeminarSection from '../components/SeminarSection';
import Slider from '../components/Slider';
import Testimonial from '../components/Testimonial';
import Register from '../components/Register';
import Footer from '../components/Footer';
import InfoSeminar from '../components/InfoSeminar';
import PaymentSection from '../components/PaymentSection';

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col px-10 md:px-28 lg:px-30 overflow-x-hidden">
      <Hero />
      <Separator
        text="KIIKO MATSUMOTO´S MEXICO SHOULDER TO SHOULDER INTENSIVE SEMINAR
FEBRUARY 14-17TH  2025"
      />
      {/* <Separator text="DISCOVER THE UNIQUE BENEFITS OF OUR SPECIALIZED SEMINAR" /> */}
      <SeminarSection />
      <Benefits />
      <Separator text="EXPLORE MÉXICO WITH OUR optional day trips to downtown Mexico City Templo Mayor ruins, Teotiuhuacán Pyramids, Xochimilco, and more!" />
      <Slider />
      <Separator text="MORE ABOUT KIIKO AND THEIR USERS FEEDBACK" />
      <AboutKiiko />
      <Testimonial />
      {/* <Separator text="REGISTER NOW" /> */}
      {/* <InfoSeminar />
      <PaymentSection />
      <Register /> */}
    </main>
  );
}
