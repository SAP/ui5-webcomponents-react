import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { PieChart } from '@ui5/webcomponents-react-charts/lib/next/PieChart';
import React from 'react';
import { simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts - Unstable /  PieChart',
  component: PieChart
};

export const renderStory = () => {
  return (
    <PieChart
      loading={boolean('loading', false)}
      noLegend={boolean('noLegend', false)}
      noAnimation={boolean('noAnimation', false)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      chartConfig={{
        innerRadius: text('innerRadius', '0%'),
        outerRadius: text('outerRadius', '80%')
      }}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users'
      }}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderCustomColorStory = () => {
  return (
    <PieChart
      loading={boolean('loading', false)}
      noLegend={boolean('noLegend', false)}
      noAnimation={boolean('noAnimation', false)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users',
        colors: ['#f00', 'green', 'var(--sapNegativeColor)']
      }}
    />
  );
};

renderCustomColorStory.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <PieChart style={{ width: '50%' }} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const renderFormatedStory = () => {
  return (
    <PieChart
      loading={boolean('loading', false)}
      noLegend={boolean('noLegend', false)}
      noAnimation={boolean('noAnimation', false)}
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users',
        formatter: (d) => (d > 200 ? 'over 200' : 'lower')
      }}
    />
  );
};

renderFormatedStory.story = {
  name: 'With formatted data labels'
};
