import React, { useState } from 'react';
import { destinationsData } from '../utils/destinationData';

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinationsData
    .filter(dest => selectedCategory === 'all' || dest.category === selectedCategory)
    .filter(dest => dest.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Destinații</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Caută destinații..."
            className="p-2 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">Toate destinațiile</option>
            <option value="europe">Europa</option>
            <option value="asia">Asia</option>
            <option value="america">America</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDestinations.map(destination => (
            <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{destination.price}€</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Vezi detalii
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;