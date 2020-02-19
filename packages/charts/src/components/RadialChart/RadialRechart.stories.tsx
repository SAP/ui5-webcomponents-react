import React from 'react';
import { RadialChart } from './RadialRechart';
import { action } from '@storybook/addon-actions';

const dataset = [
  {
    name: 'January',
    data: 100,
    users: 200
  },
  {
    name: 'February',
    data: 300,
    users: 120
  },
  {
    name: 'March',
    data: 530,
    users: 90
  },
  {
    name: 'April',
    data: 200,
    users: 230
  }
];

export default {
  title: 'Charts / RadialChart',
  component: RadialChart
};

export const renderStory = () => {
  return (
    <RadialChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      width={'100%'}
      labelKey={'xValue'}
      dataset={dataset}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const customColorStory = () => {
  return (
    <RadialChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      color={'lightblue'}
      width={'100%'}
      labelKey={'xValue'}
      dataset={dataset}
      chartConfig={{ dataLabel: true, innerRadius: '30%' }}
    />
  );
};

customColorStory.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <RadialChart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
