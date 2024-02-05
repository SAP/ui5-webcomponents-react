'use client';

import '@ui5/webcomponents/dist/CalendarDate.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface CalendarDateAttributes {
  /**
   * The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.
   */
  value?: string;
}

interface CalendarDateDomRef extends CalendarDateAttributes, Ui5DomRef {}

interface CalendarDatePropTypes extends CalendarDateAttributes, Omit<CommonProps, keyof CalendarDateAttributes> {}

/**
 * The `CalendarDate` component defines a calendar date to be used inside `Calendar`
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Calendar)
 */
const CalendarDate = withWebComponent<CalendarDatePropTypes, CalendarDateDomRef>(
  'ui5-date',
  ['value'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/CalendarDate.js')
);

CalendarDate.displayName = 'CalendarDate';

export { CalendarDate };
export type { CalendarDateDomRef, CalendarDatePropTypes };
