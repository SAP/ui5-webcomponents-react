import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import UI5DatePicker from '@ui5/webcomponents/dist/DatePicker';
import React, { FC } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

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
  onInput?: (event: Event) => void; // @generated
}

const DatePicker: FC<DatePickerPropTypes> = withWebComponent<DatePickerPropTypes>(UI5DatePicker);

DatePicker.displayName = 'DatePicker';

DatePicker.defaultProps = {
  valueState: ValueState.None // @generated
};

export { DatePicker };
