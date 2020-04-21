import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { DonutChart } from '@ui5/webcomponents-react-charts/lib/next/DonutChart';
import React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts - Unstable /  DonutChart',
  component: DonutChart
};

export const renderStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users'
      }}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderCustomColorStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users',
        colors: ['#f00', 'green', 'var(--sapNegativeColor)']
      }}
    />
  );
};

renderCustomColorStory.story = {
  name: 'With custom color'
};

export const withPaddingStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users'
      }}
      chartConfig={{ paddingAngle: 5 }}
    />
  );
};

withPaddingStory.story = {
  name: 'With padding angle'
};

export const withCustomRadiusStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      chartConfig={{
        innerRadius: text('innerRadius', '20%')
      }}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users'
      }}
    />
  );
};

withCustomRadiusStory.story = {
  name: 'With custom inner radius'
};

export const loadingPlaceholder = () => <DonutChart style />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const withFormatedStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name',
        formatter: (el) => el.slice(0, 3)
      }}
      measure={{
        accessor: 'users',
        formatter: (el) => el / 10
      }}
    />
  );
};

withFormatedStory.story = {
  name: 'With formatter'
};
