import { action } from '@storybook/addon-actions';
import React from 'react';
import { MicroBarChart } from './MicroBarChart';

const singleData = [
  {
    name: 'January',
    data: 100,
    users: 120
  },
  {
    name: 'February',
    data: 300,
    users: 40
  },
  {
    name: 'March',
    data: 530,
    users: 20
  },
  {
    name: 'April',
    data: 200,
    users: 30
  }
];

export default {
  title: 'Charts - Unstable /  MicroBarChart',
  component: MicroBarChart
};

export const defaultStory = () => (
  <MicroBarChart
    onDataPointClick={action('onDataPointClickHandler')}
    onLegendClick={action('onLegendClickHandler')}
    dataset={singleData}
    style={{ width: '100%', height: '30vh' }}
    dimension={{
      accessor: 'name'
    }}
    measure={{
      accessor: 'users'
    }}
  />
);

defaultStory.story = {
  name: 'Default'
};

export const withCustomColor = () => (
  <MicroBarChart
    onDataPointClick={action('onDataPointClickHandler')}
    onLegendClick={action('onLegendClickHandler')}
    dataset={singleData}
    style={{ width: '100%', height: '30vh' }}
    dimension={{
      accessor: 'name'
    }}
    measure={{
      accessor: 'users',
      colors: ['#f0ab00', 'var(--sapHighlightColor)'],
      formatter: (d) => (d > 200 ? 'over 200' : 'lower')
    }}
  />
);

withCustomColor.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <MicroBarChart style={{ width: '20%' }} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
