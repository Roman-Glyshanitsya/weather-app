import { useState, useEffect } from 'react';
import css from './News.module.css';
import fetchNews from '../../services/newsApi';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchNews('pets OR animals OR dogs OR cats OR wildlife', 4, 'en')
      .then(data => {
        setArticles(data);
        setError('');
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load news');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className={css.news__section}>
      <h2 className={css.news__title}>Interacting with our pets</h2>

      {loading && <p>Loading news...</p>}
      {error && <p className={css.news__error}>{error}</p>}

      {!loading && !error && (
        <ul className={css.news__list}>
          {articles.map((article, index) => (
            <li key={index} className={css.news__item}>
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className={css.news__img}
                />
              )}
              <p className={css.news__text}>{article.title}</p>
            </li>
          ))}
        </ul>
      )}

      <button className={css.news__btn} type="button">
        See more
      </button>
    </section>
  );
}
