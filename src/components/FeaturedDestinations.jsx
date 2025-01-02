import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      image: '/assets/images/destinations/paris.jpg',
      description: 'Descoperă orașul luminilor',
      price: '499€'
    },
    // Adaugă mai multe destinații
    {
        id: 2,
        name: 'Barcelona',
        image: '/assets/images/destinations/barcelona.jpg',
        description: 'Nu uita sa vizitezi si stadionul!',
        price: '699€'
      },
      {
        id: 3,
        name: 'Rome',
        image: '/assets/images/destinations/rome.jpg',
        description: 'Italia e magnifica in aceasta perioada a anului!',
        price:'549€'
      },
      {
        id: 4,
        name: 'Prague',
        image: '/assets/images/destinations/prague.jpg',
        description: 'Cehia e magnifica in aceasta perioada a anului!',
        price:'549€'
      },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {destinations.map(destination => (
        <div 
          key={destination.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
            <p className="text-gray-600 mb-4">{destination.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">{destination.price}</span>
              <Link
                to={`/destinations/${destination.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Vezi detalii
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedDestinations;