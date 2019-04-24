import React, { FC } from 'react';
import { CalendarType } from '@fiori-for-react/core/enums/CalendarType';
import { Event } from '@fiori-for-react/utils';
import UI5Calendar from '@ui5/webcomponents/dist/Calendar';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CalendarPropTypes extends WithWebComponentPropTypes {
  timestamp?: number; // @generated
  primaryCalendarType?: CalendarType; // @generated
  selectedDates?: number[]; // @generated
  formatPattern?: string; // @generated
  onSelectedDatesChange?: (event: Event) => void; // @generated
}

const Calendar: FC<CalendarPropTypes> = withWebComponent<CalendarPropTypes>(UI5Calendar);

Calendar.displayName = 'Calendar';

export { Calendar };
