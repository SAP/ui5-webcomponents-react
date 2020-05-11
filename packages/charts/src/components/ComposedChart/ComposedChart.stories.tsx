import { action } from '@storybook/addon-actions';
import { ComposedChart } from '@ui5/webcomponents-react-charts/lib/next/ComposedChart';
import React from 'react';
import { bigDataSet, complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps';
import { boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Charts - Unstable /  ComposedChart',
  component: ComposedChart
};

export const renderStory = () => {
  return (
    <ComposedChart
      loading={boolean('loading', false)}
      noLegend={boolean('noLegend', false)}
      noAnimation={boolean('noAnimation', false)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={complexDataSet}
      style={{ height: '60vh' }}
      layout={select('layout', ['horizontal', 'vertical'], 'horizontal')}
      dimensions={[
        {
          accessor: 'name',
          formatter: (d) => `${d} 2019`,
          interval: 0
        }
      ]}
      measures={[
        {
          accessor: 'sessions',
          label: 'Active Sessions',
          type: 'bar'
        },
        {
          accessor: 'users',
          label: 'Users',
          formatter: (val) => val.toLocaleString(),
          type: 'area'
        },
        {
          accessor: 'volume',
          label: 'Vol.',
          formatter: (val) => `${val} sessions`,
          type: 'line'
        }
      ]}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderStoryWithCustomColor = () => (
  <ComposedChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
    onDataPointClick={action('onDataPointClick')}
    dimensions={[{ accessor: 'name' }]}
    measures={[{ accessor: 'users', color: 'red', type: 'bar' }]}
    dataset={simpleDataSet}
    style={{ width: '95%', height: '40vh' }}
  />
);

renderStoryWithCustomColor.story = {
  name: 'With custom color'
};

export const withSecondaryDimension = () => (
  <ComposedChart
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
    noAnimation={boolean('noAnimation', false)}
    onDataPointClick={action('onDataPointClick')}
    dimensions={[{ accessor: 'name' }, { accessor: 'dimension' }]}
    measures={[{ accessor: 'users', type: 'area', color: 'red', width: 2, opacity: 0.5 }]}
    dataset={secondaryDimensionDataSet}
    style={{ width: '95%', height: '60vh' }}
  />
);

withSecondaryDimension.story = {
  name: 'With secondary dimension'
};

export const renderLabelStory = () => {
  return (
    <ComposedChart
      loading={boolean('loading', false)}
      noLegend={boolean('noLegend', false)}
      noAnimation={boolean('noAnimation', false)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users',
          type: 'area'
        },
        {
          accessor: 'sessions',
          type: 'bar',
          opacity: 0.6
        },
        {
          accessor: 'volume',
          type: 'line'
        }
      ]}
      dataset={complexDataSet}
      style={{ width: '95%', height: '40vh' }}
      chartConfig={{
        zoomingTool: true,
        secondYAxis: {
          dataKey: 'sessions'
        }
      }}
    />
  );
};

renderLabelStory.story = {
  name: 'With data labels'
};

export const renderCustomDataLabelStory = () => {
  return (
    <ComposedChart
      loading={boolean('loading', false)}
      noLegend={boolean('noLegend', false)}
      noAnimation={boolean('noAnimation', false)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={complexDataSet}
      dimensions={[{ accessor: 'name', formatter: (element: string) => element.slice(0, 3) }]}
      measures={[
        {
          accessor: 'users',
          formatter: (element: number) => `${element / 10}`,
          type: 'bar',
          label: 'number of users',
          stackId: 'A',
          width: 30
        },
        {
          accessor: 'sessions',
          type: 'bar',
          stackId: 'A',
          width: 30
        },
        {
          accessor: 'volume',
          type: 'line',
          width: 2
        }
      ]}
      style={{ width: '95%', height: '40vh' }}
      chartConfig={{
        zoomingTool: true
      }}
    />
  );
};

renderCustomDataLabelStory.story = {
  name: 'With formatter'
};

export const withReferenceLineStory = () => {
  return (
    <ComposedChart
      loading={boolean('loading', false)}
      noLegend={boolean('noLegend', false)}
      noAnimation={boolean('noAnimation', false)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      layout={select('layout', ['horizontal', 'vertical'], 'horizontal')}
      measures={[
        {
          accessor: 'users',
          type: 'bar',
          width: 2
        },
        {
          accessor: 'sessions',
          type: 'line'
        },
        {
          accessor: 'volume',
          type: 'line'
        }
      ]}
      style={{ width: '95%', height: '40vh' }}
      chartConfig={{
        zoomingTool: true,
        referenceLine: {
          color: 'red',
          label: 'MAX',
          value: 650
        }
      }}
    />
  );
};

withReferenceLineStory.story = {
  name: 'With reference line'
};

export const loadingPlaceholder = () => {
  return (
    <ComposedChart
      loading={boolean('loading', true)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={[]}
      style={{ height: '60vh' }}
      layout={select('layout', ['horizontal', 'vertical'], 'horizontal')}
      dimensions={[
        {
          accessor: 'name',
          formatter: (d) => `${d} 2019`,
          interval: 0
        }
      ]}
      measures={[
        {
          accessor: 'sessions',
          label: 'Active Sessions',
          type: 'bar'
        },
        {
          accessor: 'users',
          label: 'Users',
          formatter: (val) => val.toLocaleString(),
          type: 'area'
        },
        {
          accessor: 'volume',
          label: 'Vol.',
          formatter: (val) => `${val} sessions`,
          type: 'line'
        }
      ]}
    />
  );
};

loadingPlaceholder.story = {
  name: 'with Loading Placeholder'
};
