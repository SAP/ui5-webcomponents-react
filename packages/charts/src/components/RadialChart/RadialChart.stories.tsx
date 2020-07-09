import React from 'react';
import { RadialChart } from '../../lib/RadialChart';

export default {
  title: 'Charts /  RadialChart',
  component: RadialChart,
  args: {
    displayValue: '67%',
    value: 67,
    maxValue: 250,
    color: '#f0ab00',
    displayCustomValue: '150l'
  },
  argTypes: {
    dataset: {
      type: null
    },
    chartConfig: {
      type: null
    }
  }
};

export const renderStory = (props) => {
  return (
    <RadialChart value={props.value} displayValue={props.displayValue} onDataPointClick={props.onDataPointClick} />
  );
};

renderStory.storyName = 'Default';

export const customColorStory = (props) => {
  return (
    <RadialChart
      value={props.value}
      displayValue={props.displayCustomValue}
      maxValue={props.maxValue}
      color={props.color}
    />
  );
};

customColorStory.storyName = 'with custom color';
