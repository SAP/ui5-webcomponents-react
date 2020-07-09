import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { DateTimePicker } from '@ui5/webcomponents-react/lib/DateTimePicker';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / DateTimePicker',
  component: DateTimePicker,
  argTypes: {
    ...createSelectArgTypes({ valueState: ValueState, primaryCalendarType: CalendarType }),
    ref: {
      type: null
    }
  },
  args: {
    placeholder: undefined,
    primaryCalendarType: CalendarType.Gregorian,
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <DateTimePicker
    disabled={props.disabled}
    formatPattern={props.formatPattern}
    maxDate={props.maxDate}
    minDate={props.minDate}
    name={props.name}
    placeholder={props.placeholder}
    primaryCalendarType={props.primaryCalendarType}
    readonly={props.readonly}
    value={props.value}
    valueState={props.valueState}
    onChange={props.onChange}
    onInput={props.onInput}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
