// import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / DatePicker',
  component: DatePicker,
  argTypes: {
    ...createSelectArgTypes({ valueState: ValueState }),
    ref: {
      type: null
    }
  },
  args: {
    placeholder: undefined,
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <DatePicker
    disabled={props.disabled}
    formatPattern={props.formatPattern}
    maxDate={props.maxDate}
    minDate={props.minDate}
    name={props.name}
    placeholder={props.placeholder}
    readonly={props.readonly}
    value={props.value}
    valueState={props.valueState}
    onChange={props.onChange}
    onInput={props.onInput}
    // primaryCalendarType={select('primaryCalendarType', CalendarType, CalendarType.Gregorian)}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
