import '@ui5/webcomponents/dist/CalendarDate.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface CalendarDateAttributes {
  /**
   * The date formatted according to the `formatPattern` property of the `Calendar` that hosts the component
   */
  value?: string;
}

export interface CalendarDateDomRef extends CalendarDateAttributes, Ui5DomRef {}

export interface CalendarDatePropTypes extends CalendarDateAttributes, CommonProps {
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

/**
 * The `CalendarDate` component defines a calendar date to be used inside `Calendar`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/CalendarDate" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const CalendarDate = withWebComponent<CalendarDatePropTypes, CalendarDateDomRef>(
  'ui5-date',
  ['value', 'waitForDefine'],
  [],
  [],
  []
);

CalendarDate.displayName = 'CalendarDate';

export { CalendarDate };
