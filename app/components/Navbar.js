"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-[90%] mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/shop"
            className="text-2xl font-bold text-blue-600 dark:text-yellow-400"
          >
            MyStore
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              Contact
            </a>
            <button className="bg-blue-600 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-yellow-500 transition">
              Login
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 p-2 transition"
          >
            {darkMode ? (
              <svg
                className="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-13.66l-.7.7M4.34 19.66l.7-.7M21 12h-1M4 12H3m16.66 4.34l-.7-.7M4.34 4.34l.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-13.66l-.7.7M4.34 19.66l.7-.7M21 12h-1M4 12H3m16.66 4.34l-.7-.7M4.34 4.34l.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-4 pb-4">
            <a
              href="#"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400"
            >
              Shop
            </a>
            <a
              href="#"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400"
            >
              Contact
            </a>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="md:hidden block items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 p-2 transition"
            >
              {darkMode ? (
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-13.66l-.7.7M4.34 19.66l.7-.7M21 12h-1M4 12H3m16.66 4.34l-.7-.7M4.34 4.34l.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-13.66l-.7.7M4.34 19.66l.7-.7M21 12h-1M4 12H3m16.66 4.34l-.7-.7M4.34 4.34l.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
            <button className="w-full bg-blue-600 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-yellow-500">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
