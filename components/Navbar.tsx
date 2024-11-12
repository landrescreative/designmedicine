'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { useTranslations } from 'next-intl';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  // Función para verificar si el enlace es el activo
  const isActiveLink = (linkPath: string) => {
    const pathWithoutLocale = pathname.split('/').slice(2).join('/');
    return pathWithoutLocale === linkPath.replace(/^\//, '');
  };

  const t = useTranslations('navbar');

  return (
    <div className="z-[100] bg-white w-screen h-16 grid grid-cols-12 border-b-2 border-gray-200 shadow-lg">
      <Link
        href="/"
        className="bg-white flex justify-center items-center px-5 py-1 md:py-6 md:justify-center md:col-start-1 md:col-end-13 col-start-1 col-end-9 text-primary z-[100]"
      >
        <Image
          src="/navbarlogo.svg"
          alt="DesignMedicine Logo"
          width={1}
          height={1}
          className="w-36 text-primary fill-primary hover:scale-110 transition-all duration-300"
        />
      </Link>
      <div className="hidden md:flex justify-evenly items-center col-start-1 col-end-13 py-5 bg-white z-[100]">
        <Link
          href="/"
          className={`relative transition-all duration-300 tracking-wider uppercase ${
            isActiveLink('') ? 'text-primary font-semibold' : 'text-gray-700'
          }`}
        >
          {t('home')}
          {isActiveLink('') && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </Link>
        <Link
          href="/seminar"
          className={`relative transition-all duration-300 tracking-wider uppercase ${
            isActiveLink('seminar')
              ? 'text-primary font-semibold'
              : 'text-gray-700'
          }`}
        >
          {t('seminar')}
          {isActiveLink('seminar') && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </Link>
        <Link
          href="/#tours"
          className={`relative transition-all duration-300 tracking-wider uppercase ${
            isActiveLink('#tours')
              ? 'text-primary font-semibold'
              : 'text-gray-700'
          }`}
        >
          {t('tours')}
          {isActiveLink('#tours') && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </Link>
        <Link
          href="/face-reading"
          className={`relative transition-all duration-300 tracking-wider uppercase ${
            isActiveLink('face-reading')
              ? 'text-primary font-semibold'
              : 'text-gray-700'
          }`}
        >
          {t('face-reading')}
          {isActiveLink('face-reading') && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
          )}
        </Link>
      </div>
      <div className="md:hidden  flex justify-end items-center col-start-11">
        <button
          className="outline-none mobile-menu-button"
          onClick={toggleMenu}
        >
          <div className="relative">
            <IoClose
              className={`text-primary w-8 h-8 absolute transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
              }`}
            />
            <RxHamburgerMenu
              className={`text-primary w-8 h-8 transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="min-h-[50vh] z-100 md:hidden flex flex-col pr-6 absolute top-16 justify-evenly items-center w-screen shadow-lg bg-white"
          >
            <Link href="/" onClick={closeMenu}>
              <span className="block px-2 py-4 text-gray-700 text-lg font-medium uppercase tracking-widest">
                {t('home')}
              </span>
            </Link>
            <Link href="/seminar" onClick={closeMenu}>
              <span className="block px-2 py-4 text-gray-700 text-lg font-medium uppercase tracking-widest">
                {t('seminar')}
              </span>
            </Link>
            <Link href="/#tours" onClick={closeMenu}>
              <span className="block px-2 py-4 text-gray-700 text-lg font-medium uppercase tracking-widest">
                {t('tours')}
              </span>
            </Link>
            <Link href="/face-reading" onClick={closeMenu}>
              <span className="block px-2 py-4 text-center text-gray-700 text-lg font-medium uppercase tracking-widest">
                {t('face-reading')}
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
