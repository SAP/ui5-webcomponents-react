import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { DonutChart } from '../../lib/DonutChart';
import { simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts /  DonutChart',
  component: DonutChart
};

export const renderStory = () => {
  return (
    <DonutChart
      loading={boolean('loading', false)}
      noLegend={boolean('noLegend', false)}
      noAnimation={boolean('noAnimation', false)}
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

export const renderCustomColorStory = () => (
  <DonutChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
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

renderCustomColorStory.story = {
  name: 'With custom color'
};

export const withPaddingStory = () => (
  <DonutChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
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

withPaddingStory.story = {
  name: 'With padding angle'
};

export const withCustomRadiusStory = () => (
  <DonutChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
    onLegendClick={action('onLegendClick')}
    onDataPointClick={action('onDataPointClick')}
    style={{ width: '50%' }}
    dataset={simpleDataSet}
    chartConfig={{
      innerRadius: text('innerRadius', '20%'),
      outerRadius: text('outerRadius', '90%')
    }}
    dimension={{
      accessor: 'name'
    }}
    measure={{
      accessor: 'users'
    }}
  />
);

withCustomRadiusStory.story = {
  name: 'With custom inner radius'
};

export const loadingPlaceholder = () => <DonutChart style />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const withFormatter = () => (
  <DonutChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
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

withFormatter.story = {
  name: 'With formatter'
};
