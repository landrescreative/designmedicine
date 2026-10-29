'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const CARD =
  'bg-white shadow-2xl shadow-black/10 rounded-tr-2xl rounded-bl-2xl px-10 py-16 hover:scale-105 duration-300 transition-all';

const Benefits: React.FC = () => {
  const t = useTranslations();

  const reasons = [0, 1, 2];
  const included = [3, 4, 5, 6, 7, 8];

  return (
    <div className="w-full flex justify-center bg-[#F2EAE4]">
      <section className="md:m-20 flex flex-col gap-5 py-10 justify-center items-center w-4/6">
        <h2 className="text-2xl  uppercase tracking-widest mb-12 text-center text-[#757263] ">
          {t('benefits.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
          {reasons.map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
              className={CARD}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                  {t(`benefits.list.${index}`)}
                </h3>
                <p className="text-gray-500 text-center">
                  {t(`benefits.description.${index}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl uppercase tracking-widest  my-12 text-center text-[#757263] ">
          {t('benefits.title2')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {included.map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: ((index - 3) % 3) * 0.12 }}
              className={CARD}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-regular text-secondary uppercase font-serif mb-3 text-center">
                  {t(`benefits.list.${index}`)}
                </h3>
                <p className="text-gray-500 text-center">
                  {t(`benefits.description.${index}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Benefits;
