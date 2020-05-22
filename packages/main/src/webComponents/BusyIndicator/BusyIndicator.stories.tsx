import { boolean, select, text } from '@storybook/addon-knobs';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import React from 'react';

export default {
  title: 'UI5 Web Components / BusyIndicator',
  component: BusyIndicator
};

export const generatedDefaultStory = () => (
  <BusyIndicator
    active={boolean('active', true)}
    size={select('size', BusyIndicatorSize, BusyIndicatorSize.Medium)}
    text={text('text', 'Loading...')}
  >
    Some Content
  </BusyIndicator>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
