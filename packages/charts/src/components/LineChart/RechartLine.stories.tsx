import React from 'react';
import { LineRechart } from './RechartLine';
import { ComposedChartContainer } from '../../internal/ComposedChartContainer';
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
  title: 'Rechart',
  component: LineRechart
};

function renderStory() {
  return (
    <LineRechart labelKey={'xValue'} dataset={dataset} width={'95%'} height={'400px'} noLegend={false} loading={true} />
  );
}

const renderStoryWithCustomColor = () => (
  <LineRechart labelKey={'xValue'} dataset={singleData} color={'red'} width={'95%'} height={'400px'} />
);

export const withCustomColor = renderStoryWithCustomColor();

withCustomColor.story = {
  name: 'With Custom Color'
};

export const defaultStory = renderStory();

defaultStory.story = {
  name: 'Default'
};

export const loadingPlaceholder = () => (
  <LineRechart labelKey={'xValue'} color={'red'} width={'50%'} height={'400px'} />
);

loadingPlaceholder.story = {
  name: 'Loading Placeholder'
};

const renderComposedChart = () => (
  <ComposedChartContainer
    width={'95%'}
    height={'400px'}
    dataSet={dataset}
    dataLabel={'xValue'}
    loading={true}
    chartConfig={{
      yAxisVisible: true,
      xAxisVisible: true,
      gridStroke: 'white',
      legendVisible: true,
      gridVertical: false,
      gridHorizontal: true
    }}
  >
    <Bar dataKey={'sessions'} />

    <Line dataKey={'users'} stroke={'orange'} strokeWidth={2.5} />
    <Line dataKey={'volume'} strokg={'lightblue'} strokeWidth={1} />
  </ComposedChartContainer>
);

renderComposedChart.story = {
  name: 'Composed Chart'
};
export const composedChart = renderComposedChart();

const renderComposedChartPlaceholder = () => (
  <ComposedChartContainer
    width={'30%'}
    height={'400px'}
    dataSet={[]}
    dataLabel={'xValue'}
    loading={true}
    chartConfig={{ yAxisVisible: true }}
  >
    <Bar dataKey={'sessions'} />
    <Line dataKey={'users'} />
  </ComposedChartContainer>
);

renderComposedChartPlaceholder.story = {
  name: 'Composed Chart Placeholder'
};
export const composedChartPlaceHolder = renderComposedChartPlaceholder();
