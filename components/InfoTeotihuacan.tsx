import React from 'react';
import { FaInfoCircle, FaClipboardList, FaDollarSign } from 'react-icons/fa';

// Icons
import { FaUser } from 'react-icons/fa';
import { BsFillFileImageFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';
import { FaBus } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';
import { GiClothes } from 'react-icons/gi';
import { FaHatCowboySide } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';
import { FaCamera } from 'react-icons/fa';
import LightGallerySlider from './LightGallerySlider';

const InfoTeotihuacan = () => {
  return (
    <div className="flex justify-center items-center pb-12 w-full">
      <div className="flex flex-col lg:flex-row justify-start w-11/12 xl:w-9/12">
        {/* First Section - GENERAL */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            Highlights
          </h2>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaUser
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">Expert Guides</h3>
              <p className="text-gray-600">
                Enjoy your trip with a expert guide.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <BsFillFileImageFill
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">Incredible Views</h3>
              <p className="text-gray-600">
                Enjoy beatiful views from the top of the pyramids
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaLocationDot
              size={30}
              className="text-blue-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">Secure Location</h3>
              <p className="text-gray-600">
                MEXICO CITY - MEXICO | OPTIONAL TOURS
              </p>
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Second Section - DESCRIPTION */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            TOUR DETAILS
          </h2>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaRegClock
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">Duration</h3>
              <p className="text-gray-600">
                Full-day tour (approximately 8:00 AM to 5:00 PM)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaBus
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">Include Transport</h3>
              <p className="text-gray-600">
                We can take you to the exact location for your security -{' '}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <AiFillDollarCircle
              size={30}
              className="text-green-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">Price</h3>
              <p className="text-gray-600">
                $60 USD per person (includes entrance fees, guided tours, and
                transportation within the site)
              </p>
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Third Section - PRICING */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary uppercase">
            What to bring
          </h2>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <GiClothes
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">
                Comfortable clothing and walking shoes
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaHatCowboySide
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">Hat and sunscreen</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <IoIosWater
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">Water and snacks</h3>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 ">
            <FaCamera
              size={30}
              className="text-yellow-500 col-start-1 col-end-2 self-center justify-self-center "
            />
            <div className="col-start-2 col-end-6 self-center justify-self-start ">
              <h3 className="text-lg font-medium">
                Camera for capturing memories
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTeotihuacan;
