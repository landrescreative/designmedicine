'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutKiiko: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-16 relative">
      <div className="w-full rounded-3xl flex justify-center items-center">
        <video
          className="lg:w-3/4 h-full object-cover aspect-video rounded-3xl shadow-xl"
          muted
          controls
        >
          <source src="video1.webm" type="video/webm" />
        </video>
      </div>
      <div className="flex flex-col justify-center items-center py-16">
        <h1 className="text-2xl font-bold mb-4 text-center text-primary">
          About Kiiko
        </h1>
        <p className="text-lg mb-8 text-center md:w-3/4 text-[#58585A]">
          Kiiko Matsumoto is the founder of Kiiko Style of Acupuncture and
          considered to be a "living Master of Acupuncture". Kiiko Matsumoto's
          approach is taught in many acupuncture schools. She regularly teaches
          her style of acupuncture around the world and in the U.S. Her
          dedication to researching and understanding the Chinese medical
          classics makes her one of the authorities on the subject of
          acupuncture.
        </p>
      </div>
      <div className="absolute w-screen  md:scale-y-90 -z-20 top-[1rem] md:top-[-2rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 592.72 432.46">
          <motion.path
            d="M2.5,59.73c31.55,16.6,73.04,13.13,100.31-10.37,6.89-5.93,12.51-13.82,13.64-23.02.97-7.94-1.53-16.69-7.9-21.85-13.49-10.93-32.32-.22-37.93,14-7.23,18.33,5.03,38.81,14.67,53.74,9.3,14.4,20.25,27.78,32.49,39.78,24.54,24.06,54.22,42.74,86.49,54.53,16.16,5.91,32.92,9.9,49.98,12.07,20.03,2.54,40.28,2.28,60.39,3.84,18.85,1.46,37.89,4.77,54.79,13.64,13.77,7.23,25.6,17.49,35.35,29.56,19.87,24.59,30.85,56.46,34.04,87.66,2.12,20.71.15,41.63,3.3,62.26,2.63,17.25,9.77,35.19,23.69,46.41,12.81,10.33,31.03,13.83,46.24,6.78,16.51-7.65,21.62-26.56,21.25-43.34-.4-18.25-7.94-38.73.34-56.2,6.16-12.99,18.76-22.09,32.74-24.91,6.75-1.36,13.68-.91,20.21,1.22,6.13,2,8.76-7.66,2.66-9.64-28.26-9.2-62.3,10.17-68.05,39.55-3.77,19.28,3.41,38.27,1.91,57.58-.58,7.49-2.7,15.45-7.87,21.14-4.6,5.07-11.08,7.85-17.88,8.26-15.99.96-29.14-8.69-36.75-22.19-9.22-16.36-10.26-35.51-10.54-53.86-.27-17.73-.7-35.18-4.17-52.63-3.06-15.39-8-30.4-14.77-44.56-13.08-27.35-34.2-51.74-62.17-64.42-35.71-16.19-75.49-11.41-113.41-15.99-32.06-3.88-63.14-15.38-90.54-32.35s-51.49-39.76-69.41-66.67c-4.86-7.3-9.65-14.91-13.08-23-3.22-7.58-5.69-17.09-2.49-25.1,2.28-5.71,8.1-10.76,14.28-11.6s10.87,3.81,12.06,9.72c3.27,16.17-16.17,28.04-28.5,33.5-14.77,6.54-31.92,8.48-47.79,5.55-7.88-1.46-15.47-4-22.56-7.73-5.69-2.99-10.75,5.63-5.05,8.63h0Z"
            fill="none"
            stroke="#F16D6D"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 8 }}
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutKiiko;
