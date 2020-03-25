import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Calendar from '@ui5/webcomponents/dist/Calendar';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CalendarPropTypes extends WithWebComponentPropTypes {
  timestamp?: number; // @generated
  primaryCalendarType?: CalendarType; // @generated
  selectedDates?: number[]; // @generated
  formatPattern?: string; // @generated
  onSelectedDatesChange?: (event: CustomEvent) => void; // @generated
}

/**
 * <code>import { Calendar } from '@ui5/webcomponents-react/lib/Calendar';</code>
 */
const Calendar: FC<CalendarPropTypes> = withWebComponent<CalendarPropTypes>(UI5Calendar);

Calendar.displayName = 'Calendar';

export { Calendar };
