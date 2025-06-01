const Footer = () => (
  <footer className="w-full mt-12 py-6 bg-gradient-to-r from-yellow-200 via-pink-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-center text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      <a href="#" className="hover:underline">Privacy</a>
      <a href="/feedback" className="hover:underline">Feedback</a>
      <span className="mx-2">&copy; {new Date().getFullYear()} Bulk Image Compressor</span>
    </div>
  </footer>
);

export default Footer; 