import { useState, useEffect } from 'react';
import { fetchCoordinates, fetchWeather } from '../services/weatherApi';
import Container from './Container/Container';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { CityCardList } from './CityCardList/CityCardList';

export const App = () => {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cities');
    if (saved) {
      setCities(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const coords = await fetchCoordinates(query);
      const weather = await fetchWeather(coords);

      const newCity = {
        id: Date.now(), // або `${coords.name}-${coords.country}`
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

      setCities(prev => [newCity, ...prev]);
      setQuery('');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = id => {
    const updated = cities.filter(item => item.id !== id);
    setCities(updated);
    localStorage.setItem('cities', JSON.stringify(updated));
  };

  return (
    <Container>
      <Header />
      <Hero query={query} onChange={handleChange} onSubmit={handleSubmit} />
      <CityCardList cities={cities} onDelete={handleDelete} />
    </Container>
  );
};
