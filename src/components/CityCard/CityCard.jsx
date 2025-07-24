import { format } from 'date-fns';

export const CityCard = ({ data, city }) => {
  if (!data?.current || !city) {
    return <li>Loading weather data...</li>;
  }

  const dt = new Date(data.current.dt * 1000);
  const icon = data.current.weather?.[0]?.icon;
  const description = data.current.weather?.[0]?.description;

  return (
    <li>
      <p>{city.name}</p>
      <p>{city.country}</p>
      <p>{format(dt, 'HH:mm')}</p>
      <button type="button">Hourly forecast</button>
      <button type="button">Weekly forecast</button>
      <p>{format(dt, 'dd.MM.yyyy')}</p>
      <p>{format(dt, 'EEEE')}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>{Math.round(data.current.temp)}℃</p>
    </li>
  );
};
