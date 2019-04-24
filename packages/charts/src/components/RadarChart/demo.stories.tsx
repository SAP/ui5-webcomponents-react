import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadarChart } from './index';

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

storiesOf('Charts | RadarChart', module)
  .add('Default', () => <RadarChart labels={labels} datasets={datasets} />)
  .add('with Formatter', () => <RadarChart labels={labels} datasets={datasets} valueAxisFormatter={(d) => `${d}x`} />);
