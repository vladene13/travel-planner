import React, { useEffect, useState } from 'react';
import { WeatherService } from '../services/weatherService';

const WeatherWidget = () => {
 const [weatherData, setWeatherData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
   const fetchWeather = async () => {
     try {
       const cities = ['Paris', 'Rome', 'Barcelona'];
       const results = await Promise.all(
         cities.map(city => WeatherService.getWeather(city))
       );
       setWeatherData(results);
       setLoading(false);
     } catch (err) {
       setError('Nu am putut încărca datele meteo');
       setLoading(false);
     }
   };

   fetchWeather();
 }, []);

 if (loading) return <div className="text-center p-4">Se încarcă...</div>;
 if (error) return <div className="text-center text-red-500">{error}</div>;

 return (
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {weatherData.map((data, index) => (
       <div key={index} className="bg-white rounded-lg shadow-lg p-6">
         <h3 className="text-xl font-bold mb-4">{data.city}</h3>
         <div className="flex flex-col items-center">
           <p className="text-4xl font-bold mb-2">
             {Math.round(data.temperature)}°C
           </p>
           <p className="text-gray-600 mb-4">{data.conditions}</p>
           <div className="grid grid-cols-2 gap-4 w-full text-sm">
             <div>
               <p className="text-gray-500">Se simte ca</p>
               <p className="font-semibold">{Math.round(data.feelsLike)}°C</p>
             </div>
             <div>
               <p className="text-gray-500">Umiditate</p>
               <p className="font-semibold">{data.humidity}%</p>
             </div>
             <div>
               <p className="text-gray-500">Vânt</p>
               <p className="font-semibold">{Math.round(data.windSpeed)} km/h</p>
             </div>
           </div>
         </div>
       </div>
     ))}
   </div>
 );
};

export default WeatherWidget;