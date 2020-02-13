import React from 'react';
import { ComposedRechart } from './ComposedRechart';
import { Line } from 'recharts';
import { Bar } from 'recharts';

const dataset = [
  {
    xValue: 'January',
    users: 100,
    sessions: 300,
    volume: 756
  },
  {
    xValue: 'February',
    users: 230,
    sessions: 330,
    volume: 880
  },
  {
    xValue: 'March',
    users: 240,
    sessions: 404,
    volume: 700
  },
  {
    xValue: 'April',
    users: 280,
    sessions: 80,
    volume: 604
  },
  {
    xValue: 'May',
    users: 100,
    sessions: 300,
    volume: 756
  },
  {
    xValue: 'June',
    users: 230,
    sessions: 330,
    volume: 880
  },
  {
    xValue: 'July',
    users: 20,
    sessions: 470,
    volume: 450
  },
  {
    xValue: 'August',
    users: 220,
    sessions: 180,
    volume: 104
  },
  {
    xValue: 'September',
    users: 200,
    sessions: 360,
    volume: 879
  },
  {
    xValue: 'October',
    users: 250,
    sessions: 500,
    volume: 200
  },
  {
    xValue: 'November',
    users: 240,
    sessions: 404,
    volume: 700
  },
  {
    xValue: 'December',
    users: 280,
    sessions: 80,
    volume: 604
  }
];

export default {
  title: 'Charts / ComposedChart',
  component: ComposedRechart
};

const clickHandler = (data) => {
  console.log(data);
};

const renderComposedChart = () => (
  <ComposedRechart
    width={'95%'}
    height={'40vh'}
    dataset={dataset}
    labelKey={'xValue'}
    legendClickHandler={clickHandler}
    dataPointClickHandler={clickHandler}
    chartConfig={{
      yAxisVisible: true,
      xAxisVisible: true,
      gridStroke: 'white',
      legendVisible: true,
      gridVertical: false,
      gridHorizontal: true,
      legendPosition: 'bottom',
      zoomingTool: true
    }}
  >
    <Bar dataKey={'sessions'} chartConfig={{ fillOpacity: 0.1 }} />
    <Line dataKey={'users'} color={'orange'} strokeOpacity={0.7} strokeWidth={3.5} />
    <Line dataKey={'volume'} color={'lightblue'} strokeWidth={2} />)
  </ComposedRechart>
);

export const composedChart = renderComposedChart();

composedChart.story = {
  name: 'Default'
};

const renderComposedChartPlaceholder = () => (
  <ComposedRechart width={'30%'} height={'40vh'} labelKey={'xValue'}>
    <Line dataKey={'volume'} stroke={'lightblue'} strokeWidth={1} />)
  </ComposedRechart>
);

export const composedChartPlaceHolder = renderComposedChartPlaceholder();

composedChartPlaceHolder.story = {
  name: 'Loading placeholder'
};

const renderComposedStackedChart = () => (
  <ComposedRechart
    width={'95%'}
    height={'40vh'}
    dataset={dataset}
    labelKey={'xValue'}
    legendClickHandler={clickHandler}
    dataPointClickHandler={clickHandler}
    chartConfig={{
      yAxisVisible: true,
      xAxisVisible: true,
      gridStroke: 'white',
      legendVisible: true,
      gridVertical: false,
      gridHorizontal: true,
      legendPosition: 'bottom',
      zoomingTool: true,
      stacked: true,
      secondYAxis: {
        name: 'USER STATISTICS',
        dataKey: 'users',
        color: 'orange'
      }
    }}
  >
    <Bar dataKey={'sessions'} chartConfig={{ fillOpacity: 0.1 }} />
    <Bar dataKey={'volume'} strokeWidth={2} />)
    <Line dataKey={'users'} color={'orange'} strokeOpacity={0.7} strokeWidth={3.5} />
  </ComposedRechart>
);

export const composedStackedChart = renderComposedStackedChart();

composedStackedChart.story = {
  name: 'With stacked chart'
};

const renderLabelComposedChart = () => (
  <ComposedRechart
    width={'95%'}
    height={'40vh'}
    dataset={dataset}
    labelKey={'xValue'}
    legendClickHandler={clickHandler}
    dataPointClickHandler={clickHandler}
    chartConfig={{
      yAxisVisible: true,
      xAxisVisible: true,
      gridStroke: 'white',
      legendVisible: true,
      gridVertical: false,
      gridHorizontal: true,
      legendPosition: 'bottom',
      zoomingTool: true,
      dataLabel: true,
      secondYAxis: {
        name: 'USER STATISTICS',
        dataKey: 'volume',
        color: 'lightblue'
      }
    }}
  >
    <Bar dataKey={'sessions'} chartConfig={{ fillOpacity: 0.1 }} />
    <Line dataKey={'volume'} color={'lightblue'} strokeWidth={3} />)
  </ComposedRechart>
);

export const composedLabelChart = renderLabelComposedChart();

composedLabelChart.story = {
  name: 'With data label chart'
};
