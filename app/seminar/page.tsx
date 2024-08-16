import React from 'react';
import Separator from '../../components/Separator';
import Header from '@/components/Header';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import InfoSeminar from '@/components/InfoSeminar';
import PaymentSection from '@/components/PaymentSection';

const Page = () => {
  return (
    <div className="flex justify-center items-center flex-col overflow-x-hidden">
      <Header text="" />
      <video
        className="lg:w-3/4 p-5 h-full object-cover aspect-video"
        muted
        controls
      >
        <source src="video1.webm" type="video/webm" />
      </video>
      <div className="flex flex-col gap-5 py-10 w-5/6 md:w-4/6">
        <h1 className="font-bold text-2xl uppercase text-primary">
          KIIKO MATSUMOTO 3 DAY INTENSIVE  SHOULDER TO SHOULDER
        </h1>
        <p>
          Kiiko Matsumoto, will explore and review patients with you. She will
          share her latest research about the  applications of classical
          literature, and show you the  many ways this can manifest
          symptomatically and her latest treatment strategies. Enjoy her
          fascinating theoretical explanations regarding  points and meridians ,
          while treating patients along her side. We will treat patients with
          complex and difficult conditions with multiple drug treatments , and
          more. Seeing her by your side will ensure you will know how to apply
          her approach the next day in your clinic to get real results. 
        </p>
        <h2 className="font-bold text-2xl uppercase text-primary">
          This three day In-person training  is for you if you want to
        </h2>
        <ul className="list-disc px-10">
          <li className="mb-2">
            Increase your clinic flow with the most effective and efficient
            system in acupuncture today by  learning from the living master{' '}
          </li>
          <li className="mb-2">Understand the applications of classical</li>
          <li className="mb-2">
            Learn to correct the constitutional imbalance of the patient with
            immediate effect on Diagnose patients in{' '}
          </li>
          <li className="mb-2">
            Understand how to receive immediate, objective feedback with every
             needle{' '}
          </li>
          <li className="mb-2">
            Learn to gain a detailed diagnosis in little{' '}
          </li>
          <li className="mb-2">Address  the root problem with immediate </li>
          <li className="mb-2">
            Achieve  the highest level of results with just few  needles.
          </li>
        </ul>
        <h2 className="font-bold text-2xl text-primary">
          NCCAOM PDA’S AND CA CEU’S APPROVED
        </h2>
        <p>
          Kiiko Matsumoto is the founder of Kiiko Style of Acupuncture and
          considered  to be a "living Master of Acupuncture". She is well known
          for her ability to  integrate the work of some of the most famous
          Japanese masters among them Master Nagano, Master Kawai and Master
          Manaka . She introduced her knowledge into her practice for the
          last three decades. Her style of acupuncture focuses on  treating the
          root cause with emphasis on the entire body rather than a single 
          symptom. As a result, patients find Kiiko's treatments to be effective
          and  long lasting. Kiiko Matsumoto's approach is taught in many
          acupuncture schools. She regularly teaches her style of  acupuncture
          around the world and in the U.S. Her dedication to researching and
          understanding the Chinese medical classics makes her one of the
          authorities on the subject of acupuncture.She shares this knowledge
          with her patients in her clinic and with students around the world in
          her seminars. Kiiko's passion for sharing her research makes her a
          popular and sought after teacher. Her students find her seminars to be
          practical, fun and dynamic. Now ,for the first time we have the
          amazing opportunity to be taught by her shoulder to shoulder, while
          treating patients along her side. The reasons why the Kiiko Matsumoto
          style of Japanese acupuncture has become one of the techniques with
          the greatest results and demand throughout the world.
        </p>
        <ul className="list-disc px-10">
          <li className="mb-2">
            It is a style of palpatory acupunture that provides instant feedback
            and inmediate effectiveness.
          </li>
          <li className="mb-2">
            A complete diagnosis is obtained in a very short time.
          </li>
          <li className="mb-2">
            Diagnosis and treatment based on abdominal palpation with inmediate
            response with confirmation from the patients.
          </li>
          <li className="mb-2">Very few needles used.</li>
        </ul>
      </div>
      <InfoSeminar />
      <PaymentSection />
      <Separator text="MORE ABOUT KIIKO AND THEIR USERS FEEDBACK" />

      <Testimonial />
      <Footer />
    </div>
  );
};

export default Page;
