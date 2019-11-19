import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import notes from './ToggleButton.md';

export default {
  title: 'UI5 Web Components | ToggleButton',
  component: ToggleButton,
  parameters: { notes }
};

export const generatedDefaultStory = () => (
  <ToggleButton
    design={select('design', ButtonDesign, null)}
    disabled={boolean('disabled', false)}
    icon="sap-icon://add"
    iconEnd={boolean('iconEnd', false)}
    pressed={boolean('pressed', false)}
    onClick={action('onClick')}
  >
    Some Content
  </ToggleButton>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
