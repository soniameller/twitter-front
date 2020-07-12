import axios from 'axios';
import { text } from './../data/todes.json';

const instance = axios.create({
  baseURL: '/api/authentication',
});

const getTweets = (data) =>
  new Promise((resolve, reject) => {
    resolve(text);
    // instance
    //   .post('/tweets', data)
    //   .then((result) => {
    //     const user = result.data.user;
    //     resolve(user);
    //   })
    //   .catch(reject);
  });

export { getTweets };
