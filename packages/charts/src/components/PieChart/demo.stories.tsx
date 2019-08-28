import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { PieChart } from './index';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = [{ data: [65, 59, 80, 81, 56, 55, 40] }];

export default {
  title: 'Charts | PieChart',
  component: PieChart
};

export const defaultStory = () => <PieChart labels={labels} datasets={datasets} loading={boolean('loading', false)} />;

defaultStory.story = {
  name: 'Default'
};

export const withFormatter = () => (
  <PieChart
    labels={labels}
    datasets={datasets}
    valueAxisFormatter={(d) => `${d}%`}
    loading={boolean('loading', false)}
  />
);

withFormatter.story = {
  name: 'with Formatter'
};

export const loadingPlaceholder = () => <PieChart labels={labels} loading={boolean('loading', true)} />;

loadingPlaceholder.story = {
  name: 'Loading Placeholder'
};
