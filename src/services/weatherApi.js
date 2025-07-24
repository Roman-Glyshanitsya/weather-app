const API_KEY = '47664630924aaa0484d204a40a001832';
const URL = 'https://api.openweathermap.org';

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// export const fetchWeather = async query => {
//   const response = await fetch(
//     `${URL}/weather?q=${query}&units=metric&appid={KEY}`
//   );
//   if (response.ok) {
//     return response.json();
//   }
//   return await Promise.reject(new Error());
// };

// 1. Отримати координати міста
export const fetchCoordinates = async city => {
  const response = await fetch(
    `${URL}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );
  const data = await response.json();
  if (data.length === 0) throw new Error('City not found');
  return {
    lat: data[0].lat,
    lon: data[0].lon,
    country: data[0].country,
    name: data[0].name,
  };
};

// 2. Отримати погоду по координатах
export const fetchWeather = async ({ lat, lon }) => {
  const response = await fetch(
    `${URL}/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
