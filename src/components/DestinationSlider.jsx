import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const DestinationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      image: '/assets/images/destinations/paris.jpg',
      description: 'Orașul luminilor'
    },
    // Adaugă mai multe destinații aici
    {
        id: 2,
        name: 'Barcelona',
        image: '/assets/images/destinations/barcelona.jpg',
        description: 'Nu uita sa vizitezi si stadionul!'
      },

      {
        id: 3,
        name: 'Rome',
        image: '/assets/images/destinations/rome.jpg',
        description: 'Italia e magnifica in aceasta perioada a anului!'
      },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === destinations.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === destinations.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(timer);
  }, [destinations.length]);

  return (
    <div className="relative overflow-hidden h-96">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {destinations.map((destination) => (
          <div 
            key={destination.id}
            className="w-full flex-shrink-0 relative"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
      >
        <ChevronLeftIcon className="h-8 w-8 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
      >
        <ChevronRightIcon className="h-8 w-8 text-white" />
      </button>
    </div>
  );
};

export default DestinationSlider;