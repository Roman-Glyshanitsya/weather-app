import tempIcon from '../../images/temp.png';
import humidityIcon from '../../images/humidity.png';
import pressureIcon from '../../images/pressure.png';
import windIcon from '../../images/wind.png';
import visibilityIcon from '../../images/visibility.png';
import s from './WeatherDetails.module.css';

export const WeatherDetails = ({ city, data }) => {
  if (!city || !data) return null;

  const { feels_like, temp_min, temp_max, humidity, pressure } = data.main;

  const windSpeed = data.wind?.speed;
  const visibility = data.visibility;

  return (
    <div className={s.detailsContainer}>
      <ul className={s.detailsList}>
        <li className={s.detailItem}>
          <p className={s.detailItemText}>Feels like</p>
          <p className={s.detailItemData}>{Math.round(feels_like)}℃</p>
          <img src={tempIcon} alt="tempIcon" className={s.detailItemImage} />
        </li>
        <li className={s.detailItem}>
          <p className={s.detailItemText}>Min ℃</p>
          <p className={s.detailItemData}>{Math.round(temp_min)}℃</p>
          <p className={s.detailItemText}>Max ℃</p>
          <p className={s.detailItemData}>{Math.round(temp_max)}℃</p>
        </li>
        <li className={s.detailItem}>
          <p className={s.detailItemText}>Humidity</p>
          <p className={s.detailItemData}>{humidity}%</p>
          <img
            src={humidityIcon}
            alt="humidityIcon"
            className={s.detailItemImage}
          />
        </li>
        <li className={s.detailItem}>
          <p className={s.detailItemText}>Pressure</p>
          <p className={s.detailItemData}>{pressure} Pa</p>
          <img
            src={pressureIcon}
            alt="pressureIcon"
            className={s.detailItemImage}
          />
        </li>
        <li className={s.detailItem}>
          <p className={s.detailItemText}>Wind speed</p>
          <p className={s.detailItemData}>{windSpeed} m/s</p>
          <img src={windIcon} alt="windIcon" className={s.detailItemImage} />
        </li>
        <li className={s.detailItem}>
          <p className={s.detailItemText}>Visibility</p>
          <p className={s.detailItemData}>{visibility / 1000} km</p>
          <img
            src={visibilityIcon}
            alt="visibilityIcon"
            className={s.detailItemImage}
          />
        </li>
      </ul>
    </div>
  );
};
