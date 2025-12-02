import tempNameIcon from '../../images/1-temp-icon.png';
import tempSunriseIcon from '../../images/1-sunrise-icon.png';
import humidityIcon from '../../images/1-humidity-icon.png';
import closeIcon from '../../images/closeIcon.png';
import sunriseSunsetIcon from '../../images/sunrise-sunset.png';
import visibilityIcon from '../../images/1-visibility-icon.png';
import windIcon from '../../images/1-wind-icon.png';
import compassImage from '../../images/compass.png';
import s from './WeatherDetails.module.css';

export const WeatherDetails = ({ city, data }) => {
  if (!city || !data) return null;

  const { feels_like, humidity } = data.main;

  // weatherIcon
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Sunrise and Sunset time
  function convertUnixToTime(unix, timezoneOffset) {
    const localTime = (unix + timezoneOffset) * 1000;
    const date = new Date(localTime);

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  const sunriseUnix = data.sys.sunrise;
  const sunsetUnix = data.sys.sunset;
  const timezone = data.timezone;

  const sunriseTime = convertUnixToTime(sunriseUnix, timezone);
  const sunsetTime = convertUnixToTime(sunsetUnix, timezone);

  // Wind speed
  const windSpeed = data.wind?.speed;
  const visibility = data.visibility;

  // Wind Direction
  const windDeg = data.wind?.deg;
  const windDir = getWindDirection(windDeg);

  function getWindDirection(deg) {
    if (deg >= 337.5 || deg < 22.5) return 'N';
    if (deg >= 22.5 && deg < 67.5) return 'NE';
    if (deg >= 67.5 && deg < 112.5) return 'E';
    if (deg >= 112.5 && deg < 157.5) return 'SE';
    if (deg >= 157.5 && deg < 202.5) return 'S';
    if (deg >= 202.5 && deg < 247.5) return 'SW';
    if (deg >= 247.5 && deg < 292.5) return 'W';
    if (deg >= 292.5 && deg < 337.5) return 'NW';
  }

  const arrowRotation = windDeg + 180;

  // Weather description
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
          <p className={s.detailItemData}>{sunriseTime}</p>
          <img
            src={sunriseSunsetIcon}
            alt="icon"
            className={s.sunriseSunsetIcon}
          />
          <p className={s.detailItemText}>Sunset: {sunsetTime}</p>
        </li>
        <li className={s.detailItem}>
          <p className={s.detailItemTitle}>
            {' '}
            <img
              src={humidityIcon}
              alt="humidityIcon"
              className={s.tempSunriseIcon}
            />{' '}
            humidity
          </p>
          <p className={s.detailItemData}>{humidity}%</p>
        </li>
        <li className={s.detailItem}>
          <p className={s.detailItemTitle}>
            {' '}
            <img
              src={visibilityIcon}
              alt="visibilityIcon"
              className={s.tempNameIcon}
            />{' '}
            visibility
          </p>
          <p className={s.detailItemData}>{visibility / 1000} km</p>
        </li>
        <li className={s.detailItem}>
          <p className={s.detailItemTitle}>
            {' '}
            <img
              src={windIcon}
              alt="windIcon"
              className={s.tempSunriseIcon}
            />{' '}
            wind
          </p>
          <div className={s.windDirectionThumb}>
            <div className={s.windDirectionText}>
              <p className={s.detailItemText}>Wind: {windSpeed} m/s</p>
              <p className={s.detailItemText}>
                Direction: {windDeg}° {windDir}
              </p>
            </div>
            <div className={s.compassWrapper}>
              <img
                src={compassImage}
                alt="compass"
                className={s.compassImage}
              />
              {/* Arrow */}
              <div
                className={s.arrow}
                style={{ transform: `rotate(${arrowRotation}deg)` }}
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
