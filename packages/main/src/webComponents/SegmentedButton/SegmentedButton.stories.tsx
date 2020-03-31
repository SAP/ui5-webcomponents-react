import { action } from '@storybook/addon-actions';
import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React from 'react';

export default {
  title: 'UI5 Web Components / SegmentedButton',
  component: SegmentedButton,
  parameters: {
    subcomponents: { ToggleButton }
  }
};

export const generatedDefaultStory = () => (
  <SegmentedButton onSelectionChange={action('onSelectionChange')}>
    <ToggleButton>Button 1</ToggleButton>
    <ToggleButton pressed>Button 2</ToggleButton>
    <ToggleButton>Button 3</ToggleButton>
  </SegmentedButton>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
