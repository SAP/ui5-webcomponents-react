import { Event } from '@fiori-for-react/utils';
import { CalendarType } from '../../lib/CalendarType';
import UI5YearPicker from '@ui5/webcomponents/dist/YearPicker';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface YearPickerPropTypes extends WithWebComponentPropTypes {
  timestamp?: number; // @generated
  primaryCalendarType?: CalendarType; // @generated
  onSelectedYearChange?: (event: Event) => void; // @generated
}

const YearPicker: FC<YearPickerPropTypes> = withWebComponent<YearPickerPropTypes>(UI5YearPicker);

YearPicker.displayName = 'YearPicker';

export { YearPicker };
