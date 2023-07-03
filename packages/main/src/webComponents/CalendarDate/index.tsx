'use client';

import '@ui5/webcomponents/dist/CalendarDate.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface CalendarDateAttributes {
  /**
   * The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component.
   */
  value?: string;
}

export interface CalendarDateDomRef extends CalendarDateAttributes, Ui5DomRef {}

export interface CalendarDatePropTypes extends CalendarDateAttributes, CommonProps {}

/**
 * The `CalendarDate` component defines a calendar date to be used inside `Calendar`
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Calendar" target="_blank">UI5 Web Components Storybook</ui5-link>
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
