import React, { useState } from 'react';
import { validatePlannerForm } from '../utils/validation';

const Planner = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    budget: '',
    preferences: []
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validatePlannerForm(formData);
    
    if (validation.isValid) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(validation.errors);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Planifică-ți călătoria</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1">Destinație</label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => setFormData({...formData, destination: e.target.value})}
              className="w-full p-2 border rounded"
            />
            {errors.destination && <p className="text-red-500 text-sm">{errors.destination}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Data plecare</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Data întoarcere</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            {errors.dates && <p className="col-span-2 text-red-500 text-sm">{errors.dates}</p>}
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Planifică călătoria
          </button>
        </form>
      </div>
    </div>
  );
};

export default Planner;