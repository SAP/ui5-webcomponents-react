import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React from 'react';

export default {
  title: 'UI5 Web Components / ToggleButton',
  component: ToggleButton
};

export const generatedDefaultStory = () => (
  <ToggleButton
    pressed={boolean('pressed', false)}
    design={select('design', ButtonDesign, ButtonDesign.Default)}
    disabled={boolean('disabled', false)}
    icon={text('icon', '')}
    iconEnd={boolean('iconEnd', false)}
    submits={boolean('submits', false)}
    onClick={action('onClick')}
  >
    Some Content
  </ToggleButton>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
