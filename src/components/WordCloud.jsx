import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import ReactWordcloud from 'react-wordcloud';
import { Resizable } from 're-resizable';
import words from './../data/words';

const resizeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // border: 'solid 1px #ddd',
  // background: '#f0f0f0',
};

const options = {
  // Blues
  colors: ['#20a1f1d4', '#3f51b5bf', '#70c9f7c9', '#00bcd49e'],
  // Purples
  // colors: ['#3f51b5;', '#9a71c2', '#9bb57e', '#506953', '#614879', '#bd65c1', '#009688'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  fontSizes: [5, 80],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

export default class WordCloud extends Component {
  render() {
    return (
      <div style={{ margin: '4em' }}>
        <Resizable
          defaultSize={{
            width: 700,
            height: 350,
          }}
          style={resizeStyle}
        >
          <div style={{ width: '100%', height: '100%' }}>
            <ReactWordcloud options={options} words={words} />
          </div>
        </Resizable>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<WordCloud />, rootElement);
