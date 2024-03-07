'use client';

import '@ui5/webcomponents/dist/CalendarLegend.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface CalendarLegendAttributes {
  /**
   * Hides the Non-Working day item in the legend.
   * @default false
   */
  hideNonWorkingDay?: boolean;

  /**
   * Hides the Selected day item in the legend.
   * @default false
   */
  hideSelectedDay?: boolean;

  /**
   * Hides the Today item in the legend.
   * @default false
   */
  hideToday?: boolean;

  /**
   * Hides the Working day item in the legend.
   * @default false
   */
  hideWorkingDay?: boolean;
}

interface CalendarLegendDomRef extends Required<CalendarLegendAttributes>, Ui5DomRef {}

interface CalendarLegendPropTypes
  extends CalendarLegendAttributes,
    Omit<CommonProps, keyof CalendarLegendAttributes | 'children'> {
  /**
   * Defines the items of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `CalendarLegend` component is designed for use within the `Calendar` to display a legend.
 * Each `CalendarLegendItem` represents a unique date type, specifying its visual style
 * and a corresponding textual label.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const CalendarLegend = withWebComponent<CalendarLegendPropTypes, CalendarLegendDomRef>(
  'ui5-calendar-legend',
  [],
  ['hideNonWorkingDay', 'hideSelectedDay', 'hideToday', 'hideWorkingDay'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/CalendarLegend.js')
);

CalendarLegend.displayName = 'CalendarLegend';

export { CalendarLegend };
export type { CalendarLegendDomRef, CalendarLegendPropTypes };
