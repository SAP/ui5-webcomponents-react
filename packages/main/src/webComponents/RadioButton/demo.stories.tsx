import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { RadioButton } from '../../lib/RadioButton';
import { ValueState } from '../../lib/ValueState';

export default {
  title: 'UI5 Web Components | RadioButton',
  component: RadioButton
};

export const defaultStory = () => (
  <RadioButton
    disabled={boolean('disabled', false)}
    readonly={boolean('readonly', false)}
    selected={boolean('selected', false)}
    text={text('text', 'Option A')}
    valueState={select('valueState', ValueState, null)}
    onSelect={action('onSelect')}
  />
);

defaultStory.story = {
  name: 'Default'
};
