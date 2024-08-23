'use client';

import '@ui5/webcomponents/dist/CalendarDateRange.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface CalendarDateRangeAttributes {
  /**
   * End of date range formatted according to the `formatPattern` property
   * of the `Calendar` that hosts the component.
   */
  endValue?: string;

  /**
   * Start of date range formatted according to the `formatPattern` property
   * of the `Calendar` that hosts the component.
   */
  startValue?: string;
}

interface CalendarDateRangeDomRef extends Required<CalendarDateRangeAttributes>, Ui5DomRef {}

interface CalendarDateRangePropTypes
  extends CalendarDateRangeAttributes,
    Omit<CommonProps, keyof CalendarDateRangeAttributes> {}

/**
 * The `CalendarDateRange` component defines a range of dates to be used inside `Calendar`
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 * @abstract
 */
const CalendarDateRange = withWebComponent<CalendarDateRangePropTypes, CalendarDateRangeDomRef>(
  'ui5-date-range',
  ['endValue', 'startValue'],
  [],
  [],
  []
);

CalendarDateRange.displayName = 'CalendarDateRange';

export { CalendarDateRange };
export type { CalendarDateRangeDomRef, CalendarDateRangePropTypes };
