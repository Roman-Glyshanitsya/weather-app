import { format } from 'date-fns';
import s from './CityCard.module.css';
import deleteIcon from '../../images/closeIcon.png';

export const CityCard = ({ id, city, data, onDelete, onExpand }) => {
  if (!data || !city) {
    return <li>Loading weather data...</li>;
  }

  const localTime = new Date((data.dt + data.timezone) * 1000);
  // const icon = data.weather?.[0]?.icon;
  const description = data.weather?.[0]?.description;

  return (
    <li key={id} className={s.cardItem} onClick={onExpand}>
      <button type="button" className={s.deleteBtn}>
        <img src={deleteIcon} alt="refresh" onClick={() => onDelete(id)} />
      </button>
      <div className={s.locationThumb}>
        <div>
          <p className={s.cityName}>
            {city.name}, {city.country}
          </p>
          <p className={s.time}>{format(localTime, 'HH:mm')}</p>
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
    </li>
  );
};
