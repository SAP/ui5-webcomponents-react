import React from 'react';
import { TimePicker } from '@ui5/webcomponents-react/lib/TimePicker';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
export default {
  title: 'UI5 Web Components / TimePicker',
  component: TimePicker
};

export const generatedDefaultStory = () => (
  <TimePicker
    disabled={boolean('disabled', true)}
    formatPattern={text('formatPattern', '')}
    placeholder={text('placeholder', undefined)}
    readonly={boolean('readonly', true)}
    value={text('value', '')}
    valueState={text('valueState', 'None')}
    onChange={action('onChange')}
    onInput={action('onInput')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
