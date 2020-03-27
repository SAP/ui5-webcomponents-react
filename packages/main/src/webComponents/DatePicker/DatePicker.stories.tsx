import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import React from 'react';

export default {
  title: 'UI5 Web Components / DatePicker',
  component: DatePicker
};

export const generatedDefaultStory = () => (
  <DatePicker
    disabled={boolean('disabled', false)}
    formatPattern={text('formatPattern', '')}
    maxDate={text('maxDate', '')}
    minDate={text('minDate', '')}
    name={text('name', '')}
    placeholder={text('placeholder', undefined)}
    primaryCalendarType={text('primaryCalendarType', 'Gregorian')}
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
