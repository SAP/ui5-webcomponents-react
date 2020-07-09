import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { ScatterChart } from '@ui5/webcomponents-react-charts/lib/ScatterChart';
import { scatterColorDataSet, scatterComplexDataSet } from '../../resources/DemoProps';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

export default {
  title: 'Charts /  ScatterChart',
  component: ScatterChart,
  argTypes: {
    dataset: {
      type: null
    },
    measures: {
      type: null
    }
  },
  args: {
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

export const renderStory = (props) => (
  <ScatterChart
    chartConfig={props.chartConfig}
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dataset={scatterComplexDataSet}
    style={{ width: '100%' }}
    measures={[
      {
        accessor: 'users',
        label: 'Users',
        axis: 'x'
      },
      {
        accessor: 'sessions',
        label: 'Sessions',
        formatter: (val) => `${val}k`,
        axis: 'y'
      },
      {
        accessor: 'volume',
        axis: 'z'
      }
    ]}
  />
);

renderStory.storyName = 'Default';

export const renderStoryWithCustomColor = (props) => (
  <ScatterChart
    chartConfig={props.chartConfig}
    loading={props.loading}
    noLegend={props.noLegend}
    noAnimation={props.noAnimation}
    onDataPointClick={props.onDataPointClick}
    onLegendClick={props.onLegendClick}
    dataset={scatterColorDataSet}
    style={{ width: '100%' }}
    measures={[
      {
        accessor: 'users',
        label: 'Users',
        axis: 'x'
      },
      {
        accessor: 'sessions',
        label: 'Sessions',
        axis: 'y'
      },
      {
        accessor: 'volume',
        axis: 'z'
      }
    ]}
  />
);

renderStoryWithCustomColor.storyName = 'With custom color';

export const loadingPlaceholder = () => <ScatterChart style={{ width: '100%' }} measures={[]} />;

loadingPlaceholder.storyName = 'Loading placeholder';
