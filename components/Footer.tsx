import { useTranslations } from 'next-intl';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const t = useTranslations('footer');
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-5 md:px-20 w-full">
      <div className="flex flex-col space-y-6">
        {/* First Section - Phrase */}
        <div className="text-center flex justify-center items-center">
          <p className="text-lg font-light uppercase md:w-2/4">
            {t('disclaimer')}
          </p>
        </div>
        <hr className="border-gray-500 " />
        {/* Second Section - Logo and Links */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src="/designmedicine.svg" alt="Logo" className="w-32" />
          </div>
          {/* Links */}
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-white underline">
              {t('home')}
            </Link>
            <Link href="/seminar" className="hover:text-white underline">
              {t('seminar')}
            </Link>
            <Link href="/#tours" className="hover:text-white underline">
              {t('tours')}
            </Link>
          </div>
        </div>
        <hr className="border-gray-500 " />
        {/* Third Section - Copyright, Social Media, Language */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-center md:text-left">
            {t('copyright')}
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.494v-9.294H9.689V10.5h3.131V8.328c0-3.1 1.893-4.788 4.655-4.788 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.207h-3.12V24h6.116c.726 0 1.326-.6 1.326-1.326V1.326C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.905 4.905 0 001.523 6.548 4.904 4.904 0 01-2.229-.616v.062a4.918 4.918 0 003.946 4.827 4.93 4.93 0 01-2.224.084 4.919 4.919 0 004.6 3.417 9.868 9.868 0 01-6.102 2.104c-.396 0-.786-.023-1.17-.068A13.978 13.978 0 007.548 21c9.056 0 14.007-7.507 14.007-14.007 0-.213-.004-.425-.014-.636A10.011 10.011 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.292 3.608 1.267.975.975 1.205 2.242 1.267 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.292 2.633-1.267 3.608-.975.975-2.242 1.205-3.608 1.267-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.292-3.608-1.267-.975-.975-1.205-2.242-1.267-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.292-2.633 1.267-3.608.975-.975 2.242-1.205 3.608-1.267 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.014 7.052.072 5.773.13 4.47.35 3.34 1.48 2.21 2.61 1.99 3.914 1.932 5.194.874 8.466.874 15.534 1.932 18.806c.058 1.28.278 2.584 1.408 3.714 1.13 1.13 2.433 1.35 3.714 1.408 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.584-.278 3.714-1.408 1.13-1.13 1.35-2.433 1.408-3.714.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.278-2.584-1.408-3.714-1.13-1.13-2.433-1.35-3.714-1.408-1.28-.058-1.689-.072-4.948-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
