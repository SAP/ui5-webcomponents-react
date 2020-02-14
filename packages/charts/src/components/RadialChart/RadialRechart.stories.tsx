import React from 'react';
import { RadialRechart } from './RadialRechart';
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
  component: RadialRechart
};

export const renderStory = () => {
  return (
    <RadialRechart
      onLegendClickHandler={action('onDataPointClickHandler')}
      onDataPointClickHandler={action('onLegendClickHandler')}
      width={'100%'}
      labelKey={'xValue'}
      dataset={dataset}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const withLabelStory = () => {
  return (
    <RadialRechart
      onLegendClickHandler={action('onDataPointClickHandler')}
      onDataPointClickHandler={action('onLegendClickHandler')}
      width={'100%'}
      labelKey={'xValue'}
      dataset={dataset}
      chartConfig={{ dataLabel: true, innerRadius: '30%' }}
    />
  );
};

withLabelStory.story = {
  name: 'With data label'
};

export const customColorStory = () => {
  return (
    <RadialRechart
      onLegendClickHandler={action('onDataPointClickHandler')}
      onDataPointClickHandler={action('onLegendClickHandler')}
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

export const loadingPlaceholder = () => <RadialRechart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
