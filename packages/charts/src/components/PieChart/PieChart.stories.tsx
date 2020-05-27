import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { PieChart } from '../../lib/PieChart';
import { simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts /  PieChart',
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

renderStory.storyName = 'Default';

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

renderCustomColorStory.storyName = 'With custom color';

export const loadingPlaceholder = () => <PieChart style={{ width: '50%' }} />;

loadingPlaceholder.storyName = 'Loading placeholder';

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

renderFormatedStory.storyName = 'With formatted data labels';
