import { action } from '@storybook/addon-actions';
import { LineChart } from '@ui5/webcomponents-react-charts/lib/next/LineChart';
import React from 'react';
import { complexDataSet, simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts / LineChart',
  component: LineChart
};

export const renderStory = () => {
  return (
    <LineChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={complexDataSet}
      width={'95%'}
      height={'40vh'}
      noLegend={false}
      loading={true}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderStoryWithCustomColor = () => (
  <LineChart
    onDataPointClick={action('onDataPointClick')}
    labelKey={'name'}
    dataset={simpleDataSet}
    color={'red'}
    width={'95%'}
    height={'40vh'}
    chartConfig={{
      dataLabel: true,
      strokeWidth: 2,
      strokeOpacity: 0.5
    }}
  />
);

renderStoryWithCustomColor.story = {
  name: 'With custom color'
};

export const renderLabelStory = () => {
  return (
    <LineChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      labelKey={'name'}
      dataset={complexDataSet}
      width={'95%'}
      height={'40vh'}
      noLegend={false}
      loading={true}
      chartConfig={{
        zoomingTool: true,
        strokeWidth: 1.5,
        dataLabel: true
      }}
    />
  );
};

renderLabelStory.story = {
  name: 'With data labels'
};

const customDataLabel = () => {
  return <text fontSize={20}></text>;
};

export const renderCustomDataLabelStory = () => {
  return (
    <LineChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      labelKey={'name'}
      dataset={complexDataSet}
      width={'95%'}
      height={'40vh'}
      noLegend={false}
      loading={true}
      dataLabelFormatter={(d) => (d > 500 ? '😍' : '🤔')}
      dataLabelCustomElement={customDataLabel()}
      chartConfig={{
        zoomingTool: true,
        strokeWidth: 1.5,
        dataLabel: true,
        referenceLine: {
          color: 'red',
          label: 'MIN',
          value: 600
        }
      }}
    />
  );
};

renderCustomDataLabelStory.story = {
  name: 'With formatted data labels'
};

export const loadingPlaceholder = () => <LineChart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const withReferenceLineStory = () => {
  return (
    <LineChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      dataset={complexDataSet}
      width={'95%'}
      height={'40vh'}
      noLegend={false}
      loading={true}
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

withReferenceLineStory.story = {
  name: 'With reference line'
};
