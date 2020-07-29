import React from 'react';
import { complexDataSet, simpleDataSet } from '../../resources/DemoProps';
import { RadarChart } from './RadarChart';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

export default {
  title: 'Charts /  RadarChart',
  component: RadarChart,
  argTypes: {
    dataset: {
      type: null
    },
    chartConfig: {
      type: null
    },
    measures: {
      type: null
    },
    dimensions: {
      type: null
    }
  }
};

export const renderStory = (props) => {
  return (
    <RadarChart
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
};

renderStory.storyName = 'Default';

export const renderStoryWithCustomColor = (props) => (
  <RadarChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dimensions={[{ accessor: 'name' }]}
    measures={[{ accessor: 'users', color: 'red' }]}
    dataset={simpleDataSet}
    style={{ width: '100%' }}
  />
);

renderStoryWithCustomColor.storyName = 'With custom color';

export const renderLabelStory = (props) => {
  return (
    <RadarChart
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
      style={{ width: '100%' }}
    />
  );
};

renderLabelStory.storyName = 'With data labels';

export const renderCustomDataLabelStory = (props) => {
  return (
    <RadarChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      dataset={complexDataSet}
      dimensions={[{ accessor: 'name', formatter: (element: string) => element.slice(0, 3) }]}
      chartConfig={{ polarGridType: 'polygon' }}
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
      style={{ width: '100%' }}
    />
  );
};

renderCustomDataLabelStory.storyName = 'As polygon';

export const loadingPlaceholder = () => <RadarChart style={{ width: '100%' }} dimensions={[]} measures={[]} />;

loadingPlaceholder.storyName = 'Loading placeholder';
