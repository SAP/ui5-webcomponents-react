import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { DurationPicker } from '@ui5/webcomponents-react/lib/DurationPicker';
import React from 'react';

export default {
  title: 'UI5 Web Components / DurationPicker',
  component: DurationPicker
};

export const generatedDefaultStory = () => (
  <DurationPicker
    disabled={boolean('disabled', false)}
    maxValue={text('maxValue', '23:59:59')}
    readonly={boolean('readonly', false)}
    showSeconds={boolean('showSeconds', false)}
    value={text('value', '00:00:00')}
    valueState={text('valueState', 'None')}
    onChange={action('onChange')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
