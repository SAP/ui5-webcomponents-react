import React from 'react';
import { LineRechart } from './LineRechart';
import { action } from '@storybook/addon-actions';

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
  title: 'Charts / LineChart',
  component: LineRechart
};

export const renderStory = () => {
  return (
    <LineRechart
      onDataPointClickHandler={action('onDataPointClickHandler')}
      onLegendClickHandler={action('onLegendPointClickHandler')}
      labelKey={'xValue'}
      dataset={dataset}
      width={'95%'}
      height={'40vh'}
      noLegend={false}
      loading={true}
      chartConfig={{
        strokeWidth: 1.5,
        xAxisVisible: true,
        yAxisVisible: true,
        secondYAxis: { dataKey: 'volume', name: 'USED DATA VOLUME' }
      }}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderStoryWithCustomColor = () => (
  <LineRechart
    onDataPointClickHandler={action('onDataPointClickHandler')}
    labelKey={'xValue'}
    dataset={singleData}
    color={'red'}
    width={'95%'}
    height={'40vh'}
    chartConfig={{
      dataLabel: true,
      strokeWidth: 2,
      strokeOpacity: 0.5
    }}
  />
);

renderStoryWithCustomColor.story = {
  name: 'With custom color'
};

export const renderLabelStory = () => {
  return (
    <LineRechart
      onDataPointClickHandler={action('onDataPointClickHandler')}
      onLegendClickHandler={action('onLegendClickHandler')}
      labelKey={'xValue'}
      dataset={dataset}
      width={'95%'}
      height={'40vh'}
      noLegend={false}
      loading={true}
      chartConfig={{
        zoomingTool: true,
        strokeWidth: 1.5,
        dataLabel: true
      }}
    />
  );
};

renderLabelStory.story = {
  name: 'With data labels'
};

export const loadingPlaceholder = () => <LineRechart labelKey={'xValue'} width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
