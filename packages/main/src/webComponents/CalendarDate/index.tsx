'use client';

import '@ui5/webcomponents/dist/CalendarDate.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface CalendarDateAttributes {
  /**
   * The date formatted according to the `formatPattern` property
   * of the `Calendar` that hosts the component.
   */
  value?: string;
}

interface CalendarDateDomRef extends Required<CalendarDateAttributes>, Ui5DomRef {}

interface CalendarDatePropTypes extends CalendarDateAttributes, Omit<CommonProps, keyof CalendarDateAttributes> {}

/**
 * The `CalendarDate` component defines a calendar date to be used inside `Calendar`
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const CalendarDate = withWebComponent<CalendarDatePropTypes, CalendarDateDomRef>('ui5-date', ['value'], [], [], []);

CalendarDate.displayName = 'CalendarDate';

export { CalendarDate };
export type { CalendarDateDomRef, CalendarDatePropTypes };
