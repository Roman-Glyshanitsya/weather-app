import { useState, useEffect } from 'react';
import { fetchCoordinates, fetchWeather } from '../services/weatherApi';
import Container from './Container/Container';
import { Hero } from './Hero/Hero';
import { CityCardList } from './CityCardList/CityCardList';
import { WeatherDetails } from './WeatherDetails/WeatherDetails';

export const App = () => {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState(() => {
    return JSON.parse(window.localStorage.getItem('cities')) ?? [];
  });
  const [expandedCityData, setExpandedCityData] = useState(null);

  useEffect(() => {
    window.localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  const handleExpand = cityObj => {
    // Якщо вже вибрано це місто — ховаємо
    if (expandedCityData?.id === cityObj.id) {
      setExpandedCityData(null);
    } else {
      setExpandedCityData(cityObj);
    }
  };

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // console.log('🔍 Відправка запиту на координати для міста:', query);
      const coords = await fetchCoordinates(query);
      // console.log('✅ Отримані координати:', coords);

      const weather = await fetchWeather(coords);
      // console.log('✅ Отримані погодні дані:', weather);

      const newCity = {
        id: Date.now(),
        city: coords,
        data: weather,
      };

      // перевірка, щоб не дублювати міста
      const alreadyExists = cities.some(
        item =>
          item.city.name === coords.name && item.city.country === coords.country
      );
      if (alreadyExists) {
        alert('This city is already in the list.');
        return;
      }

      // console.log('🆕 Додаємо нове місто в список:', newCity);
      setCities(prev => [newCity, ...prev]);
      setQuery('');
    } catch (error) {
      console.error('❌ Помилка при отриманні даних:', error.message);
      alert(error.message);
    }
  };

  const handleDelete = id => {
    const updated = cities.filter(item => item.id !== id);
    setCities(updated);
    localStorage.setItem('cities', JSON.stringify(updated));
  };

  return (
    <>
      <Hero query={query} onChange={handleChange} onSubmit={handleSubmit} />
      <Container>
        <CityCardList
          cities={cities}
          onDelete={handleDelete}
          onExpand={handleExpand}
        />
        {expandedCityData && (
          <WeatherDetails
            city={expandedCityData.city}
            data={expandedCityData.data}
          />
        )}
      </Container>
    </>
  );
};
