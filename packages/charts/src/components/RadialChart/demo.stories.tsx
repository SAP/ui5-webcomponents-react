import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadialChart } from './index';

function renderStory() {
  return <RadialChart value={40} displayValue="40%" />;
}

storiesOf('Charts | RadialChart', module).add('Default', renderStory);
