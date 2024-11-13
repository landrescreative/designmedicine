// src/components/Tarjetas.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Tarjetas() {
  return (
    <div className="tarjetas flex flex-col gap-4 items-center justify-center md:self-start w-full lg:w-1/3 flex-wrap my-10 lg:my-0">
      <h1 className="flex justify-center items-center lg:hidden text-3xl text-primary col-span-2 font-bold text-center ">
        More Events
      </h1>

      <Link
        href="/face-reading"
        aria-label="Face Reading Section"
        className="relative card-example bg-secondary/20 shadow-2xl hadow-black/10 rounded-3xl min-h-80 overflow-hidden flex justify-center items-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/flyer_facereading.png"
            alt="Face Reading Flyer"
            width={500}
            height={500}
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white text-lg font-semibold">Face Reading</span>
        </motion.div>
      </Link>

      <Link
        href="/seminar"
        aria-label="Seminar Section"
        className="relative card-example bg-secondary/20 shadow-2xl shadow-black/10 rounded-3xl min-h-80 overflow-hidden flex justify-center items-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/flyer_kiiko.jpg"
            alt="Seminar Flyer"
            width={500}
            height={500}
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white text-lg font-semibold">Seminar</span>
        </motion.div>
      </Link>

      <Link
        href="/shop"
        aria-label="Shop Section"
        className="relative card-example bg-secondary/20 shadow-2xl shadow-black/10 rounded-3xl min-h-80 overflow-hidden flex justify-center items-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/flyer_shop.jpg"
            alt="Shop Flyer"
            width={500}
            height={500}
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white text-lg font-semibold">Shop</span>
        </motion.div>
      </Link>
    </div>
  );
}
