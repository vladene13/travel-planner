const API_KEY = 'GGHF5SH7SL3U4M8JXU69AWS3D'; 
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export const WeatherService = {
 async getWeather(city) {
   try {
     const response = await fetch(
       `${BASE_URL}/${city}/today?unitGroup=metric&include=current&key=${API_KEY}&contentType=json`
     );
     if (!response.ok) {
       throw new Error('Weather fetch failed');
     }
     const data = await response.json();
     return {
       city: data.resolvedAddress,
       temperature: data.currentConditions.temp,
       conditions: data.currentConditions.conditions,
       icon: data.currentConditions.icon,
       humidity: data.currentConditions.humidity,
       windSpeed: data.currentConditions.windspeed,
       feelsLike: data.currentConditions.feelslike
     };
   } catch (error) {
     console.error('Weather service error:', error);
     throw error;
   }
 }
};