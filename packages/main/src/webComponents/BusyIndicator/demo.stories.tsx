import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { BusyIndicator } from '../../lib/BusyIndicator';
import { BusyIndicatorType } from '../../lib/BusyIndicatorType';

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
