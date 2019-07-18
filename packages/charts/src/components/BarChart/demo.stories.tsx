import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { BarChart } from './index';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const datasets = [
  {
    label: 'Upside',
    data: [65, 59, 80, 93, 56, 55, 5]
  },

  {
    label: 'Probable/Committed',
    data: [5, 9, 8, 8, 5, 5, 4]
  }
];

const options = {
  scales: {
    yAxes: [
      {
        stacked: true
      }
    ],
    xAxes: [
      {
        stacked: true
      }
    ]
  }
};

storiesOf('Charts | BarChart', module)
  .add('Default', () => (
    <BarChart
      labels={labels}
      datasets={datasets}
      getElementAtEvent={action('getElementAtEvent')}
      loading={boolean('loading')}
      noLegend={boolean('noLegend')}
    />
  ))
  .add('with Formatter', () => (
    <BarChart labels={labels} datasets={datasets} valueAxisFormatter={(d) => `${d}%`} loading={boolean('loading')} />
  ))
  .add('Stacked', () => (
    <BarChart
      labels={labels}
      datasets={datasets}
      valueAxisFormatter={(d) => `${d}%`}
      options={options}
      loading={boolean('loading')}
    />
  ));
