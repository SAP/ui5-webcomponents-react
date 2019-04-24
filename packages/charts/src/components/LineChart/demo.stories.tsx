import React from 'react';
import { storiesOf } from '@storybook/react';
import { LineChart } from './index';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = [
  {
    label: 'Stock Price',
    data: [65, 59, 80, 81, 56, 55, 40]
  }
];
function renderStory() {
  return <LineChart labels={labels} datasets={datasets} />;
}

const colors = ['#f0ab00'];

const renderStoryWithFormatter = () => (
  <LineChart labels={labels} datasets={datasets} valueAxisFormatter={(i) => `${i}%`} />
);

const renderStoryWithCustomColors = () => <LineChart labels={labels} datasets={datasets} colors={colors} />;

storiesOf('Charts | Line Chart', module)
  .add('Default', renderStory)
  .add('with custom colors', renderStoryWithCustomColors)
  .add('with Formatter', renderStoryWithFormatter);
