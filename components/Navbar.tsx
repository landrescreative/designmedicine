'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

interface NavbarProps {
  home: string;
  seminar: string;
  tours: string;
  register: string;
}

const Navbar = ({ home, seminar, tours, register }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  return (
    <div className="z-[100] bg-white w-screen h-16 grid grid-cols-12 border-b-2 border-gray-200 shadow-lg ">
      <Link
        href={'/'}
        className="bg-white flex justify-center items-center px-5 py-1 md:py-6 md:justify-center md:col-start-1 md:col-end-13 col-start-1 col-end-9 text-primary z-[100] "
      >
        <Image
          src="/navbarlogo.svg"
          alt="DesignMedicine Logo"
          width={1}
          height={1}
          className="w-36  text-primary fill-primary hover:scale-110 transition-all duration-300 "
        />
      </Link>
      <div className="hidden md:flex justify-evenly items-center col-start-1 col-end-13 py-5 bg-white  z-[100]">
        <Link
          href="/"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full tracking-wider uppercase ${
            pathname === '/' ? 'active' : ''
          }`}
        >
          {home}
        </Link>
        <Link
          href="/seminar"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full tracking-wider uppercase ${
            pathname === '/seminar' ? 'active' : ''
          }`}
        >
          {seminar}
        </Link>
        <Link
          href="/#tours"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full tracking-wider uppercase ${
            pathname === '/#tours' ? 'active' : ''
          }`}
        >
          {tours}
        </Link>
        <Link
          href="/shop"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full tracking-wider uppercase ${
            pathname === '/#tours' ? 'active' : ''
          }`}
        >
          Shop
        </Link>
      </div>
      <div className="md:hidden flex justify-end items-center col-start-11">
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
            className="min-h-[50vh] z-50 md:hidden flex flex-col pr-6 absolute top-16 justify-evenly items-center  w-screen shadow-lg bg-white"
          >
            <Link href="/" onClick={closeMenu}>
              <span className="block  px-2 py-4 text-gray-700 text-lg font-medium md:hover:bg-blue-500 transition duration-300 uppercase tracking-widest">
                {home}
              </span>
            </Link>

            <Link href="/seminar" onClick={closeMenu}>
              {' '}
              {/* Corregido el enlace */}
              <span className="block  px-2 py-4 text-gray-700 text-lg font-medium md:hover:bg-blue-500 transition duration-300 uppercase tracking-widest">
                {seminar}
              </span>
            </Link>

            <Link href="/#tours" onClick={closeMenu}>
              <span className="block  px-2 py-4 text-gray-700 text-lg font-medium md:hover:bg-blue-500 transition duration-300 uppercase tracking-widest">
                {tours}
              </span>
            </Link>
            <Link href="/shop" onClick={closeMenu}>
              <span className="block  px-2 py-4 text-gray-700 text-lg font-medium md:hover:bg-blue-500 transition duration-300 uppercase tracking-widest">
                Shop
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
