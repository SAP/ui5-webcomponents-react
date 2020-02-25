import { action } from '@storybook/addon-actions';
import { ColumnChart } from '@ui5/webcomponents-react-charts/lib/next/ColumnChart';
import React from 'react';
import { complexDataSet, simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts / ColumnChart',
  component: ColumnChart
};

export const defaultStory = () => (
  <ColumnChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    dataset={complexDataSet}
    width={'97%'}
    labelKey={'name'}
  />
);

defaultStory.story = {
  name: 'Default'
};

export const withCustomColor = () => (
  <ColumnChart
    onDataPointClick={action('onDataPointClick')}
    dataset={simpleDataSet}
    color={'red'}
    width={'95%'}
    height={'40vh'}
    chartConfig={{ dataLabel: true }}
  />
);

withCustomColor.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <ColumnChart labelKey={'xValue'} width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const defaultStackedStory = () => (
  <ColumnChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    labelKey={'name'}
    dataset={complexDataSet}
    width={'97%'}
    chartConfig={{
      gridStroke: 'white',
      gridVertical: false,
      fillOpacity: 0.7,
      strokeOpacity: 1,
      barSize: 35,
      xAxisVisible: true,
      yAxisVisible: true,
      zoomingTool: true,
      stacked: true,
      dataLabel: true
    }}
  />
);

defaultStackedStory.story = {
  name: 'Stacked chart'
};
