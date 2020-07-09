import { action } from '@storybook/addon-actions';
import React from 'react';
import { MicroBarChart } from './MicroBarChart';

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
  title: 'Charts /  MicroBarChart',
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
      accessor: 'data'
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
      accessor: 'data',
      colors: ['#f0ab00', 'var(--sapHighlightColor)'],
      formatter: (d) => (d > 200 ? 'over 200' : 'lower')
    }}
  />
);

withCustomColor.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => (
  <MicroBarChart
    dataset={[]}
    dimension={{
      accessor: 'name'
    }}
    measure={{
      accessor: 'data'
    }}
    style={{ width: '20%' }}
  />
);

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
