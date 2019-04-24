import React from 'react';
import { storiesOf } from '@storybook/react';
import { PieChart } from './index';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = [{ data: [65, 59, 80, 81, 56, 55, 40] }];

storiesOf('Charts | PieChart', module)
  .add('Default', () => <PieChart labels={labels} datasets={datasets} />)
  .add('with Formatter', () => <PieChart labels={labels} datasets={datasets} valueAxisFormatter={(d) => `${d}%`} />);
