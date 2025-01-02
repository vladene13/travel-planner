import React from 'react';
import Hero from '../components/Hero';
import DestinationSlider from '../components/DestinationSlider';
import WeatherWidget from '../components/WeatherWidget';
import FeaturedDestinations from '../components/FeaturedDestinations';

const Home = () => (
  <div>
    <Hero />
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Destinații populare</h2>
        <DestinationSlider />
      </div>
    </section>
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Vremea în destinații</h2>
        <WeatherWidget />
      </div>
    </section>
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Oferte speciale</h2>
        <FeaturedDestinations />
      </div>
    </section>
  </div>
);

export default Home;