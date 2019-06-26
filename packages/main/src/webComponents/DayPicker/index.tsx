import { Event } from '@ui5/webcomponents-react-base';
import UI5DayPicker from '@ui5/webcomponents/dist/DayPicker';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { CalendarType } from '../../lib/CalendarType';

export interface DayPickerPropTypes extends WithWebComponentPropTypes {
  timestamp?: number; // @generated
  primaryCalendarType?: CalendarType; // @generated
  selectedDates?: number[]; // @generated
  onSelectionChange?: (event: Event) => void; // @generated
  onNavigate?: (event: Event) => void; // @generated
}

const DayPicker: FC<DayPickerPropTypes> = withWebComponent<DayPickerPropTypes>(UI5DayPicker);

DayPicker.displayName = 'DayPicker';

export { DayPicker };
