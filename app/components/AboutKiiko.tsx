import React from 'react';

const AboutKiiko: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="w-full rounded-3xl flex justify-center items-center">
        <video
          className="md:w-1/2 h-full object-cover aspect-video rounded-3xl shadow-2xl"
          muted
          controls
        >
          <source src="video1.webm" type="video/webm" />
        </video>
      </div>
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#79A17A]">
          About Kiiko
        </h1>
        <p className="text-lg mb-8 text-center md:w-3/4 text-[#58585A]">
          Kiiko Matsumoto is the founder of Kiiko Style of Acupuncture and
          considered to be a "living Master of Acupuncture". Kiiko Matsumoto's
          approach is taught in many acupuncture schools. She regularly teaches
          her style of acupuncture around the world and in the U.S. Her
          dedication to researching and understanding the Chinese medical
          classics makes her one of the authorities on the subject of
          acupuncture.
        </p>
      </div>
    </div>
  );
};

export default AboutKiiko;
