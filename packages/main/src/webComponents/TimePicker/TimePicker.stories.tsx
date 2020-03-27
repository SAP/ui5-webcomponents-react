import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { TimePicker } from '@ui5/webcomponents-react/lib/TimePicker';
import React from 'react';

export default {
  title: 'UI5 Web Components / TimePicker',
  component: TimePicker
};

export const generatedDefaultStory = () => (
  <TimePicker
    disabled={boolean('disabled', false)}
    formatPattern={text('formatPattern', '')}
    placeholder={text('placeholder', undefined)}
    readonly={boolean('readonly', false)}
    value={text('value', '')}
    valueState={text('valueState', 'None')}
    onChange={action('onChange')}
    onInput={action('onInput')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
