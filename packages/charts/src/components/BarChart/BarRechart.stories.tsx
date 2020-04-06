import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { BarChart } from '@ui5/webcomponents-react-charts/lib/next/BarChart';
import React from 'react';
import { bigDataSet, complexDataSet, secondaryDimensionDataSet, simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts - Unstable /  BarChart',
  component: BarChart
};

export const defaultStory = () => (
  <BarChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    dataset={complexDataSet}
    width={text('width', '100%')}
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
    width={'100%'}
    height={'265px'}
    chartConfig={{ dataLabel: true }}
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
      barSize: 20,
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

export const defaultFormatterStory = () => (
  <BarChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    labelKey={'name'}
    width={'91%'}
    height={'90vh'}
    dataset={complexDataSet}
    xAxisFormatter={(el) => el / 10}
    yAxisFormatter={(el) => el.slice(0, 3)}
    chartConfig={{
      xAxisUnit: '%',
      gridStroke: 'white',
      gridVertical: false,
      fillOpacity: 0.7,
      strokeOpacity: 1,
      barSize: 20,
      xAxisVisible: true,
      yAxisVisible: true,
      zoomingTool: true,
      dataLabel: true
    }}
  />
);

defaultFormatterStory.story = {
  name: 'With formatter'
};

export const withReferenceLineStory = () => (
  <BarChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    labelKey={'name'}
    width={'91%'}
    height={'100vh'}
    dataset={bigDataSet}
    chartConfig={{
      gridStroke: 'white',
      gridVertical: false,
      fillOpacity: 0.7,
      strokeOpacity: 1,
      xAxisVisible: true,
      yAxisVisible: true,
      zoomingTool: true,
      stacked: true,
      dataLabel: true,
      referenceLine: {
        color: 'red',
        value: 1000,
        label: 'MAX SUM'
      }
    }}
  />
);

withReferenceLineStory.story = {
  name: 'With reference line'
};

export const withSecondardDimension = () => (
  <BarChart
    onDataPointClick={action('onDataPointClick')}
    dataset={secondaryDimensionDataSet}
    labelKey={'name'}
    secondaryDimensionKey={'dimension'}
    color={'lightblue'}
    width={'100%'}
    height={'60vh'}
  />
);

withSecondardDimension.story = {
  name: 'With secondary dimension'
};
