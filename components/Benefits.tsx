import React from 'react';
import Image from 'next/image';

const Benefits: React.FC = () => {
  return (
    <section className="md:mx-20 flex flex-col gap-5 py-10 justify-center items-center w-10/12">
      <h2 className="text-2xl font-bold mb-4 text-center text-primary ">
        ENJOY THE EXPERIENCE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
        <div className="bg-white p-8 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (7).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              DIAGNOSIS IN SECONDS
            </h3>
            <p className="text-gray-500 text-center">
              Learn to gain a detailed diagnosis in little time
            </p>
          </div>
        </div>
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (6).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              IMMEDIATE FEEDBACK THROUGH PALPATION
            </h3>
            <p className="text-gray-500 text-center">
              Diagnosis and treatment based on abdominal palpation with
              immediate response with confirmation from the patients.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (5).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              RESULTS ORIENTED
            </h3>
            <p className="text-gray-500 text-center">
              A complete diagnosis is obtained in a very short time.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center text-primary ">
        LEARN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (4).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              Increase your clinic flow
            </h3>
            <p className="text-gray-500 text-center">
              Learn from the living master herself.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (3).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              Understand the feedback
            </h3>
            <p className="text-gray-500 text-center">
              Understand how to receive immediate, objective feedback with every
               needle placed.
            </p>
          </div>
        </div>
        <div className="bg-white p-4 ">
          <div className="flex flex-col items-center">
            <Image
              src="/benefit (2).svg"
              width={1}
              height={1}
              className="w-20 h-20 mb-2  "
              alt="test"
            ></Image>
            <h3 className="text-lg font-regular text-primary uppercase text-center">
              Highest results6
            </h3>
            <p className="text-gray-500 text-center">
              Achieve  the highest level of results with just few  needles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
