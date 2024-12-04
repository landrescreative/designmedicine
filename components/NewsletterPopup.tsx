'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function NewsletterPopup() {
  const t = useTranslations('newsletter'); // Hook para obtener traducciones
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 bg-white shadow-xl border border-gray-200 rounded-lg p-5 w-80 z-50"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 100
          }}
        >
          <motion.button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-all"
            aria-label={t('closeButton')}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
          <div className="flex flex-col items-center space-y-3">
            <motion.h3
              className="text-lg font-bold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.3
              }}
            >
              {t('title')}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600 text-center leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.4
              }}
            >
              {t('description')}
            </motion.p>
            <motion.button
              onClick={() =>
                window.open(
                  'https://5ec71660.sibforms.com/serve/MUIFAHZs1bRnszL5gJRxedS-FK4Uv3K4yaUhEoZcAN7NrlHFPFPToYMweVddJy7VjjW8x9Le-eebE3eGgBm42TRLkd0emJWF6ksHBy79Uf9A8_yIKQb6AOJ_A3JELt8zg8GtAfrdWIp-Y02hzw7Kv9XYRyVRQVHIAjzoz-QRP5T4KkgN0WS-qpM2Lo-wkmuyhoXG6w9oD9aInZpO',
                  '_blank'
                )
              }
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 10,
                delay: 0.6
              }}
            >
              {t('subscribeButton')}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
