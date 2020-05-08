import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { PieChart } from '@ui5/webcomponents-react-charts/lib/next/PieChart';
import React, { useEffect, useState } from 'react';
import { simpleDataSet } from '../../resources/DemoProps';
import { Spinner } from '@ui5/webcomponents-react';
import { dataset } from '../../resources/RechartProps';

export default {
  title: 'Charts - Unstable /  PieChart',
  component: PieChart
};

export const renderStory = () => {
  return (
    <PieChart
      onDataPointClick={action('onDataPointClick')}
      onLegendClick={action('onLegendClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      chartConfig={{
        innerRadius: text('innerRadius', '0%')
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
