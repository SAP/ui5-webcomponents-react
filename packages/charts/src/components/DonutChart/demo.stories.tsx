import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { DonutChart } from './index';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const dataset = [{ data: [65, 59, 80, 81, 56, 55, 40] }];

storiesOf('Charts | DonutChart', module)
  .add('Default', () => (
    <DonutChart labels={labels} datasets={dataset} height={300} width={300} loading={boolean('loading')} />
  ))
  .add('with custom colors', () => (
    <DonutChart
      height={300}
      width={300}
      labels={['Stalled', 'Active']}
      datasets={[{ data: [65, 45] }]}
      colors={['sapUiChartBad', 'sapUiChartGood']}
      loading={boolean('loading')}
    />
  ))
  .add('with Formatter', () => (
    <DonutChart
      labels={labels}
      datasets={dataset}
      valueAxisFormatter={(number) => `${number}$`}
      options={{ cutoutPercentage: 0 }}
      loading={boolean('loading')}
    />
  ));
