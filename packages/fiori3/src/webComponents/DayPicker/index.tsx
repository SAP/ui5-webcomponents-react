import React, { FC } from 'react';
import { CalendarType } from '../../lib/CalendarType';
import { Event } from '@fiori-for-react/utils';
import UI5DayPicker from '@ui5/webcomponents/dist/DayPicker';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

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
