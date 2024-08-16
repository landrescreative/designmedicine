import React from 'react';

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 w-full">
      {/* Container for the two sections */}
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden gap-20 ">
        {/* Left Section - Form */}
        <div className="md:w-3/4 md:p-8">
          <h2 className="text-3xl font-light text-center text-[#79A17A] md:text-left">
            Contact us for any question.
          </h2>
          <p className="text-gray-600 mb-6 text-center md:text-left">
            For more information about our seminar and tours in Mexico City,
            please complete the following form and we will contact you shortly.
          </p>

          <form className="space-y-4 flex flex-col  ">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-700  shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-700  shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                className="mt-1 block w-full px-4 py-2 border border-gray-700  shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button className="bg-[#79A17A] hover:bg-[#5c805d] text-white p-2 px-10 rounded-xl my-3 ">
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/400x500"
            alt="Register Illustration"
            className="object-cover w-full h-full shadow-2xl rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
