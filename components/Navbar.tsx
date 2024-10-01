'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = ({ home, seminar, tours, register }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  return (
    <div className="z-10 bg-white md:bg-gray-200 fixed w-screen h-16 md:h-20 grid grid-cols-12 border-b-2 border-gray-200 shadow-lg">
      <div className="bg-white flex justify-center items-center px-5 py-5 md:justify-center md:col-start-1 md:col-end-10 col-start-1 col-end-15 text-primary w-screen">
        <Image
          src="/navbarlogo.svg"
          alt="DesignMedicine Logo"
          width={1}
          height={1}
          className="w-36 text-primary fill-primary "
        />
      </div>
      <div className="hidden md:flex justify-evenly items-center col-start-1 col-end-10 py-4 bg-white ">
        <Link
          href="/"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
            pathname === '/' ? 'active' : ''
          }`}
        >
          {home}
        </Link>
        <Link
          href="/seminar"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
            pathname === '/seminar' ? 'active' : ''
          }`}
        >
          {seminar}
        </Link>
        <Link
          href="/#tours"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
            pathname === '/#tours' ? 'active' : ''
          }`}
        >
          {tours}
        </Link>
        {/* Corregido el enlace */}
      </div>
      <div className="bg-white hidden md:flex justify-center items-center col-start-10 col-end-13">
        <Link
          href="/seminar/#register"
          className="hidden md:block text-sm px-7 py-4 text-white font-semibold bg-primary transition-transform duration-300 transform hover:scale-105"
        >
          {register}
        </Link>
      </div>
      <div className="md:hidden flex justify-end items-center col-start-11">
        <button
          className="outline-none mobile-menu-button"
          onClick={toggleMenu}
        >
          <svg
            className=" w-6 h-6 text-primary hover:text-primary "
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden flex flex-col items-end pr-6 absolute top-16 w-screen shadow-lg bg-primary ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link href="/" onClick={closeMenu}>
          <span className="block text-sm px-2 py-4 text-white font-semibold md:hover:bg-blue-500 transition duration-300">
            {home}
          </span>
        </Link>

        <Link href="/seminar" onClick={closeMenu}>
          {' '}
          {/* Corregido el enlace */}
          <span className="block text-sm px-2 py-4 text-white font-semibold md:hover:bg-blue-500 transition duration-300">
            {seminar}
          </span>
        </Link>

        <Link href="/#tours" onClick={closeMenu}>
          <span className="block text-sm px-2 py-4 text-white font-semibold md:hover:bg-blue-500 transition duration-300">
            {tours}
          </span>
        </Link>

        <Link href="/seminar/#register" onClick={closeMenu}>
          <span className="block text-sm px-6 py-4 text-black font-semibold uppercase bg-white">
            {register}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
