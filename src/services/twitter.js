import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
});

const getTweets = (data) =>
  new Promise((resolve, reject) => {
    instance
      .get('/heroes', data)
      .then((result) => {
        console.log('/heroes', result);
        const heroes = result.data;
        resolve(heroes);
      })
      .catch(reject);
  });

export { getTweets };
