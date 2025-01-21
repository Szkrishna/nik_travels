/* eslint-disable no-unused-vars */
import React from 'react';

const NoPageContent = () => {
  return (
    <div className="pt-16 flex flex-col items-center justify-center h-[92vh] text-gray-800">
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-400 to-pink-400 opacity-30 blur-2xl"></div>
        </div>
      </div>
      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-red-500 drop-shadow-xl">
        404
      </h1>
      <p className="mt-6 text-2xl font-semibold text-gray-700">
        Oops! Page Not Found
      </p>
      <p className="text-gray-600 mt-3 text-center px-8 sm:px-4">
        The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <div className="mt-6">
        <a href="/"
          className="inline-block px-8 py-3 text-white bg-blue-500 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
          Go Back Home
        </a>
      </div>
    </div>

  )
}

export default NoPageContent;