import { RadarChart } from '@ui5/webcomponents-react-charts/lib/RadarChart';
import React from 'react';
import notes from './RadarChart.md';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = [
  {
    label: 'Upside',
    data: [65, 59, 80, 81, 56, 55, 40]
  },

  {
    label: 'Probable/Committed',
    data: [50, 90, 80, 80, 50, 50, 40]
  }
];

export default {
  title: 'Charts / RadarChart',
  component: RadarChart,
  parameters: { notes }
};

export const defaultStory = () => <RadarChart labels={labels} datasets={datasets} />;

defaultStory.story = {
  name: 'Default'
};

export const withFormatter = () => (
  <RadarChart labels={labels} datasets={datasets} valueAxisFormatter={(d) => `${d}x`} />
);

withFormatter.story = {
  name: 'with Formatter'
};
