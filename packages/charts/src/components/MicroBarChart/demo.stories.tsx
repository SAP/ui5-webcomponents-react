import React from 'react';
import { storiesOf } from '@storybook/react';
import { MicroBarChart } from './index';
import { array, number, text } from '@storybook/addon-knobs';
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

storiesOf('Charts | Micro Bar Chart', module)
  .add('Default', () => <MicroBarChart dataset={dataset} />)
  .add('With Props', () => (
    <MicroBarChart
      dataset={dataset}
      maxWidth={text('maxWidth', '200px')}
      colors={array('colors', colors)}
      visibleDatasetCount={number('visibleDatasetCount', 5)}
      valueFormatter={valueFormatter}
      labelFormatter={labelFormatter}
    />
  ));
