import { number, text } from '@storybook/addon-knobs';
import { RadialChart } from '@ui5/webcomponents-react-charts/lib/next/RadialChart';
import React from 'react';
import { action } from '@storybook/addon-actions';

const dataset = [{ name: 'L1', value: 67 }];

export default {
  title: '2 Charts /  RadialChart',
  component: RadialChart
};

export const renderStory = () => {
  return (
    <RadialChart
      value={number('value', 67)}
      displayValue={text('displayValue', '67%')}
      width={text('width', '300px')}
      height={text('height', '300px')}
      onDataPointClick={action('onDataPointClick')}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const customColorStory = () => {
  return (
    <RadialChart
      value={number('value', 150)}
      displayValue={text('displayValue', '150l')}
      maxValue={number('maxValue', 250)}
      width={text('width', '300px')}
      height={text('height', '300px')}
      color={text('color', '#f0ab00')}
    />
  );
};

customColorStory.story = {
  name: 'with custom color'
};
