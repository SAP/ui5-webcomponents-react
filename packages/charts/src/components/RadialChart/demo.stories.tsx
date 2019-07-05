import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import React from 'react';
import { RadialChart } from './index';

function renderStory() {
  return <RadialChart value={number('value', 40)} displayValue={text('displayValue', '40%')} />;
}

const renderInContainer = () => (
  <div style={{ width: '100px', height: '100px', margin: '0 auto', position: 'relative' }}>
    <RadialChart value={number('value', 90)} displayValue={text('displayValue', '90%')} width={100} height={100} />
  </div>
);

storiesOf('Charts | RadialChart', module)
  .add('Default', renderStory)
  .add('In Container', renderInContainer);
