import React from 'react';
import { storiesOf } from '@storybook/react';
import { CalendarType } from '@fiori-for-react/core/enums/CalendarType';
import { select } from '@storybook/addon-knobs';
import { Calendar } from './index';

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
