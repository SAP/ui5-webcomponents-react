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
  title: '2 Charts /  MicroBarChart',
  component: MicroBarChart
};

export const defaultStory = () => (
  <MicroBarChart
    onDataPointClick={action('onDataPointClickHandler')}
    onLegendClick={action('onLegendClickHandler')}
    dataset={singleData}
    width={'100%'}
    height={'25vh'}
  />
);

defaultStory.story = {
  name: 'Default'
};

export const withCustomColor = () => (
  <MicroBarChart
    onDataPointClick={action('onDataPointClickHandler')}
    dataset={singleData}
    labelKey={'name'}
    width={'50%'}
    height={'25vh'}
    color={'red'}
    dataKeys={['users']}
  />
);

withCustomColor.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <MicroBarChart labelKey={'name'} width={'20%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
