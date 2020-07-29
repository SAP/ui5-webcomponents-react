import React from 'react';
import { BarChart } from '../../lib/BarChart';
import { complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

export default {
  title: 'Charts /  BarChart',
  component: BarChart,
  argTypes: {
    dataset: {
      type: null
    },
    measures: {
      type: null
    },
    dimensions: {
      type: null
    }
  },
  chartConfig: {
    yAxisVisible: true,
    xAxisVisible: true,
    gridStroke: ThemingParameters.sapList_BorderColor,
    gridHorizontal: true,
    gridVertical: false,
    legendPosition: 'bottom',
    legendHorizontalAlign: 'left',
    zoomingTool: false,
    resizeDebounce: 250
  }
};

export const renderStory = (props) => {
  return (
    <BarChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      dataset={complexDataSet}
      style={{ height: '60vh' }}
      chartConfig={props.chartConfig}
      dimensions={[
        {
          accessor: 'name'
        }
      ]}
      measures={[
        {
          accessor: 'users',
          label: 'Users',
          formatter: (val) => val.toLocaleString(),
          opacity: 0.6
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
  <BarChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    dimensions={[{ accessor: 'name' }]}
    measures={[{ accessor: 'users', color: 'red' }]}
    dataset={simpleDataSet}
    chartConfig={props.chartConfig}
    style={{ width: '95%', height: '40vh' }}
  />
);

renderStoryWithCustomColor.storyName = 'With custom color';

export const withSecondaryDimension = (props) => (
  <BarChart
    chartConfig={props.chartConfig}
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
  <BarChart
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
    chartConfig={props.chartConfig}
  />
);

renderLabelStory.storyName = 'With data labels';

export const renderCustomDataLabelStory = (props) => (
  <BarChart
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
    style={{ width: '95%', height: '100vh' }}
    chartConfig={{
      zoomingTool: true
    }}
  />
);

renderCustomDataLabelStory.storyName = 'With formatter';

export const loadingPlaceholder = () => <BarChart style={{ width: '30%' }} dimensions={[]} measures={[]} />;

loadingPlaceholder.storyName = 'Loading placeholder';

export const withReferenceLineStory = (props) => (
  <BarChart
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dataset={complexDataSet}
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
    style={{
      width: '95%',
      height: '70vh',
      '--sapChart_OrderedColor_1': '#0f828f',
      '--sapChart_OrderedColor_2': '#5ac2ce',
      '--sapChart_OrderedColor_3': '#03734d',
      '--sapChart_OrderedColor_4': '#66c2a3',
      '--sapChart_OrderedColor_5': '#3c6372',
      '--sapChart_OrderedColor_6': '#adbcc3',
      '--sapChart_OrderedColor_7': '#144b7f',
      '--sapChart_OrderedColor_8': '#698caf',
      '--sapChart_OrderedColor_9': '#d62f2f',
      '--sapChart_OrderedColor_10': '#f8a6a6',
      '--sapChart_OrderedColor_11': '#921473'
    }}
    chartConfig={{
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 650
      }
    }}
  />
);

withReferenceLineStory.storyName = 'With reference line';
