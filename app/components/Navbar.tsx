'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-10 bg-gray-200 fixed w-screen h-16 md:h-20 grid grid-cols-12 gap-0.5 border-b-2 border-gray-200">
      <div className="bg-white flex justify-start px-5 md:py-0 md:justify-center items-center md:col-start-1 md:col-end-4 col-start-1 col-end-10">
        <Image
          src="/navbarlogo.svg"
          alt="DesignMedicine Logo"
          width={1}
          height={1}
          className="w-36"
        />
      </div>
      <div className="hidden md:flex justify-evenly items-center col-start-4 col-end-10 bg-white ">
        <Link href="/">Home</Link>
        <Link href="/about">Intensive Seminar</Link>
        <Link href="/contact">Tours</Link>
        <Link href="/about">About Us</Link> {/* Corregido el enlace */}
      </div>
      <div className="bg-white hidden md:flex justify-center items-center col-start-10 col-end-13">
        <button className="hidden md:block text-sm px-7 py-3 text-white font-semibold bg-[#5B747B]">
          Register Now
        </button>
      </div>
      <div className="md:hidden flex justify-end items-center col-start-11">
        <button
          className="outline-none mobile-menu-button"
          onClick={toggleMenu}
        >
          <svg
            className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
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
        className={`md:hidden flex flex-col items-end absolute top-16 w-screen bg-white ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link href="/">
          <span className="block text-sm px-2 py-4 text-gray-500 font-semibold hover:bg-blue-500 transition duration-300">
            Home
          </span>
        </Link>

        <Link href="/about">
          {' '}
          {/* Corregido el enlace */}
          <span className="block text-sm px-2 py-4 text-gray-500 font-semibold hover:bg-blue-500 transition duration-300">
            Seminar
          </span>
        </Link>

        <Link href="/tours">
          <span className="block text-sm px-2 py-4 text-gray-500 font-semibold hover:bg-blue-500 transition duration-300">
            Tours
          </span>
        </Link>

        <Link href="/about">
          <span className="block text-sm px-2 py-4 text-gray-500 font-semibold hover:bg-blue-500 transition duration-300">
            About Us
          </span>
        </Link>

        <Link href="/register">
          <span className="hidden md:block text-sm px-2 py-4 text-gray-500 font-semibold bg-[#2eda33]">
            Register Now
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
