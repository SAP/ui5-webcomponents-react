import { RadarChart } from '@ui5/webcomponents-react-charts/lib/RadarChart';
import React from 'react';

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
  component: RadarChart
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
