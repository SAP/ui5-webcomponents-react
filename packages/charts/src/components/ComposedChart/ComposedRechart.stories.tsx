import React from 'react';
import { ComposedChart } from './ComposedRechart';
import { Line } from 'recharts';
import { Bar } from 'recharts';
import { action } from '@storybook/addon-actions';

const dataset = [
  {
    name: 'January',
    users: 100,
    sessions: 300,
    volume: 756
  },
  {
    name: 'February',
    users: 230,
    sessions: 330,
    volume: 880
  },
  {
    name: 'March',
    users: 240,
    sessions: 404,
    volume: 700
  },
  {
    name: 'April',
    users: 280,
    sessions: 80,
    volume: 604
  },
  {
    name: 'May',
    users: 100,
    sessions: 300,
    volume: 756
  },
  {
    name: 'June',
    users: 230,
    sessions: 330,
    volume: 880
  },
  {
    name: 'July',
    users: 20,
    sessions: 470,
    volume: 450
  },
  {
    name: 'August',
    users: 220,
    sessions: 180,
    volume: 104
  },
  {
    name: 'September',
    users: 200,
    sessions: 360,
    volume: 879
  },
  {
    name: 'October',
    users: 250,
    sessions: 500,
    volume: 200
  },
  {
    name: 'November',
    users: 240,
    sessions: 404,
    volume: 700
  },
  {
    name: 'December',
    users: 280,
    sessions: 80,
    volume: 604
  }
];

export default {
  title: 'Charts / ComposedChart',
  component: ComposedChart
};

export const renderComposedChart = () => (
  <ComposedChart
    width={'95%'}
    height={'40vh'}
    dataset={dataset}
    onLegendClick={action('onLegendClick')}
    onDataPointClick={action('onDataPointClick')}
  >
    <Bar dataKey={'sessions'} chartConfig={{ fillOpacity: 0.1 }} />
    <Line dataKey={'users'} color={'orange'} strokeOpacity={0.7} strokeWidth={3.5} />
    <Line dataKey={'volume'} color={'lightblue'} strokeWidth={2} />)
  </ComposedChart>
);

renderComposedChart.story = {
  name: 'Default'
};

export const renderComposedChartPlaceholder = () => (
  <ComposedChart width={'30%'} height={'40vh'} labelKey={'name'}>
    <Line dataKey={'volume'} stroke={'lightblue'} strokeWidth={1} />)
  </ComposedChart>
);

renderComposedChartPlaceholder.story = {
  name: 'Loading placeholder'
};

export const renderComposedStackedChart = () => (
  <ComposedChart
    width={'95%'}
    height={'40vh'}
    dataset={dataset}
    labelKey={'name'}
    onLegendClick={action('onLegendClick')}
    onDataPointClick={action('onDataPointClick')}
    chartConfig={{
      yAxisVisible: true,
      xAxisVisible: true,
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
  </ComposedChart>
);

renderComposedStackedChart.story = {
  name: 'With stacked chart'
};

export const renderLabelComposedChart = () => (
  <ComposedChart
    width={'95%'}
    height={'40vh'}
    dataset={dataset}
    onLegendClick={action('onLegendClick')}
    onDataPointClick={action('onDataPointClick')}
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
  </ComposedChart>
);

renderLabelComposedChart.story = {
  name: 'With data label chart'
};
