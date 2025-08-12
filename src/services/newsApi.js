const BASE_URL = `https://newsapi.org/v2`;
const API_KEY = '47b7b741c585484186f858c67f55d031';

export default function fetchNews(
  query = 'pets',
  pageSize = 4,
  language = 'en'
) {
  return fetch(
    `${BASE_URL}/everything?q=${query}&pageSize=${pageSize}&language=${language}&sortBy=publishedAt&apiKey=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error());
    })
    .then(data => {
      return data.articles;
    });
}
