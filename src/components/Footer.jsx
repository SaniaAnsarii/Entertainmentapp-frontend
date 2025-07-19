import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          Created with{' '}
          <FaHeart className="inline-block text-red-500 mx-1" />
          {' '}by{' '}
          <a 
            href="https://portfolio-rho-six-jl9f0wvlbz.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-semibold"
          >
            Sania
          </a>
        </p>
        <p className="text-xs text-gray-400 mt-2">
          © 2024 Entertainment Web App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 