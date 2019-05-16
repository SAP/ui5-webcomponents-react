import { Event } from '@fiori-for-react/utils';
import { CalendarType } from '@lib/CalendarType';
import { ValueState } from '@lib/ValueState';
import UI5DatePicker from '@ui5/webcomponents/dist/DatePicker';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface DatePickerPropTypes extends WithWebComponentPropTypes {
  value?: string; // @generated
  valueState?: ValueState; // @generated
  formatPattern?: string; // @generated
  primaryCalendarType?: CalendarType; // @generated
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  placeholder?: string; // @generated
  name?: string; // @generated
  onChange?: (event: Event) => void; // @generated
  onLiveChange?: (event: Event) => void; // @generated
}

const DatePicker: FC<DatePickerPropTypes> = withWebComponent<DatePickerPropTypes>(UI5DatePicker);

DatePicker.displayName = 'DatePicker';

DatePicker.defaultProps = {
  value: '', // @generated
  valueState: ValueState.None, // @generated
  placeholder: null // @generated
};

export { DatePicker };
