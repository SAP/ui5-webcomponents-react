import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { Calendar } from '@ui5/webcomponents-react/lib/Calendar';
// import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import React from 'react';

export default {
  title: 'UI5 Web Components / Calendar',
  component: Calendar
};

export const generatedDefaultStory = () => (
  <Calendar
    maxDate={text('maxDate', '2099-12-31')}
    minDate={text('minDate', '2020-01-01')}
    // primaryCalendarType={select('primaryCalendarType', CalendarType, CalendarType.Gregorian)}
    selectedDates={null}
    timestamp={number('timestamp', undefined)}
    onSelectedDatesChange={action('onSelectedDatesChange')}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
