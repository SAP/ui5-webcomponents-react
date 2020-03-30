import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
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
    value={select('value', ValueState, ValueState.None)}
    valueState={text('valueState', 'None')}
    wrap={boolean('wrap', false)}
    onSelect={action('onSelect')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
