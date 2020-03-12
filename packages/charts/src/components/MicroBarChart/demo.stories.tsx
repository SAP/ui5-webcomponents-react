import { array, number, text } from '@storybook/addon-knobs';
import { MicroBarChart } from '@ui5/webcomponents-react-charts/lib/MicroBarChart';
import React from 'react';

const dataset = [
  { value: 10, label: 'Bar Number One' },
  { value: 100, label: 'Bar Number Two' },
  { value: 30, label: 'Bar Number Three' },
  { value: 40, label: 'Bar Number Four' },
  { value: 50, label: 'Bar Number Five' }
];
const colors = ['sapUiChartBad', 'pink', '#de890d', 'rgb(33, 9, 205)', 'green'];
const valueFormatter = (value) => `${value}$`;
const labelFormatter = (value) => `${value} in Dollar`;

export default {
  title: 'Charts / Micro Bar Chart',
  component: MicroBarChart
};

export const defaultStory = () => <MicroBarChart dataset={dataset} />;

defaultStory.story = {
  name: 'Default'
};

export const withProps = () => (
  <MicroBarChart
    dataset={dataset}
    maxWidth={text('maxWidth', '200px')}
    colors={array('colors', colors)}
    visibleDatasetCount={number('visibleDatasetCount', 5)}
    valueFormatter={valueFormatter}
    labelFormatter={labelFormatter}
  />
);

withProps.story = {
  name: 'With Props'
};
