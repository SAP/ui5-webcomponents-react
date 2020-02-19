import React from 'react';
import { DonutChart } from './DonutRechart';
import { action } from '@storybook/addon-actions';

const dataset = [
  {
    name: 'January',
    users: 100
  },
  {
    name: 'February',
    users: 230
  },
  {
    name: 'March',
    users: 240
  },
  {
    name: 'April',
    users: 280
  },
  {
    name: 'May',
    users: 100
  },
  {
    name: 'June',
    users: 230
  },
  {
    name: 'July',
    users: 20
  },
  {
    name: 'August',
    users: 220
  },
  {
    name: 'September',
    users: 200
  },
  {
    name: 'October',
    users: 250
  },
  {
    name: 'November',
    users: 240
  },
  {
    name: 'December',
    users: 280
  }
];

export default {
  title: 'Charts / DonutChart',
  component: DonutChart
};

export const renderStory = () => {
  return (
    <DonutChart
      onLegendClickHandler={action('onLegendClickHandler')}
      onDataPointClickHandler={action('onDataPointClickHandler')}
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      chartConfig={{ dataLabel: true }}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderCustomColorStory = () => {
  return (
    <DonutChart
      onLegendClickHandler={action('onLegendClickHandler')}
      onDataPointClickHandler={action('onDataPointClickHandler')}
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      color={'lightblue'}
      chartConfig={{ dataLabel: true }}
    />
  );
};

renderCustomColorStory.story = {
  name: 'With custom color'
};

export const withPaddingStory = () => {
  return (
    <DonutChart
      onLegendClickHandler={action('onLegendClickHandler')}
      onDataPointClickHandler={action('onDataPointClickHandler')}
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      chartConfig={{ dataLabel: true, paddingAngle: 5 }}
    />
  );
};

withPaddingStory.story = {
  name: 'With padding angle'
};

export const withCustomnRadiusStory = () => {
  return (
    <DonutChart
      onLegendClickHandler={action('onLegendClickHandler')}
      onDataPointClickHandler={action('onDataPointClickHandler')}
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      chartConfig={{ dataLabel: true, innerRadius: '25%' }}
    />
  );
};

withCustomnRadiusStory.story = {
  name: 'With custom inner radius'
};

export const loadingPlaceholder = () => <DonutChart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
