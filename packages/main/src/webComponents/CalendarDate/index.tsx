import '@ui5/webcomponents/dist/CalendarDate.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Calendar" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const CalendarDate = withWebComponent<CalendarDatePropTypes, CalendarDateDomRef>('ui5-date', ['value'], [], [], []);

CalendarDate.displayName = 'CalendarDate';

export { CalendarDate };
