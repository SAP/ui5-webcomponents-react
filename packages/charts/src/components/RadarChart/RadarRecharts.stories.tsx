import React from 'react';
import { RadarRechart } from './RadarRechart';
import { action } from '@storybook/addon-actions';

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
  component: RadarRechart
};

export const renderStory = () => {
  return (
    <RadarRechart
      onDataPointClickHandler={action('onDataPointClickHandler')}
      onLegendClickHandler={action('onLegendClickHandler')}
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
    <RadarRechart
      onDataPointClickHandler={action('onDataPointClickHandler')}
      onLegendClickHandler={action('onLegendClickHandler')}
      color={'lightblue'}
      labelKey={'xValue'}
      dataset={singleData}
      width={'50%'}
    />
  );
};

withCustomColorStory.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <RadarRechart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const withPolygonStory = () => {
  return (
    <RadarRechart
      onDataPointClickHandler={action('onDataPointClickHandler')}
      onLegendClickHandler={action('onLegendClickHandler')}
      dataset={dataset}
      width={'50%'}
      chartConfig={{ polarGridType: 'polygon' }}
    />
  );
};

withPolygonStory.story = {
  name: 'Radar as polygon'
};
