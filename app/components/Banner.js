"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Background Image */}
      <img
        src="/banner.jpg"
        alt="Fashion Banner"
        className="absolute inset-0 w-full h-full object-cover object-pos opacity-70"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Fashion Store
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Discover the latest trends and styles
          </p>
          <a
            href="#shop-now"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
