import React from 'react';
import { FaInfoCircle, FaClipboardList, FaDollarSign } from 'react-icons/fa';

const InfoSeminar = () => {
  return (
    <div className="flex justify-center items-center pb-12 w-full">
      <div className="flex flex-col md:flex-row justify-start w-9/12">
        {/* First Section - GENERAL */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary">
            GENERAL
          </h2>
          <div className="flex items-center">
            <FaInfoCircle className="text-blue-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-medium">INSTRUCTOR</h3>
              <p className="text-gray-600">DRA. KIIKO MATSUMOTO, LAC, PHD</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaInfoCircle className="text-blue-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-medium">LANGUAGE</h3>
              <p className="text-gray-600">SPANISH WITH ENGLISH TRANSLATION</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaInfoCircle className="text-blue-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-medium">LOCATION</h3>
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
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary">
            DESCRIPTION
          </h2>
          <div className="flex items-center">
            <FaClipboardList className="text-green-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-medium">DURATION</h3>
              <p className="text-gray-600">3 DAYS</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaClipboardList className="text-green-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-medium">DAY ONE</h3>
              <p className="text-gray-600">3 DAYS</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaClipboardList className="text-green-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-medium">DAYY TWO</h3>
              <p className="text-gray-600">3 DAYS</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaClipboardList className="text-green-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-medium">DAY THREE</h3>
              <p className="text-gray-600">3 DAYS</p>
            </div>
          </div>
        </div>

        {/* Line Separator */}
        <div className="border-t border-primary md:hidden"></div>
        <div className="w-1 bg-primary hidden md:block"></div>

        {/* Third Section - PRICING */}
        <div className="flex-1 bg-white p-6 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold mb-4 text-center text-primary">
            PRICING
          </h2>
          <div className="flex items-center">
            <FaDollarSign className="text-yellow-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-medium">TIME</h3>
              <p className="text-gray-600">
                8:00 PM - 10:00 PM (UTC-6) | 3 DAYS
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaDollarSign className="text-yellow-500 w-8 h-8 mr-4" />
            <div>
              <h3 className="text-lg font-medium">REGULAR PRICE</h3>
              <p className="text-gray-600">1000 USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSeminar;
