import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React from 'react';

export default {
  title: 'UI5 Web Components / ToggleButton',
  component: ToggleButton
};

export const generatedDefaultStory = () => (
  <ToggleButton
    design={select('design', ButtonDesign, null)}
    disabled={boolean('disabled', false)}
    icon="add"
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
