import { useState } from 'react';
import { fetchCoordinates, fetchWeather } from '../services/weatherApi';
import Container from './Container/Container';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { CityCardList } from './CityCardList/CityCardList';

export const App = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);

  const handleChange = e => setQuery(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const coords = await fetchCoordinates(query);
      const weather = await fetchWeather(coords);
      setCityInfo(coords);
      setWeatherData(weather);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Header />
      <Hero query={query} onChange={handleChange} onSubmit={handleSubmit} />
      {weatherData && cityInfo && (
        <CityCardList weatherData={weatherData} cityInfo={cityInfo} />
      )}
    </Container>
  );
};
