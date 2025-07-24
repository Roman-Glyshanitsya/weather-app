import { format } from 'date-fns';
import s from './Hero.module.css';

export const Hero = ({ date = new Date(), query, onChange, onSubmit }) => {
  const line1 = format(date, 'MMMM yyyy'); // October 2023
  const line2 = format(date, 'EEEE, do'); // Friday, 13th

  return (
    <section className={s.hero}>
      <h1 className={s.heroTitle}>Weather dashboard</h1>
      <div className={s.line}></div>
      <p>
        Create your personal list of favorite cities and always be aware of the
        weather.
      </p>
      <p>
        {line1} <br /> {line2}
      </p>

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
        <button type="submit" className={s.searchFormBtn}></button>
      </form>
    </section>
  );
};
