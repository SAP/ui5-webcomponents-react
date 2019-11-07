import { number, text } from '@storybook/addon-knobs';
import React from 'react';
import { RadialChart } from './index';

export default {
  title: 'Charts | RadialChart',
  component: RadialChart
};

export const defaultStory = () => (
  <RadialChart value={number('value', 40)} displayValue={text('displayValue', '40%')} />
);

defaultStory.story = {
  name: 'Default'
};

export const inContainer = () => (
  <div style={{ width: '100px', height: '100px', margin: '0 auto', position: 'relative' }}>
    <RadialChart value={number('value', 90)} displayValue={text('displayValue', '90%')} width={100} height={100} />
  </div>
);

inContainer.story = {
  name: 'In Container'
};
