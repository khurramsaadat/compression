'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-yellow-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m8.25-9H21M3 12H4.75m15.364 6.364l-1.591-1.591M6.227 6.227l-1.591-1.591m12.728 12.728l-1.591 1.591M6.227 17.773l-1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-900 dark:text-yellow-200">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </svg>
);

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-400 via-pink-300 to-yellow-300 shadow-md dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight hover:underline focus:outline-none">Bulk Image Compressor</Link>
      </div>
      <div className="flex gap-6 text-lg font-medium items-center">
        <Link href="/">Home</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/feedback">Feedback</Link>
        <button
          aria-label="Toggle dark mode"
          className="ml-4 focus:outline-none"
          onClick={() => setDark((d) => !d)}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 