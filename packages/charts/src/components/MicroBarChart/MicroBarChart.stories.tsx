import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { MicroBarChart } from '@ui5/webcomponents-react-charts/lib/MicroBarChart';

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
    dataset={singleData}
    loading={boolean('loading', false)}
    style={{ width: '100%' }}
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

export const withCustomProps = () => (
  <MicroBarChart
    onDataPointClick={action('onDataPointClickHandler')}
    dataset={singleData}
    style={{ width: '50%' }}
    loading={boolean('loading', false)}
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

withCustomProps.story = {
  name: 'With custom props'
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
