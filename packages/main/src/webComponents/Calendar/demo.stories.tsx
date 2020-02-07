import { select } from '@storybook/addon-knobs';
import { Calendar } from '@ui5/webcomponents-react/lib/Calendar';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import React from 'react';

const now = new Date().getTime();

export default {
  title: 'UI5 Web Components / Calendar',
  component: Calendar
};

export const generatedDefaultStory = () => (
  <Calendar
    timestamp={42}
    primaryCalendarType={select('primaryCalendarType', CalendarType, null)}
    selectedDates={[now]}
    formatPattern={'generatedString'}
    onSelectedDatesChange={null}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
