import { format } from 'date-fns';
import Container from 'components/Container/Container';
import s from './Hero.module.css';
import loupe from '../../images/loupe.png';

export const Hero = ({ date = new Date(), query, onChange, onSubmit }) => {
  const line1 = format(date, 'MMMM yyyy');
  const line2 = format(date, 'EEEE, do');

  return (
    <section className={s.hero}>
      <Container>
        <h1 className={s.heroTitle}>Weather</h1>
        <p className={s.heroDate}>
          {line1} {line2}
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
          <button type="submit" className={s.searchFormBtn}>
            <img src={loupe} alt="loupe" className={s.searchFormBtnImage} />
          </button>
        </form>
      </Container>
    </section>
  );
};
