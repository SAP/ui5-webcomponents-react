import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { RadialChart } from '@ui5/webcomponents-react-charts/lib/next/RadialChart';
import React from 'react';

export default {
  title: 'Charts /  RadialChart',
  component: RadialChart
};

export const renderStory = () => {
  return (
    <RadialChart
      value={number('value', 67)}
      displayValue={text('displayValue', '67%')}
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
      color={text('color', '#f0ab00')}
    />
  );
};

customColorStory.story = {
  name: 'with custom color'
};
