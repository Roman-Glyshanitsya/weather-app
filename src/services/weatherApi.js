const API_KEY = 'ca96fbe0dc146527971a35a7deb6d0d7';
const URL = 'https://api.openweathermap.org';

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
export const fetchWeather = ({ lat, lon }) => {
  return fetch(
    `${URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(response => response.json());
};
