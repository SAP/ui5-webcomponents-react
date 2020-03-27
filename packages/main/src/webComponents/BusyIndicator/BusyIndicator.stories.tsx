import { boolean, select } from '@storybook/addon-knobs';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import React from 'react';

export default {
  title: 'UI5 Web Components / BusyIndicator',
  component: BusyIndicator
};

export const generatedDefaultStory = () => (
  <BusyIndicator active={boolean('active', false)} size={select('size', BusyIndicatorSize, BusyIndicatorSize['Large'])}>
    Some Content
  </BusyIndicator>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
