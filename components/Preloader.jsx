// src/components/Preloader.js
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Duración del preloader (ajusta según tus necesidades)
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-secondary z-[100]"
          initial={{ y: 0 }} // Estado inicial sin animación de aparición
          animate={{ y: 0 }} // Estado visible sin animación
          exit={{ y: -1000 }} // Estado de salida con animación de desvanecimiento
          transition={{ duration: 0.6, ease: 'easeInOut' }} // Duración de la animación de salida
        >
          <div className="flex flex-col items-center">
            {/* Logo con animación de rebote */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Image
                src="/designmedicine.svg" // Ruta del logo en `public/images`
                alt="Design Medicine Logo"
                width={120} // Ajusta el tamaño según tus necesidades
                height={120}
                className="mb-4"
              />
            </motion.div>
            {/* Spinner de carga */}
            <div className="animate-spin rounded-full h-4 w-4 border-t-4 border-b-4 border-white-500"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
