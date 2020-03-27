import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { RadioButton } from '@ui5/webcomponents-react/lib/RadioButton';
import React from 'react';

export default {
  title: 'UI5 Web Components / RadioButton',
  component: RadioButton
};

export const generatedDefaultStory = () => (
  <RadioButton
    disabled={boolean('disabled', false)}
    name={text('name', '')}
    readonly={boolean('readonly', false)}
    selected={boolean('selected', false)}
    text={text('text', 'Radio Button Text')}
    value={text('value', undefined)}
    valueState={text('valueState', 'None')}
    wrap={boolean('wrap', false)}
    onSelect={action('onSelect')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
