import React from 'react';
import { ColumnChart } from '../../lib/ColumnChart';
import { complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts /  ColumnChart',
  component: ColumnChart,
  argTypes: {
    dataset: {
      type: null
    }
  }
};

export const renderStory = (props) => (
  <ColumnChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dataset={complexDataSet}
    style={{ height: '60vh' }}
    dimensions={[
      {
        accessor: 'name',
        formatter: (d) => `${d} 2019`
      }
    ]}
    measures={[
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString()
      },
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        formatter: (val) => `${val} sessions`,
        hideDataLabel: true
      },
      {
        accessor: 'volume',
        label: 'Vol.'
      }
    ]}
  />
);

renderStory.storyName = 'Default';

export const renderStoryWithCustomColor = (props) => (
  <ColumnChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dimensions={[{ accessor: 'name' }]}
    measures={[{ accessor: 'users', color: 'red' }]}
    dataset={simpleDataSet}
    style={{ width: '95%', height: '40vh' }}
  />
);

renderStoryWithCustomColor.storyName = 'With custom color';

export const withSecondaryDimension = (props) => (
  <ColumnChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    dimensions={[{ accessor: 'name' }, { accessor: 'dimension' }]}
    measures={[{ accessor: 'users', color: 'red' }]}
    dataset={secondaryDimensionDataSet}
    style={{ width: '95%', height: '60vh' }}
  />
);

withSecondaryDimension.storyName = 'With secondary dimension';

export const renderLabelStory = (props) => (
  <ColumnChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dimensions={[{ accessor: 'name' }]}
    measures={[
      {
        accessor: 'users',
        stackId: 'A'
      },
      {
        accessor: 'sessions',
        stackId: 'A'
      },
      {
        accessor: 'volume'
      }
    ]}
    dataset={complexDataSet}
    style={{ width: '95%', height: '40vh' }}
    chartConfig={{
      zoomingTool: true
    }}
  />
);

renderLabelStory.storyName = 'With data labels';

export const renderCustomDataLabelStory = (props) => (
  <ColumnChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dataset={complexDataSet}
    dimensions={[{ accessor: 'name', formatter: (element: string) => element.slice(0, 3) }]}
    measures={[
      {
        accessor: 'users',
        formatter: (element: number) => `${element / 10}`,
        label: 'number of users'
      },
      {
        accessor: 'sessions'
      },
      {
        accessor: 'volume'
      }
    ]}
    style={{ width: '95%', height: '40vh' }}
    chartConfig={{
      zoomingTool: true
    }}
  />
);

renderCustomDataLabelStory.storyName = 'With formatter';

export const loadingPlaceholder = () => <ColumnChart style={{ width: '30%' }} dimensions={[]} measures={[]} />;

loadingPlaceholder.storyName = 'Loading placeholder';

export const withReferenceLineStory = (props) => {
  return (
    <ColumnChart
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      dataset={complexDataSet}
      dimensions={[{ accessor: 'name' }]}
      measures={[
        {
          accessor: 'users'
        },
        {
          accessor: 'sessions'
        },
        {
          accessor: 'volume'
        }
      ]}
      style={{ width: '95%', height: '40vh' }}
      loading
      chartConfig={{
        referenceLine: {
          color: 'red',
          label: 'MAX',
          value: 650
        }
      }}
    />
  );
};

withReferenceLineStory.storyName = 'With reference line';
