import { action } from '@storybook/addon-actions';
import React from 'react';
import { RadarChart } from './RadarRechart';

const dataset = [
  {
    label: 'January',
    users: 100,
    sessions: 300
  },
  {
    label: 'February',
    users: 230,
    sessions: 330
  },
  {
    label: 'March',
    users: 240,
    sessions: 404
  },
  {
    label: 'April',
    users: 280,
    sessions: 80
  },
  {
    label: 'May',
    users: 100,
    sessions: 300
  },
  {
    label: 'June',
    users: 230,
    sessions: 330
  },
  {
    label: 'July',
    users: 200,
    sessions: 470
  },
  {
    label: 'August',
    users: 220,
    sessions: 180
  },
  {
    label: 'September',
    users: 200,
    sessions: 360
  },
  {
    label: 'October',
    users: 250,
    sessions: 500
  },
  {
    label: 'November',
    users: 240,
    sessions: 404
  },
  {
    label: 'December',
    users: 280,
    sessions: 80
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
  title: 'Charts / RadarRechart',
  component: RadarChart
};

export const renderStory = () => {
  return (
    <RadarChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={dataset}
      width={'50%'}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const withCustomColorStory = () => {
  return (
    <RadarChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      color={'lightblue'}
      dataset={singleData}
      labelKey={'name'}
      width={'50%'}
    />
  );
};

withCustomColorStory.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <RadarChart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const withPolygonStory = () => {
  return (
    <RadarChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={dataset}
      width={'50%'}
      chartConfig={{ polarGridType: 'polygon' }}
    />
  );
};

withPolygonStory.story = {
  name: 'Radar as polygon'
};

export const renderFormatterStory = () => {
  return (
    <RadarChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      xAxisFormatter={(el) => el.slice(0, 3)}
      yAxisFormatter={(el) => el / 10}
      dataLabelFormatter={(d) => d / 10}
      dataset={dataset}
      width={'50%'}
      chartConfig={{
        dataLabel: true
      }}
    />
  );
};

renderFormatterStory.story = {
  name: 'With formatter'
};
