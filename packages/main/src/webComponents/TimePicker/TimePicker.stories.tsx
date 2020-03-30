import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { TimePicker } from '@ui5/webcomponents-react/lib/TimePicker';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / TimePicker',
  component: TimePicker
};

export const generatedDefaultStory = () => (
  <TimePicker
    disabled={boolean('disabled', false)}
    formatPattern={text('formatPattern', 'hh:mm:ss a')}
    placeholder={text('placeholder', undefined)}
    readonly={boolean('readonly', false)}
    value={text('value', '')}
    valueState={select('valueState', ValueState, ValueState.None)}
    onChange={action('onChange')}
    onInput={action('onInput')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
