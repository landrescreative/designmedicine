import React from 'react';

const SeminarSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-10 mx-20 bg-slate-400">
      <div className="md:w-1/2">
        <img
          src="path/to/image.jpg"
          alt="Seminar Image"
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Title</h2>
        <h3 className="text-lg text-gray-500 mb-4">Subtitle</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nunc id aliquam aliquet, nunc nunc lacinia ligula, id
          fringilla nunc metus id mi.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
};

export default SeminarSection;
