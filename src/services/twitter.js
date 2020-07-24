import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

const getTweets = (formValues) =>
  new Promise((resolve, reject) => {
    const max_tweets = formValues.maxTweets;
    const query = formValues.query;
    const language = formValues.lang;

    instance
      .get(`/tweets/?query=${query}&maxTweets=${max_tweets}&lang=${language}`)
      .then((result) => {
        console.log('API result', result);
        const tweets = result.data;
        resolve(tweets);
      })
      .catch(reject);
  });

const generateTweet = (formValues) =>
  new Promise((resolve, reject) => {
    const start = formValues.start;
    const length = formValues.length;

    instance
      .get(`/predict/?start=${start}&length=${length}`)
      .then((result) => {
        console.log('API result', result);
        const tweet = result.data;
        resolve(tweet);
      })
      .catch(reject);
  });

const getSentiment = (formValues) =>
  new Promise((resolve, reject) => {
    const sentiment = formValues.sentiment;

    instance
      .post(`/tweets/sentiment`, sentiment)
      .then((result) => {
        const sentiment = result.data;
        console.log('RESULT.DATA', sentiment);
        resolve(sentiment);
      })
      .catch(reject);
  });

export { getTweets, getSentiment, generateTweet };
