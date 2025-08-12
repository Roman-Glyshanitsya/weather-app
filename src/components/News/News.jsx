import { useState, useEffect } from 'react';
import css from './News.module.css';
import fetchNews from '../../services/newsApi';

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews('pets OR animals OR dogs OR cats OR wildlife  ', 4, 'en')
      .then(setArticles)
      .catch(console.error);
  }, []);

  return (
    <section className={css.news__section}>
      <h2 className={css.news__title}>Interacting with our pets</h2>
      <ul className={css.news__list}>
        {articles.map((article, index) => (
          <li key={index} className={css.news__item}>
            <img
              src={article.urlToImage}
              alt={article.title}
              className={css.news__img}
            />
            <p className={css.news__text}>{article.title}</p>
          </li>
        ))}
      </ul>
      <button className={css.news__btn} type="button">
        See more
      </button>
    </section>
  );
}
