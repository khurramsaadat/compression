import React from 'react';

const Hero = ({ children }: { children?: React.ReactNode }) => (
  <section className="w-full flex flex-col items-center mt-8">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">BULK IMAGE COMPRESSOR</h1>
    {children}
    <div className="max-w-2xl w-full mt-10 text-center flex flex-col items-center gap-2 text-gray-800">
      <div className="text-xl font-semibold">Bulk Image Compressor</div>
      <div className="mb-2">Fast batch image compressor</div>
      <ul className="list-disc list-inside text-gray-700 mb-2">
        <li>Drag n Drop images</li>
        <li>Compress away!</li>
      </ul>
      <div className="font-semibold mt-2">No uploading. No signup.</div>
      <div>Reduce size of images in bulk.</div>
      <div className="mt-2">Compress unlimited images online at once. Your photos are your property and stay on your machine.</div>
      <div className="text-gray-500 mt-2">1.4 million+ images compressed every month.</div>
    </div>
  </section>
);

export default Hero; 