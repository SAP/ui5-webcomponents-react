import React from 'react';
import { ComposedChart } from '../../lib/ComposedChart';
import { bigDataSet, complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

export default {
  title: 'Charts /  ComposedChart',
  component: ComposedChart,
  argTypes: {
    ...createSelectArgTypes({ layout: ['horizontal', 'vertical'] }),
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
  args: {
    layout: 'vertical',
    chartConfig: {
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      legendPosition: 'bottom',
      legendHorizontalAlign: 'left',
      zoomingTool: false,
      resizeDebounce: 250
    }
  }
};

export const renderStory = (props) => {
  return (
    <ComposedChart
      chartConfig={props.chartConfig}
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      dataset={complexDataSet}
      style={{ height: '60vh' }}
      layout={props.layout}
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

renderStory.storyName = 'Default';

export const renderStoryWithCustomColor = (props) => (
  <ComposedChart
    chartConfig={props.chartConfig}
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dimensions={[{ accessor: 'name' }]}
    measures={[{ accessor: 'users', color: 'red', type: 'bar' }]}
    dataset={simpleDataSet}
    style={{ width: '95%', height: '40vh' }}
  />
);

renderStoryWithCustomColor.storyName = 'With custom color';

export const withSecondaryDimension = (props) => (
  <ComposedChart
    chartConfig={props.chartConfig}
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dimensions={[{ accessor: 'name' }, { accessor: 'dimension' }]}
    measures={[{ accessor: 'users', type: 'area', color: 'red', width: 2, opacity: 0.5 }]}
    dataset={secondaryDimensionDataSet}
    style={{ width: '95%', height: '60vh' }}
  />
);

withSecondaryDimension.storyName = 'With secondary dimension';

export const renderLabelStory = (props) => {
  return (
    <ComposedChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
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

renderLabelStory.storyName = 'With data labels';

export const renderCustomDataLabelStory = (props) => {
  return (
    <ComposedChart
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
      chartConfig={props.chartConfig}
    />
  );
};

renderCustomDataLabelStory.storyName = 'With formatter';

export const withReferenceLineStory = (props) => {
  return (
    <ComposedChart
      loading={props.loading}
      noLegend={props.noLegend}
      noAnimation={props.noAnimation}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      dataset={bigDataSet}
      dimensions={[{ accessor: 'name' }]}
      layout={props.layout}
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

withReferenceLineStory.storyName = 'With reference line';

export const loadingPlaceholder = (props) => {
  return (
    <ComposedChart
      loading={props.loading}
      onDataPointClick={props.onDataPointClick}
      onLegendClick={props.onLegendClick}
      dataset={[]}
      style={{ height: '60vh' }}
      layout={props.layout}
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

loadingPlaceholder.storyName = 'with Loading Placeholder';
