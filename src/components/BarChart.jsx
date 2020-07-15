import React, { Component } from 'react';
import Chart from 'chart.js';
import { Box } from '@material-ui/core';

export default class BarChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'bar',
      data: {
        //Bring in data
        labels: ['Negative', 'Neutral', 'Positive', 'Compound'],
        datasets: [
          {
            label: 'Sentiment(?)',
            data: [86, 67, 91, 95],
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
