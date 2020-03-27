import { boolean } from '@storybook/addon-knobs';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React from 'react';

export default {
  title: 'UI5 Web Components / ToggleButton',
  component: ToggleButton
};

export const generatedDefaultStory = () => (
  <ToggleButton pressed={boolean('pressed', false)}>Toggle Button</ToggleButton>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
