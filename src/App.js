import React, { Component, Fragment } from 'react';
import TweetInput from './components/TweetInput';
import SentimentInput from './components/SentimentInput';
import TweetGenInput from './components/TweetGenInput';
import Code from './components/Code';
import Tweet from './components/Tweet';
import TopTweet from './components/TopTweet';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import WordCloud from './components/WordCloud';
import BarChart from './components/BarChart';
import Box from '@material-ui/core/Box';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null,
      sentiment: null,
      generated: null,
    };
  }
  loadTweets = (tweets) => {
    this.setState({ tweets });
  };

  loadSentiment = (sentiment) => {
    this.setState({ sentiment });
  };

  loadGenerated = (generated) => {
    this.setState({ generated: generated.tweet });
  };

  render() {
    return (
      <div>
        <Container fixed>
          <h1>Flask API </h1>
          <h2>Tweet analysis and generation </h2>

          <Box bgcolor="#f5eeee" p="5em" mt="1em">
            <h3>Scrape twitter</h3>
            <h5>Data Collection</h5>
            <p>
              <Link href="https://www.tweepy.org/" target="_blank" rel="noopener">
                Tweepy{' '}
              </Link>
              library has been used to get tweets by defining maximum amount of tweets, topic and
              language
            </p>
            <TweetInput loadTweets={this.loadTweets} />
            {this.state.tweets ? (
              <Fragment>
                <h4 mt="3em">Top 3 tweets</h4>
                {this.state.tweets.top_tweets.map((tweet, i) => {
                  return <TopTweet key={i} tweet={tweet}></TopTweet>;
                })}
                <h4 mt="3em">Word frequency</h4>
                <WordCloud wordFreq={this.state.tweets.word_freq}></WordCloud>
              </Fragment>
            ) : (
              ''
            )}
          </Box>
          <Box bgcolor="#f5eeee" p="5em" mt="1em">
            <h3>Sentiment Analysis</h3>
            <p>
              {' '}
              <Link
                href="https://www.nltk.org/_modules/nltk/sentiment/vader.html"
                target="_blank"
                rel="noopener"
              >
                NLTK Vader model{' '}
              </Link>{' '}
              has been applyed to analyse your tweet input sentiment
            </p>
            <SentimentInput loadSentiment={this.loadSentiment} />

            {this.state.sentiment ? (
              <div>
                {' '}
                <BarChart wordSentiment={this.state.sentiment}></BarChart>
                <small>
                  <p>
                    {'* The '}
                    <strong>Compound score</strong>{' '}
                    {
                      'is a metric that calculates the sum of all the lexicon ratings which have been normalized between -1(most extreme negative) and +1 (most extreme positive).'
                    }
                  </p>
                  <p>{'positive sentiment : (compound score >= 0.05)'}</p>
                  <p>
                    {'neutral sentiment : (compound score > -0.05) and (compound score < 0.05)'}
                  </p>
                  <p>{'negative sentiment : (compound score <= -0.05)'}</p>
                </small>
              </div>
            ) : (
              ''
            )}
          </Box>
          <Box bgcolor="#f5eeee" p="5em" mt="1em">
            <h3>Tweet generation</h3>
            <p>
              A model has been trained with the query <b>'todes'</b> in spanish
            </p>
            <TweetGenInput loadGenerated={this.loadGenerated} />
            {this.state.generated ? (
              <Box mt="2em">
                <Tweet tweet={this.state.generated} title="The model" at="@todes . now"></Tweet>
              </Box>
            ) : (
              ''
            )}
          </Box>

          <Code />
          <Box bgcolor="#f5eeee" p="5em" mt="1em">
            <h3>Name entity recognition</h3>
            <p>
              Under construction{' '}
              <span role="img" aria-label="Construction">
                {' '}
                👷🏽‍♀️ 🚧
              </span>
            </p>
          </Box>
        </Container>
      </div>
    );
  }
}
