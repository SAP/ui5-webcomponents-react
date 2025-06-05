'use client';

import '@ui5/webcomponents/dist/DynamicDateRange.js';
import type {
  DynamicDateRangeChangeEventDetail,
  DynamicDateRangeValue,
} from '@ui5/webcomponents/dist/DynamicDateRange.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface DynamicDateRangeAttributes {
  /**
   * Defines the options listed as a string, separated by commas and using capital case.
   * Example: "TODAY, YESTERDAY, DATERANGE"
   */
  options?: string;

  /**
   * Defines the value object.
   * @default undefined
   */
  value?: DynamicDateRangeValue | undefined;
}

interface DynamicDateRangeDomRef extends Required<DynamicDateRangeAttributes>, Ui5DomRef {}

interface DynamicDateRangePropTypes
  extends DynamicDateRangeAttributes,
    Omit<CommonProps, keyof DynamicDateRangeAttributes | 'onChange'> {
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout or a value is selected in the popover.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onChange?: (event: Ui5CustomEvent<DynamicDateRangeDomRef, DynamicDateRangeChangeEventDetail>) => void;
}

/**
 * The `DynamicDateRange` component provides a flexible interface to define date ranges using a combination of absolute dates, relative intervals, and preset ranges (e.g., "Today", "Yesterday", etc.).
 * It allows users to select a date range from a predefined set of options or enter custom dates.
 *
 * ### Usage
 *
 * The component is typically used in scenarios where users need to filter data based on date ranges, such as in reports, dashboards, or data analysis tools.
 * It can be used with the predefined options or extended with custom options to suit specific requirements. You can create your own options by extending the `IDynamicDateRangeOption` interface.
 * Every option should be registered using the `DynamicDateRange.register` method.
 *
 * If needed, you can also create a range of dates based on specific option using the `toDates` method.
 *
 * ### Standard Options
 *
 * The component comes with a set of standard options, including:
 * - "TODAY" - Represents the current date. An example value is `{ operator: "TODAY"}`. Import: `import "@ui5/webcomponents/dist/dynamic-date-range-options/Today.js";`
 * - "YESTERDAY" - Represents the previous date. An example value is `{ operator: "YESTERDAY"}`. Import: `import "@ui5/webcomponents/dist/dynamic-date-range-options/Yesterday.js";`
 * - "TOMORROW" - Represents the next date. An example value is `{ operator: "TOMORROW"}`. Import: `import "@ui5/webcomponents/dist/dynamic-date-range-options/Tomorrow.js";`
 * - "DATE" - Represents a single date. An example value is `{ operator: "DATE", values: [new Date()]}`. Import: `import "@ui5/webcomponents/dist/dynamic-date-range-options/SingleDate.js";`
 * - "DATERANGE" - Represents a range of dates. An example value is `{ operator: "DATERANGE", values: [new Date(), new Date()]}`. Import: `import "@ui5/webcomponents/dist/dynamic-date-range-options/DateRange.js";`
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const DynamicDateRange = withWebComponent<DynamicDateRangePropTypes, DynamicDateRangeDomRef>(
  'ui5-dynamic-date-range',
  ['options', 'value'],
  [],
  [],
  ['change'],
);

DynamicDateRange.displayName = 'DynamicDateRange';

export { DynamicDateRange };
export type { DynamicDateRangeDomRef, DynamicDateRangePropTypes };
