import { boolean } from '@storybook/addon-knobs';
import { LineChart } from '@ui5/webcomponents-react-charts/lib/LineRecharts';
import React from 'react';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = [
  {
    label: 'Stock Price',
    data: [65, 59, 80, 81, 56, 55, 40]
  },
  {
    label: 'Liters Beer per Head',
    data: [30, 35, 30, 40, 53, 30, 32]
  }
];

function renderStory() {
  return <LineChart width={'100%'} labels={labels} datasets={datasets} loading={boolean('g', false)} />;
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
  title: 'Recharts',
  component: LineChart,
  parameters: { }
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
