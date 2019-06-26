import { Event } from '@ui5/webcomponents-react-base';
import UI5MonthPicker from '@ui5/webcomponents/dist/MonthPicker';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { CalendarType } from '../../lib/CalendarType';

export interface MonthPickerPropTypes extends WithWebComponentPropTypes {
  timestamp?: number; // @generated
  primaryCalendarType?: CalendarType; // @generated
  onSelectedMonthChange?: (event: Event) => void; // @generated
}

const MonthPicker: FC<MonthPickerPropTypes> = withWebComponent<MonthPickerPropTypes>(UI5MonthPicker);

MonthPicker.displayName = 'MonthPicker';

export { MonthPicker };
