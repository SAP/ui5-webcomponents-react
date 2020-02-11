import React from 'react';
import { RechartComposed } from './RechartComposed';
import { Line } from '../../elements/Line';
import { Bar } from '../../elements/Bar';

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

const singleData = [
  {
    xValue: 'January',
    data: 100
  },
  {
    xValue: 'February',
    data: 300
  },
  {
    xValue: 'March',
    data: 530
  },
  {
    xValue: 'April',
    data: 200
  }
];

export default {
  title: 'Rechart - ComposedChart',
  component: RechartComposed
};

const clickHandler = (data) => {
  console.log(data);
};

const renderComposedChart = () => (
  <RechartComposed
    width={'95%'}
    height={'40vh'}
    dataset={dataset}
    labelKey={'xValue'}
    legendClickHandler={clickHandler}
    chartConfig={{
      yAxisVisible: true,
      xAxisVisible: true,
      gridStroke: 'white',
      legendVisible: true,
      gridVertical: false,
      gridHorizontal: true,
      legendPosition: 'bottom',
      secondYAxis: {
        name: 'USER STATISTICS',
        dataKey: 'users',
        color: 'orange'
      }
    }}
  >
    <Bar dataKey={'sessions'} chartConfig={{ fillOpacity: 0.1 }} />
    <Line dataPointClickHandler={clickHandler} dataKey={'users'} stroke={'orange'} strokeWidth={3.5} />
    <Line dataKey={'volume'} stroke={'lightblue'} strokeWidth={1} />)
  </RechartComposed>
);

renderComposedChart.story = {
  name: 'Default'
};
export const composedChart = renderComposedChart();

const renderComposedChartPlaceholder = () => (
  <RechartComposed width={'30%'} height={'40vh'} labelKey={'xValue'}>
    <Line dataKey={'volume'} stroke={'lightblue'} strokeWidth={1} />)
  </RechartComposed>
);

renderComposedChartPlaceholder.story = {
  name: 'Loading Placeholder'
};
export const composedChartPlaceHolder = renderComposedChartPlaceholder();
