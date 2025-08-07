import { format } from 'date-fns';
import s from './CityCard.module.css';
import refreshIcon from '../../images/refresh.png';
import likeIcon from '../../images/heart.png';
import deleteIcon from '../../images/delete.png';

export const CityCard = ({ id, city, data, onDelete, onExpand }) => {
  if (!data || !city) {
    return <li>Loading weather data...</li>;
  }

  const dt = new Date(data.dt * 1000);
  const icon = data.weather?.[0]?.icon;
  const description = data.weather?.[0]?.description;

  return (
    <li key={id} className={s.cardItem}>
      <div className={s.locationThumb}>
        <p>{city.name}</p>
        <p>{city.country}</p>
      </div>
      <p className={s.time}>{format(dt, 'HH:mm')}</p>
      <div className={s.forecastBtnsThumb}>
        <button type="button" className={s.forecastBtn}>
          Hourly forecast
        </button>
        <button type="button" className={s.forecastBtn}>
          Weekly forecast
        </button>
      </div>
      <div className={s.date}>
        <p>{format(dt, 'dd.MM.yyyy')}</p>
        <p>{format(dt, 'EEEE')}</p>
      </div>

      <img
        className={s.icon}
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p className={s.temp}>{Math.round(data.main.temp)}℃</p>
      <div className={s.footerBtnsThumb}>
        <button type="button" className={s.refreshBtn}>
          <img src={refreshIcon} alt="refresh" />
        </button>
        <button type="button" className={s.likeBtn}>
          <img src={likeIcon} alt="refresh" />
        </button>
        <button type="button" className={s.moreBtn} onClick={onExpand}>
          See more
        </button>
        <button type="button" className={s.deleteBtn}>
          <img src={deleteIcon} alt="refresh" onClick={() => onDelete(id)} />
        </button>
      </div>
    </li>
  );
};
