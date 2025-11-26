// import { format } from 'date-fns';
import s from './CityCard.module.css';
import deleteIcon from '../../images/closeIcon.png';

export const CityCard = ({ id, city, data, onDelete, onExpand }) => {
  if (!data || !city) {
    return <li>Loading weather data...</li>;
  }

  // отримуємо локальний час міста (рядок "HH:MM")
  function formatCityLocalTime(unix, timezoneOffset) {
    const localTime = (unix + timezoneOffset) * 1000;
    const date = new Date(localTime);

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  const localTimeString = formatCityLocalTime(data.dt, data.timezone);

  // const icon = data.weather?.[0]?.icon;
  const description = data.weather?.[0]?.description;

  return (
    <li key={id} className={s.cardItem}>
      <button
        type="button"
        className={s.deleteBtn}
        onClick={() => onDelete(id)}
      >
        <img src={deleteIcon} alt="refresh" />
      </button>
      <div onClick={onExpand}>
        <div className={s.locationThumb}>
          <div>
            <p className={s.cityName}>
              {city.name}, {city.country}
            </p>
            <p className={s.time}>{localTimeString}</p>
          </div>
          <p className={s.temp}>{Math.round(data.main.temp)}&deg;</p>
        </div>
        <div className={s.footerThumb}>
          <p className={s.description}>{description}</p>
          <div className={s.tempThumb}>
            <p>H:{Math.round(data.main.temp_max)}&deg;</p>
            <p>L:{Math.round(data.main.temp_min)}&deg;</p>
          </div>
        </div>
        <button type="button" className={s.moreBtn}>
          See more
        </button>
      </div>
    </li>
  );
};
