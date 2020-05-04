import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { DateTimePicker } from '@ui5/webcomponents-react/lib/DateTimePicker';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / DateTimePicker',
  component: DateTimePicker
};

export const generatedDefaultStory = () => (
  <DateTimePicker
    disabled={boolean('disabled', false)}
    formatPattern={text('formatPattern', '')}
    maxDate={text('maxDate', '')}
    minDate={text('minDate', '')}
    name={text('name', '')}
    placeholder={text('placeholder', undefined)}
    primaryCalendarType={select('primaryCalendarType', CalendarType, CalendarType.Gregorian)}
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
