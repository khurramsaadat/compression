'use client';
import Link from 'next/link';
import { useState } from 'react';

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-400 via-pink-300 to-yellow-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-md transition-colors duration-300">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight hover:underline focus:outline-none transition-colors duration-300">Bulk Image Compressor</Link>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 text-lg font-medium items-center transition-colors duration-300">
        <Link href="/">Home</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/feedback">Feedback</Link>
      </div>
      {/* Mobile menu button */}
      <button
        className="md:hidden ml-2 p-2 rounded focus:outline-none transition-colors duration-300"
        aria-label="Open menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <HamburgerIcon />
      </button>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-4 z-50 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col items-start p-6 gap-4 md:hidden min-w-[180px] border dark:border-gray-700 transition-colors duration-300">
          <Link href="/" className="w-full transition-colors duration-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/faq" className="w-full transition-colors duration-300" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link href="/feedback" className="w-full transition-colors duration-300" onClick={() => setMenuOpen(false)}>Feedback</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 