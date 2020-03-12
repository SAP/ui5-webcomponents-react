import { boolean } from '@storybook/addon-knobs';
import { DonutChart } from '@ui5/webcomponents-react-charts/lib/DonutChart';
import React from 'react';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const dataset = [{ data: [65, 59, 80, 81, 56, 55, 40] }];

export default {
  title: 'Charts / DonutChart',
  component: DonutChart
};

export const defaultStory = () => (
  <DonutChart labels={labels} datasets={dataset} height={300} width={300} loading={boolean('loading', false)} />
);

defaultStory.story = {
  name: 'Default'
};

export const withCustomColors = () => (
  <DonutChart
    height={300}
    width={300}
    labels={['Stalled', 'Active']}
    datasets={[{ data: [65, 45] }]}
    colors={['sapUiChartBad', 'sapUiChartGood']}
    loading={boolean('loading', false)}
  />
);

withCustomColors.story = {
  name: 'with custom colors'
};

export const withFormatter = () => (
  <DonutChart
    labels={labels}
    datasets={dataset}
    valueAxisFormatter={(number) => `${number}$`}
    loading={boolean('loading', false)}
  />
);

withFormatter.story = {
  name: 'with Formatter'
};

export const loadingPlaceholder = () => <DonutChart labels={labels} loading={boolean('loading', true)} />;

loadingPlaceholder.story = {
  name: 'Loading Placeholder'
};
