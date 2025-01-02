import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/assets/images/hero-bg.jpg")',
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Descoperă lumea cu TravelPlan
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Planifică-ți următoarea aventură cu noi
          </p>
          <Link
            to="/planner"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Începe să planifici
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
