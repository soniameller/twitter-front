import React, { Component } from 'react';
import Chart from 'chart.js';
import { Box } from '@material-ui/core';

export default class BarChart extends Component {
  chartRef = React.createRef();

  componentDidUpdate() {
    this.drawChart();
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const negative = this.props.wordSentiment.neg;
    const positive = this.props.wordSentiment.pos;
    const compound = this.props.wordSentiment.compound;
    const neutral = this.props.wordSentiment.neu;

    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'bar',
      // data: {
      //   labels: ['Negative', 'Positive'],
      //   datasets: [
      //     {
      //       label: '',
      //       data: [negative, positive],
      //       backgroundColor: ['#20a1f1d4', '#3f51b5bf'],
      //     },
      //   ],
      // },
      data: {
        //Bring in data
        labels: ['Negative', 'Neutral', 'Positive', 'Compound'],
        datasets: [
          {
            label: '',
            data: [negative, neutral, positive, compound],
            backgroundColor: ['#20a1f1d4', '#3f51b5bf', '#70c9f7c9', '#00bcd49e'],
          },
        ],
      },
    });
  }

  render() {
    return (
      <Box width="30vw">
        <canvas id="myChart" width="400" height="400" ref={this.chartRef}></canvas>
      </Box>
    );
  }
}
