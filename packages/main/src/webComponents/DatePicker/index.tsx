import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5DatePicker from '@ui5/webcomponents/dist/DatePicker';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

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

/**
 * <code>import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/DatePicker" target="_blank">UI5 Web Components Playground</a>
 */
const DatePicker: FC<DatePickerPropTypes> = withWebComponent<DatePickerPropTypes>(UI5DatePicker);

DatePicker.displayName = 'DatePicker';

DatePicker.defaultProps = {
  valueState: ValueState.None // @generated
};

export { DatePicker };
