import { action } from '@storybook/addon-actions';
import { ComposedChart } from '@ui5/webcomponents-react-charts/lib/next/ComposedChart';
import React from 'react';
import {
  complexDataSet,
  secondaryDimensionComposedDataSet,
  secondaryDimensionDataSet
} from '../../resources/DemoProps';

export const renderComposedChart = () => (
  <ComposedChart
    width={'100%'}
    height={'300px'}
    dataset={complexDataSet}
    onLegendClick={action('onLegendClick')}
    onDataPointClick={action('onDataPointClick')}
    elements={[
      {
        type: 'bar',
        accessor: 'sessions'
      },
      {
        type: 'area',
        accessor: 'users'
      },
      {
        type: 'line',
        accessor: 'volume'
      }
    ]}
  />
);

renderComposedChart.story = {
  name: 'Default'
};

export const withSecondaryDimension = () => (
  <ComposedChart
    width={'95%'}
    height={'500px'}
    secondaryDimensionKey={'dimension'}
    dataset={secondaryDimensionComposedDataSet}
    onLegendClick={action('onLegendClick')}
    onDataPointClick={action('onDataPointClick')}
    elements={[
      {
        type: 'bar',
        accessor: 'sessions'
      },
      {
        type: 'area',
        accessor: 'users'
      },
      {
        type: 'line',
        accessor: 'volume'
      }
    ]}
  />
);

withSecondaryDimension.story = {
  name: 'With secondary dimension'
};

export const renderComposedChartPlaceholder = () => (
  <ComposedChart
    width={'30%'}
    height={'40vh'}
    labelKey={'name'}
    elements={[{ type: 'line', accessor: 'volume', strokeWidth: 1, color: 'lightblue' }]}
  />
);

renderComposedChartPlaceholder.story = {
  name: 'Loading placeholder'
};

export const renderComposedStackedChart = () => (
  <ComposedChart
    width={'95%'}
    height={'40vh'}
    dataset={complexDataSet}
    labelKey={'name'}
    onLegendClick={action('onLegendClick')}
    onDataPointClick={action('onDataPointClick')}
    chartConfig={{
      yAxisVisible: true,
      xAxisVisible: true,
      gridVertical: false,
      gridHorizontal: true,
      legendPosition: 'top',
      zoomingTool: true,
      stacked: true,
      dataLabel: true,
      secondYAxis: {
        name: 'USER STATISTICS',
        dataKey: 'users',
        color: 'orange'
      }
    }}
    elements={[
      {
        type: 'bar',
        accessor: 'sessions',
        fillOpacity: 0.1,
        barSize: 25,
        stackId: 'a'
      },
      {
        type: 'bar',
        accessor: 'volume',
        strokeWidth: 2,
        stackId: 'a'
      },
      {
        type: 'line',
        accessor: 'users',
        color: 'orange',
        strokeOpacity: 0.7,
        strokeWidth: 3.5
      }
    ]}
  />
);

renderComposedStackedChart.story = {
  name: 'With stacked chart'
};

export const renderLabelComposedChart = () => (
  <ComposedChart
    width={'95%'}
    height={'40vh'}
    dataset={complexDataSet}
    onLegendClick={action('onLegendClick')}
    onDataPointClick={action('onDataPointClick')}
    chartConfig={{
      yAxisVisible: true,
      xAxisVisible: true,
      gridStroke: 'white',
      gridVertical: false,
      gridHorizontal: true,
      legendPosition: 'bottom',
      zoomingTool: true,
      dataLabel: true,
      secondYAxis: {
        name: 'USER STATISTICS',
        dataKey: 'volume',
        color: 'lightblue'
      }
    }}
    elements={[
      {
        type: 'bar',
        accessor: 'sessions',
        fillOpacity: 0.1
      },
      {
        type: 'line',
        accessor: 'volume',
        color: 'lightblue',
        strokeWidth: 3
      }
    ]}
  />
);

renderLabelComposedChart.story = {
  name: 'With data label chart'
};

export default {
  title: 'Charts - Unstable /  ComposedChart',
  component: ComposedChart
};

export const renderFormatedComposedChart = () => (
  <ComposedChart
    width={'95%'}
    height={'40vh'}
    dataset={complexDataSet}
    labels={{ users: 'numbers of users' }}
    xAxisFormatter={(el) => el.slice(0, 3)}
    yAxisFormatter={(el) => el / 10}
    onLegendClick={action('onLegendClick')}
    onDataPointClick={action('onDataPointClick')}
    chartConfig={{
      yAxisUnit: '%',
      dataLabel: true
    }}
    elements={[
      {
        type: 'bar',
        accessor: 'sessions'
      },
      {
        type: 'line',
        accessor: 'users',
        dataValueFormatter: (el) => ''
      },
      {
        type: 'line',
        dataValueFormatter: (d) => `${d}/unit`,
        accessor: 'volume'
      }
    ]}
  />
);

renderFormatedComposedChart.story = {
  name: 'With formatter'
};
