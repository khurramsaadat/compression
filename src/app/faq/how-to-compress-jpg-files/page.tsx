import Link from 'next/link';

export default function HowToCompressJPGFiles() {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">How to Compress JPG Files</h1>
      <p className="mb-4 text-lg">TLDR: Head to this <Link href="/" className="text-blue-600 underline">Image Compressor</Link> and thank me later.</p>
      <p className="mb-8">If you want to explore more options, carry on.</p>
      <h2 className="text-3xl font-bold mb-4 mt-8">List of image compression tools</h2>
      <p className="mb-4">I am going to list a few good online tools with their pros and cons.</p>
      <ul className="list-disc ml-8 mb-6 text-gray-800">
        <li className="mb-2">
          <a href="https://tinyjpg.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">TinyJPG</a> - 20 images at a time, 5MB max image size. Less secure and slow because it uploads your images to server. Unlimited version costs $39/year. Ad free. Doesn&apos;t work offline. Gives no options to choose compression level. Really expensive for bulk operation. Gives good compression.
        </li>
        <li className="mb-2">
          <a href="https://compressjpeg.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Compress.JPEG</a> - 20 images at a time. It is less secure because your images sit on their server and also slow as it requires uploading over internet. Shows Ads all over the website. Doesn&apos;t work offline. Gives no options to choose final quality.
        </li>
        <li className="mb-2">
          <a href="https://www.iloveimg.com/compress-image" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Ilove Img compression tool</a> - Ad-laden and confusing interface. Apparently looks free but gives no info about limits if any. Good thing is that it compresses GIF and SVG as well. Slow and unsecure because of image uploading and downloading. Gives no options to choose compression level.
        </li>
        <li className="mb-2">
          <Link href="/" className="text-blue-600 underline">Image Compressor</Link> - It has no upload limits. It&apos;s fast because it doesn&apos;t upload your image to their server and secure because your images never leave your machine. The only downside is that it cannot compress PNG with transparency if you want that. It gives more compression option than other tools. No Ads. Lets you compress 150 images for free. You can upload any number of images. Costs one-time payment of $10 after first 150 images for unlimited access. Cheapest option for bulk compression.
        </li>
      </ul>
      <p className="mb-4">For more comparison and tools you can visit <a href="https://www.google.com/search?q=image+compressor+comparison" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">this</a> website but you will get confused because of choice paradox.</p>
    </div>
  );
} 