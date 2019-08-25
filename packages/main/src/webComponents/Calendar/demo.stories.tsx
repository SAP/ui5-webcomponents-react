import { select } from '@storybook/addon-knobs';
import React from 'react';
import { Calendar } from '../../lib/Calendar';
import { CalendarType } from '../../lib/CalendarType';

const now = new Date().getTime();

export default {
  title: 'UI5 Web Components | Calendar',
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
