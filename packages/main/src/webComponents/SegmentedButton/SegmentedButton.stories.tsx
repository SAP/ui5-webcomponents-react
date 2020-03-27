import React from 'react';
import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';
import { action } from '@storybook/addon-actions';
import {} from '@storybook/addon-knobs';
export default {
  title: 'UI5 Web Components / SegmentedButton',
  component: SegmentedButton
};

export const generatedDefaultStory = () => (
  <SegmentedButton onSelectionChange={action('onSelectionChange')}>Some Content</SegmentedButton>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
