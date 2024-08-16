import React from 'react';

// Icons
import { FaPaypal } from 'react-icons/fa6';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FaCreditCard } from 'react-icons/fa6';

const PaymentSection: React.FC = () => {
  return (
    <div className="flex flex-col pb-10 md:w-9/12 items-start">
      <h2 className="text-2xl font-bold mb-4 uppercase text-primary">
        Payment Options
      </h2>
      <div className="flex  flex-col md:flex-row gap-4">
        <div className=" p-14 w-full rounded-2xl border-2 border-blue-600 flex justify-center items-center flex-col gap-5 bg-blue-100">
          <FaPaypal className="text-6xl text-blue-500" />
          <h3 className="text-lg font-semibold mb-2 ">Pay with PayPal</h3>
          {/* PayPal payment card content */}
        </div>
        <div className="bg-white p-14 w-full rounded-2xl border-2 border-gray-300 hover:border-gray-600 transition-all duration-300  flex justify-center items-center flex-col gap-5">
          <FaMoneyBillTransfer className="text-6xl text-gray-500" />
          <h3 className="text-lg font-semibold mb-2">Pay with Bank Transfer</h3>
          {/* Bank transfer payment card content */}
        </div>
        <div className="bg-white p-14 w-full rounded-2xl border-2 border-gray-300 hover:border-gray-600 transition-all duration-300  flex justify-center items-center flex-col gap-5">
          <FaCreditCard className="text-6xl text-gray-500" />
          <h3 className="text-lg font-semibold mb-2">Pay with Credit Card</h3>
          {/* Credit card payment card content */}
        </div>
      </div>
      <button className="bg-[#79A17A] hover:bg-[#5c805d] text-white p-2 px-10 rounded-xl my-3">
        PAY NOW
      </button>
    </div>
  );
};

export default PaymentSection;
