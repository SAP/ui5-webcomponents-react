import React from 'react';
import { LineChart } from '../../lib/LineChart';
import { bigDataSet, complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts /  LineChart',
  component: LineChart,
  argTypes: {
    dataset: {
      type: null
    }
  },
  args: {
    dataset: complexDataSet
  }
};

export const renderStory = (props) => (
  <LineChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dataset={complexDataSet}
    style={{ width: '100%' }}
    dimensions={[
      {
        accessor: 'name',
        formatter: (d) => `${d} 2019`,
        interval: 0
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
  <LineChart
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
  <LineChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dimensions={[{ accessor: 'name' }, { accessor: 'dimension' }]}
    measures={[{ accessor: 'users', color: 'red' }]}
    dataset={secondaryDimensionDataSet}
    style={{ width: '95%', height: '60vh' }}
  />
);

withSecondaryDimension.storyName = 'With secondary dimension';

export const renderLabelStory = (props) => {
  return (
    <LineChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
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
      dataset={complexDataSet}
      style={{ width: '95%', height: '40vh' }}
      chartConfig={{
        zoomingTool: true
      }}
    />
  );
};

renderLabelStory.storyName = 'With data labels';

export const renderCustomDataLabelStory = (props) => {
  return (
    <LineChart
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
};

renderCustomDataLabelStory.storyName = 'With formatter';

export const loadingPlaceholder = () => <LineChart style={{ width: '100%' }} dimensions={[]} measures={[]} />;

loadingPlaceholder.storyName = 'Loading placeholder';

export const withReferenceLineStory = (props) => {
  return (
    <LineChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      dataset={bigDataSet}
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
