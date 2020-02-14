import React from 'react';
import DonutRechart from './DonutRechart';
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
  component: DonutRechart
};

export const renderStory = () => {
  return (
    <DonutRechart
      onLegendClickHandler={action('onDataPointClickHandler')}
      onDataPointClickHandler={action('onLegendClickHandler')}
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      chartConfig={{ dataLabel: true, innerRadius: '50%' }}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderCustomColorStory = () => {
  return (
    <DonutRechart
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      color={'lightblue'}
      chartConfig={{ dataLabel: true, innerRadius: '50%' }}
    />
  );
};

renderCustomColorStory.story = {
  name: 'With custom color'
};

export const withPaddingStory = () => {
  return (
    <DonutRechart
      width={'50%'}
      dataset={dataset}
      labelKey={'name'}
      chartConfig={{ dataLabel: true, innerRadius: '50%', paddingAngle: 5 }}
    />
  );
};

withPaddingStory.story = {
  name: 'With padding angle'
};

export const loadingPlaceholder = () => <DonutRechart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
