import { action } from '@storybook/addon-actions';
import { LineChart } from '@ui5/webcomponents-react-charts/lib/next/LineChart';
import React from 'react';

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

const singleData = [
  {
    name: 'January',
    data: 100
  },
  {
    name: 'February',
    data: 300
  },
  {
    name: 'March',
    data: 530
  },
  {
    name: 'April',
    data: 200
  }
];

export default {
  title: 'Charts / LineChart',
  component: LineChart
};

export const renderStory = () => {
  return (
    <LineChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={dataset}
      width={'95%'}
      height={'40vh'}
      noLegend={false}
      loading={true}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderStoryWithCustomColor = () => (
  <LineChart
    onDataPointClick={action('onDataPointClick')}
    labelKey={'name'}
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
    <LineChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      labelKey={'name'}
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

export const loadingPlaceholder = () => <LineChart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
