const FAQ = () => (
  <section className="max-w-3xl mx-auto mt-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
    <h2 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">Frequently Asked Questions</h2>
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">How to compress images?</h3>
      <p className="text-gray-700 mb-2">Drop as many images or photos in the dropbox.<br/>Click Start Compressing and you have all your images compressed.</p>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">How to compress JPG, PNG images?</h3>
      <p className="text-gray-700 mb-2">Bulk compress images of following types: JPG, JPEG, PNG, BMP images.<br/>Transparent images will lose transparency. We are working on it.</p>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">How to compress multiple images at once?</h3>
      <p className="text-gray-700 mb-2">Image compressor can batch compress multiple images at once.<br/>You may drop a massive number of images.<br/>You get compressed images. Very often the size is reduced from MBs to KBs.</p>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">How to reduce size from MBs to KBs?</h3>
      <p className="text-gray-700 mb-2">Image compressor gives you various options to compress JPGs and PNGs.<br/>To compress bulk images, drop all of them in the dropbox.<br/>Select the target size in KBs.<br/>Get your new images with your reduced target size.</p>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">How to make all images smaller than 512x512?</h3>
      <p className="text-gray-700 mb-2">Bulk Image compressor gives you various options to resize JPGs and PNGs.<br/>Drop all the images in the image compressor.<br/>Select the max target width and height in pixels. 512, if you want that.<br/>Get your new images all within your range of width and height.</p>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">Is this good for photos?</h3>
      <p className="text-gray-700 mb-2">As a photo compressor, this tool is probably the best out there.<br/>Drop all the pictures of your favorite memories.<br/>Compress and see a drastic reduction in size.<br/>This is best pic compressor ever. If you find a better tool than this, let me know. ;-)</p>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">How to do lossless compression?</h3>
      <p className="text-gray-700 mb-2">Bulk Image compressor allows you to control quality of your image.<br/>Drop all the images in the image compressor.<br/>The algorithm is not lossless but you can select 95%+ quality to get near lossless results.</p>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Help articles</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        <a href="/faq/how-to-compress-jpg-files" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">How to compress JPG files in batches</a>
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-2">Why did I make an image compressor in 2022?</p>
      <p className="text-gray-700 dark:text-gray-300">Existing image compressors are ad laden, upload images to server and have limits on number of images that can be compressed. So, I made one for myself. Hope you enjoy it too.</p>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">Resources</h3>
      <a href="https://imagecompressr.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">imagecompressr.com</a>
    </div>
  </section>
);

export default FAQ; 