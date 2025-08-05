import { format } from 'date-fns';
import s from './Hero.module.css';
import loupe from '../../images/loupe.png';

export const Hero = ({ date = new Date(), query, onChange, onSubmit }) => {
  const line1 = format(date, 'MMMM yyyy'); // October 2023
  const line2 = format(date, 'EEEE, do'); // Friday, 13th

  return (
    <section className={s.hero}>
      <h1 className={s.heroTitle}>Weather dashboard</h1>
      <div className={s.line}></div>
      <div className={s.textContainer}>
        <p className={s.heroText}>
          Create your personal list of favorite cities and always be aware of
          the weather.
        </p>
        <p className={s.heroDate}>
          {line1} <br /> {line2}
        </p>
      </div>
      <form className={s.searchForm} onSubmit={onSubmit}>
        <input
          className={s.searchFormInput}
          onChange={onChange}
          value={query}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search location..."
        />
        <button type="submit" className={s.searchFormBtn}>
          <img src={loupe} alt="loupe" className={s.searchFormBtnImage} />
        </button>
      </form>
    </section>
  );
};
