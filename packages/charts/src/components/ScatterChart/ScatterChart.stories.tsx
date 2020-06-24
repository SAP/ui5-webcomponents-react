import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { ScatterChart } from '@ui5/webcomponents-react-charts/lib/ScatterChart';
import { scatterColorDataSet, scatterComplexDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts /  ScatterChart',
  component: ScatterChart
};

export const renderStory = (props) => (
  <ScatterChart
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

renderStory.story = {
  name: 'Default'
};

export const renderStoryWithCustomColor = (props) => (
  <ScatterChart
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

renderStoryWithCustomColor.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <ScatterChart style={{ width: '100%' }} measures={[]} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};
