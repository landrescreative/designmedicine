'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function NewsletterPopup() {
  const t = useTranslations('newsletter'); // Hook para obtener traducciones
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t('statusSending'));

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus(t('statusSuccess'));
        setEmail('');
      } else {
        setStatus(t('statusError'));
      }
    } catch (error) {
      setStatus(t('statusServerError'));
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 bg-white shadow-xl border border-gray-200 rounded-lg p-5 w-96 z-50"
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
          <div className="flex items-center space-x-2 mb-3">
            <motion.div
              className="text-primary text-2xl px-3"
              initial={{ opacity: 0, scale: 0.5, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.2
              }}
            >
              <FaEnvelope />
            </motion.div>
            <motion.h3
              className="text-xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.3
              }}
            >
              {t('title')}
            </motion.h3>
          </div>
          <motion.p
            className="text-sm text-gray-600 mb-4 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 0.4
            }}
          >
            {t('description')}
          </motion.p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <motion.input
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 10,
                delay: 0.6
              }}
            />
            <motion.button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 10,
                delay: 0.8
              }}
            >
              {t('subscribeButton')}
            </motion.button>
            {status && (
              <motion.p
                className="text-center text-sm mt-2 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
