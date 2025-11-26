import tempNameIcon from '../../images/1-temp-icon.png';
import tempSunriseIcon from '../../images/1-sunrise-icon.png';
import humidityIcon from '../../images/humidity.png';
import pressureIcon from '../../images/pressure.png';
import windIcon from '../../images/wind.png';
import visibilityIcon from '../../images/visibility.png';
import closeIcon from '../../images/closeIcon.png';
import s from './WeatherDetails.module.css';

export const WeatherDetails = ({ city, data }) => {
  if (!city || !data) return null;

  const { feels_like, temp_min, temp_max, humidity, pressure } = data.main;

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  function convertUnixToTime(unix) {
    const date = new Date(unix * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const sunriseUnix = data.sys.sunrise;
  const sunsetUnix = data.sys.sunset;

  const sunriseTime = convertUnixToTime(sunriseUnix);
  const sunsetTime = convertUnixToTime(sunsetUnix);

  console.log('Sunrise:', sunriseTime);
  console.log('Sunset:', sunsetTime);

  const windSpeed = data.wind?.speed;
  const visibility = data.visibility;

  const description = data.weather?.[0]?.description;

  return (
    <div className={s.detailsContainer}>
      <button type="button" className={s.closeButton}>
        <img src={closeIcon} alt="close icon" />
      </button>
      <p className={s.cityName}>{city.name}</p>
      <p className={s.cityTemp}>
        {Math.round(data.main.temp)}&deg; | {description}
      </p>
      <p className={s.detailsName}>
        <img src={tempNameIcon} alt="tempNameIcon" className={s.tempNameIcon} />
        Temperature
      </p>
      <ul className={s.detailsList}>
        <li className={s.detailItem}>
          <p className={s.detailItemTitle}>
            {' '}
            <img
              src={tempNameIcon}
              alt="tempNameIcon"
              className={s.tempNameIcon}
            />{' '}
            Feels like
          </p>
          <p className={s.detailItemData}>{Math.round(feels_like)}℃</p>
          <img src={iconUrl} alt="icon" className={s.weatherIcon} />
        </li>
        <li className={s.detailItem}>
          <p className={s.detailItemTitle}>
            {' '}
            <img
              src={tempSunriseIcon}
              alt="tempSunriseIcon"
              className={s.tempSunriseIcon}
            />{' '}
            sunrise
          </p>
          <p className={s.detailItemData}>6:28AM</p>
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
