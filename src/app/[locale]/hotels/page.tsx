// src/pages/SuggestedHotels.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import Slider from '@/components/Slider';
import Separator from '@/components/Separator';
import Formulario from '@/components/Formulario';

export default function SuggestedHotels() {
  const myImages = ['/image3.png', '/image5.png'];
  const myImages2 = ['/image2.png', '/image4.png'];

  return (
    <div className="px-4 py-12 mt-20">
      {/* Page Title */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-1">
          Suggested Hotels in Mexico City
        </h1>
        <p className="text-gray-600 text-lg">
          Find comfortable and convenient accommodations in the best hotels in
          Mexico City, selected for your stay.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2 w-10/12 mx-auto mb-24 ">
        {/* Hotel 1 */}
        <div className="hotel bg-white rounded-lg shadow-2xl shadow-black/10 overflow-hidden transform transition duration-300">
          <Carousel images={myImages} />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              City Express Plus by Marriott Mexico City Insurgentes Sur
            </h2>
            <p className="text-gray-600 mb-3">
              Av. Insurgentes Sur No. 1581, Col. San José Insurgentes, Mexico
              City, 03900, Mexico
            </p>
            <p className="text-gray-600 mb-4">Phone: +52 55 5482 0280</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.marriott.com/es/hotels/mexpi-city-express-plus-insurgentes-sur/overview/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/70 transition"
              >
                Visit Website
              </Link>
              <Link
                href="https://www.google.com/maps?q=Av.+Insurgentes+Sur+No.+1581,+Ciudad+de+México,+03900,+Mexico"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                View on Google Maps
              </Link>
            </div>
          </div>
        </div>

        {/* Hotel 2 */}
        <div className="hotel bg-white rounded-lg shadow-2xl shadow-black/10 overflow-hidden transform transition  duration-300">
          <Carousel images={myImages2} />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Fiesta Inn Insurgentes Sur
            </h2>

            <p className="text-gray-600 mb-3">
              Mercaderes No. 20, Col. San José Insurgentes, 03900, Mexico City,
              Mexico
            </p>
            <p className="text-gray-600 mb-4">Phone: +52 1 443 137 8728</p>
            <div className="flex space-x-4 ">
              <Link
                href="https://www.fiestamericanatravelty.com/fiesta-inn/hoteles/fiesta-inn-insurgentes-sur"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition"
              >
                Visit Website
              </Link>
              <Link
                href="https://www.google.com/maps?q=Mercaderes+No.+20,+Ciudad+de+México,+03900,+Mexico"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                View on Google Maps
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Separator text="ADITIONAL ACTIVITIES" />
      <div className="flex justify-center items-center">
        <Slider />
      </div>
      <div className="w-full justify-center items-center flex py-16 bg-secondary/10 min-h-screen">
        <Formulario />
      </div>
    </div>
  );
}
