import { CityCard } from '../CityCard/CityCard';
import s from './CityCardList.module.css';

export const CityCardList = ({ cities, onDelete, onExpand }) => {
  return (
    <ul className={s.cardList}>
      {cities.map(({ id, city, data }) => (
        <CityCard
          key={id}
          id={id}
          city={city}
          data={data}
          onDelete={onDelete}
          onExpand={() => onExpand({ id, city, data })}
        />
      ))}
    </ul>
  );
};
