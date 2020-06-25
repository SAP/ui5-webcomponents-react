import { Calendar } from '@ui5/webcomponents-react/lib/Calendar';
import React from 'react';

export default {
  title: 'UI5 Web Components / Calendar',
  component: Calendar,
  arg: {
    maxDate: '2099-12-31',
    minDate: '2020-01-01'
  },
  argTypes: {
    ref: {
      type: null
    }
  }
};

export const generatedDefaultStory = (props) => (
  <Calendar
    maxDate={props.maxDate}
    minDate={props.minDate}
    // primaryCalendarType={select('primaryCalendarType', CalendarType, CalendarType.Gregorian)}
    selectedDates={null}
    timestamp={props.timestamp}
    onSelectedDatesChange={props.onSelectedDatesChange}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
