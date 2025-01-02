import React from 'react';

const About = () => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Despre noi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Misiunea noastră</h2>
          <p className="text-gray-600">
            La TravelPlan, ne dedicăm să facem planificarea călătoriilor cât mai simplă și plăcută. 
            Cu experiența noastră în domeniul turismului, transformăm visele tale de călătorie în realitate.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">De ce să ne alegi</h2>
          <ul className="space-y-4">
            {[
              'Experiență vastă în organizarea călătoriilor',
              'Prețuri competitive și transparente',
              'Suport 24/7 pentru clienți',
              'Destinații verificate și recomandate'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default About;