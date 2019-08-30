import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';
import { BusyIndicatorType } from '@ui5/webcomponents-react/lib/BusyIndicatorType';

export default {
  title: 'UI5 Web Components | BusyIndicator',
  component: BusyIndicator
};

export const defaultStory = () => (
  <BusyIndicator size={select('size', BusyIndicatorType, BusyIndicatorType.Large)} active={boolean('active', true)} />
);

defaultStory.story = {
  name: 'Default story'
};
