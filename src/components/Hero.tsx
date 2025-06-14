import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Hero = ({ children }: { children?: React.ReactNode }) => (
  <section className="w-full flex flex-col items-center mt-8 relative transition-colors duration-300">
    <div className="absolute top-2 right-4 z-20">
      <DarkModeToggle />
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center transition-colors duration-300">BULK IMAGE COMPRESSOR</h1>
    {children}
    <div className="max-w-2xl w-full mt-10 text-center flex flex-col items-center gap-2 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="text-xl font-semibold">Bulk Image Compressor</div>
      <div className="mb-2">Fast batch image compressor</div>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
        <li>Drag n Drop images</li>
        <li>Compress away!</li>
      </ul>
      <div className="font-semibold mt-2">No uploading. No signup.</div>
      <div>Reduce size of images in bulk.</div>
      <div className="mt-2">Compress unlimited images online at once. Your photos are your property and stay on your machine.</div>
      <div className="text-gray-500 dark:text-gray-400 mt-2">1.4 million+ images compressed every month.</div>
    </div>
  </section>
);

export default Hero; 