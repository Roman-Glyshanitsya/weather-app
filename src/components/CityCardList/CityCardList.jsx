import { CityCard } from '../CityCard/CityCard';

export const CityCardList = ({ weatherData, cityInfo }) => {
  return (
    <ul>
      <CityCard data={weatherData} city={cityInfo} />
    </ul>
  );
};
