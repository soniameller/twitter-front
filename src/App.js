import React, { Component } from 'react';
import Input from './components/Input';
import Code from './components/Code';

import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: '',
    };
  }
  loadTweets = (tweets) => {
    this.setState({ tweets });
  };

  render() {
    return (
      <div>
        <Container fixed>
          <h1>Tweet analysis and generation </h1>
          <h2>Data Collection</h2>
          <p>
            <Link href="https://www.tweepy.org/" target="_blank" rel="noopener">
              This library{' '}
            </Link>
            has been used to get tweets by defining maximum amount of tweets, topic and language
          </p>
          <Code />
          {/* TODO - Solve this space some other way! */}
          <div style={{ height: '100px' }}></div>
          <h4>Scrape twitter</h4>
          <Input loadTweets={this.loadTweets} />
          <div>{this.state.tweets}</div>
        </Container>
      </div>
    );
  }
}
