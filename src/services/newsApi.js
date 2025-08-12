const BASE_URL = 'https://gnews.io/api/v4';
const API_KEY = '403f50e2c930ed07458262c721a12b6c';

export default function fetchNews(
  query = 'pets',
  max = 4,
  lang = 'en',
  page = 1
) {
  return fetch(
    `${BASE_URL}/search?q=${encodeURIComponent(
      query
    )}&lang=${lang}&max=${max}&page=${page}&sortby=publishedAt&apikey=${API_KEY}`
  )
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    })
    .then(data => data.articles);
}
