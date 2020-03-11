import { boolean } from '@storybook/addon-knobs';
import { LineChart } from '@ui5/webcomponents-react-charts/lib/LineChart';
import React from 'react';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = [
  {
    label: 'Stock Price',
    data: [65, 59, 80, 100, 56, 55, 40]
  }
];

function renderStory() {
  return <LineChart labels={labels} datasets={datasets} loading={boolean('loading', false)} />;
}

const colors = ['#f0ab00'];

const renderStoryWithFormatter = () => (
  <LineChart
    labels={labels}
    datasets={datasets}
    valueAxisFormatter={(i) => `${i}%`}
    loading={boolean('loading', false)}
  />
);

const renderStoryWithCustomColors = () => (
  <LineChart labels={labels} datasets={datasets} colors={colors} loading={boolean('loading', false)} />
);

export default {
  title: 'Charts / Line Chart',
  component: LineChart
};

export const defaultStory = renderStory;

defaultStory.story = {
  name: 'Default'
};

export const withCustomColors = renderStoryWithCustomColors;

withCustomColors.story = {
  name: 'with custom colors'
};

export const withFormatter = renderStoryWithFormatter;

withFormatter.story = {
  name: 'with Formatter'
};

export const loadingPlaceholder = () => <LineChart labels={labels} loading={boolean('loading', true)} />;

loadingPlaceholder.story = {
  name: 'Loading Placeholder'
};
