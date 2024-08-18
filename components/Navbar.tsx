'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const pathname = usePathname();

  return (
    <div className="z-10 bg-gray-200 fixed w-screen h-16 md:h-20 grid grid-cols-12 gap-0.5 border-b-2 border-gray-200">
      <div className="bg-white flex justify-start px-5 md:py-0 md:justify-center items-center md:col-start-1 md:col-end-4 col-start-1 col-end-10 text-primary">
        <Image
          src="/navbarlogo.svg"
          alt="DesignMedicine Logo"
          width={1}
          height={1}
          className="w-36 text-primary fill-primary "
        />
      </div>
      <div className="hidden md:flex justify-evenly items-center col-start-4 col-end-10 bg-white ">
        <Link
          href="/"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
            pathname === '/' ? 'active' : ''
          }`}
        >
          Home
        </Link>
        <Link
          href="/seminar"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
            pathname === '/seminar' ? 'active' : ''
          }`}
        >
          Intensive Seminar
        </Link>
        <Link
          href="/#tours"
          className={`relative hover:text-primary transition-all duration-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
            pathname === '/#tours' ? 'active' : ''
          }`}
        >
          Tours
        </Link>
        {/* Corregido el enlace */}
      </div>
      <div className="bg-white hidden md:flex justify-center items-center col-start-10 col-end-13">
        <button className="hidden md:block text-sm px-7 py-3 text-white font-semibold bg-primary transition-transform duration-300 transform hover:scale-105">
          Register Now
        </button>
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
        className={`md:hidden flex flex-col items-end absolute top-16 w-screen bg-primary ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link href="/" onClick={closeMenu}>
          <span className="block text-sm px-2 py-4 text-white font-semibold md:hover:bg-blue-500 transition duration-300">
            Home
          </span>
        </Link>

        <Link href="/seminar" onClick={closeMenu}>
          {' '}
          {/* Corregido el enlace */}
          <span className="block text-sm px-2 py-4 text-white font-semibold md:hover:bg-blue-500 transition duration-300">
            Seminar
          </span>
        </Link>

        <Link href="/tours" onClick={closeMenu}>
          <span className="block text-sm px-2 py-4 text-white font-semibold md:hover:bg-blue-500 transition duration-300">
            Tours
          </span>
        </Link>

        <Link href="/register" onClick={closeMenu}>
          <span className="hidden md:block text-sm px-2 py-4 text-gray-500 font-semibold bg-[#2eda33]">
            Register Now
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
