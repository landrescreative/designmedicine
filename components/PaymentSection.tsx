import React from 'react';

// Icons
import { FaPaypal } from 'react-icons/fa6';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { FaCreditCard } from 'react-icons/fa6';

const PaymentSection: React.FC = () => {
  return (
    <div className="flex flex-col pb-10 md:w-9/12 items-start">
      <h2 className="text-2xl font-bold uppercase text-primary">
        Payment Options
      </h2>
      <p className="text-lg text-gray-500 mb-5">
        Choose your preferred payment method below
      </p>
      <div className="flex  flex-col md:flex-row gap-4">
        <div className=" px-14 py-5 w-full rounded-2xl border-2 border-blue-300 hover:border-blue-600 flex justify-center items-center flex-col gap-5 bg-blue-100  ">
          <FaPaypal className="text-6xl text-blue-500" />
          <h3 className="text-lg font-semibold mb-2  text-center">
            Pay with PayPal
          </h3>
          {/* PayPal payment card content */}
        </div>
        <div className="px-14 py-5 w-full rounded-2xl border-2 border-green-200 hover:border-green-600 transition-all duration-300  flex justify-center items-center flex-col gap-5 bg-green-100">
          <FaMoneyBillTransfer className="text-6xl text-green-500" />
          <h3 className="text-lg font-semibold mb-2 text-center">
            Pay with Bank Transfer
          </h3>
          {/* Bank transfer payment card content */}
        </div>
        <div className="bg-purple-100 px-14 py-5 w-full rounded-2xl border-2 border-purple-300 hover:border-purple-600 transition-all duration-300  flex justify-center items-center flex-col gap-5">
          <FaCreditCard className="text-6xl text-purple-500" />
          <h3 className="text-lg font-semibold mb-2 text-center">
            Pay with Credit Card
          </h3>
          {/* Credit card payment card content */}
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
