import { Calendar } from '@lib/Calendar';
import { CalendarType } from '@lib/CalendarType';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

const now = new Date().getTime();

storiesOf('UI5 Web Components | Calendar', module).add('Generated default story', () => (
  <Calendar
    timestamp={42}
    primaryCalendarType={select('primaryCalendarType', CalendarType, null)}
    selectedDates={[now]}
    formatPattern={'generatedString'}
    onSelectedDatesChange={null}
  />
));
