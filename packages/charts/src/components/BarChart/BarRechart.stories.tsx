import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { BarChart } from '@ui5/webcomponents-react-charts/lib/next/BarChart';
import React from 'react';
import { complexDataSet, simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts / BarChart',
  component: BarChart
};

export const defaultStory = () => (
  <BarChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    dataset={complexDataSet}
    width={text('width', '97%')}
    height={text('height', '95vh')}
    loading={boolean('loading', false)}
    noLegend={boolean('noLegend', false)}
  />
);

defaultStory.story = {
  name: 'Default'
};

export const withCustomColor = () => (
  <BarChart
    onDataPointClick={action('onDataPointClick')}
    dataset={simpleDataSet}
    labelKey={'name'}
    color={'red'}
    width={text('width', '95%')}
    height={text('height', '40vh')}
    chartConfig={{ dataLabel: true, barSize: 20 }}
  />
);

withCustomColor.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <BarChart labelKey={'name'} width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const defaultStackedStory = () => (
  <BarChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    labelKey={'name'}
    width={'91%'}
    dataset={complexDataSet}
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
