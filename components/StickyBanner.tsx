// src/components/StickyBanner.js
'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations('banner');

  // Manejar el cierre del banner
  const handleClose = () => {
    setIsVisible(false);
  };

  // Si no está visible, no renderiza nada
  if (!isVisible) return null;

  return (
    <div
      id="sticky-banner"
      className="fixed top-0 left-0 z-10 flex justify-between w-full p-1 md:p-4 border-b bg-primary border-gray-600"
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-white">
          <span className="inline-flex p-1 mr-3 bg-white rounded-full w-6 h-6 items-center justify-center flex-shrink-0">
            <svg
              className="w-3 h-3 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
            </svg>
          </span>
          <span>{t('span')}</span>
          <Link
            className="text-sm font-medium text-primary bg-white p-2 rounded-md ml-2"
            href="/#tours"
          >
            {t('cta')}
          </Link>
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleClose}
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 rounded-lg text-sm p-1.5 hover:bg-gray-600 hover:text-white"
          aria-label="Close banner"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}
