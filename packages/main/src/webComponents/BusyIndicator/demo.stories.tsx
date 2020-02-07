import { boolean, select } from '@storybook/addon-knobs';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import React from 'react';

export default {
  title: 'UI5 Web Components / BusyIndicator',
  component: BusyIndicator
};

export const defaultStory = () => (
  <BusyIndicator size={select('size', BusyIndicatorSize, BusyIndicatorSize.Large)} active={boolean('active', true)} />
);

defaultStory.story = {
  name: 'Default story'
};
