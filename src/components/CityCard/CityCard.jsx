import { format } from 'date-fns';
import s from './CityCard.module.css';
import deleteIcon from '../../images/delete.png';

export const CityCard = ({ id, city, data, onDelete, onExpand }) => {
  if (!data || !city) {
    return <li>Loading weather data...</li>;
  }

  const localTime = new Date((data.dt + data.timezone) * 1000);
  const icon = data.weather?.[0]?.icon;
  const description = data.weather?.[0]?.description;

  return (
    <li key={id} className={s.cardItem}>
      <div>
        <p className={s.cityName}>
          {city.name}, {city.country}
        </p>
        <p className={s.time}>{format(localTime, 'HH:mm')}</p>
      </div>
      {/* <img
        className={s.icon}
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        /> */}
      <p className={s.time}>{description}</p>
      <p className={s.temp}>{Math.round(data.main.temp)}℃</p>
      <button type="button" className={s.moreBtn} onClick={onExpand}>
        See more
      </button>
      <button type="button" className={s.deleteBtn}>
        <img src={deleteIcon} alt="refresh" onClick={() => onDelete(id)} />
      </button>
    </li>
  );
};
