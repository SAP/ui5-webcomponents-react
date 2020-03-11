import { action } from '@storybook/addon-actions';
import { DonutChart } from '@ui5/webcomponents-react-charts/lib/next/DonutChart';
import React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';

export default {
  title: '2 Charts /  DonutChart',
  component: DonutChart
};

export const renderStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      width={'50%'}
      dataset={simpleDataSet}
      labelKey={'name'}
      chartConfig={{ dataLabel: true }}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderCustomColorStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      width={'50%'}
      dataset={simpleDataSet}
      labelKey={'name'}
      color={'lightblue'}
      chartConfig={{ dataLabel: true }}
    />
  );
};

renderCustomColorStory.story = {
  name: 'With custom color'
};

export const withPaddingStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      width={'50%'}
      dataset={simpleDataSet}
      labelKey={'name'}
      chartConfig={{ dataLabel: true, paddingAngle: 5 }}
    />
  );
};

withPaddingStory.story = {
  name: 'With padding angle'
};

export const withCustomnRadiusStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      width={'50%'}
      dataset={simpleDataSet}
      labelKey={'name'}
      chartConfig={{ dataLabel: true, innerRadius: '25%' }}
    />
  );
};

withCustomnRadiusStory.story = {
  name: 'With custom inner radius'
};

export const loadingPlaceholder = () => <DonutChart width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const withFormatedStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      width={'50%'}
      dataset={simpleDataSet}
      labelKey={'name'}
      chartConfig={{ dataLabel: true, paddingAngle: 5 }}
      dataLabelFormatter={(d) => (d > 200 ? 'Over 200' : 'too low')}
    />
  );
};

withFormatedStory.story = {
  name: 'With formatter'
};
