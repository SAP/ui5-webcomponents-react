'use client';

import '@ui5/webcomponents/dist/SpecialCalendarDate.js';
import type CalendarLegendItemType from '@ui5/webcomponents/dist/types/CalendarLegendItemType.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface SpecialCalendarDateAttributes {
  /**
   * Defines the type of the special date.
   * @default "None"
   */
  type?: CalendarLegendItemType | keyof typeof CalendarLegendItemType;

  /**
   * The date formatted according to the `formatPattern` property
   * of the `Calendar` that hosts the component.
   */
  value?: string;
}

interface SpecialCalendarDateDomRef extends Required<SpecialCalendarDateAttributes>, Ui5DomRef {}

interface SpecialCalendarDatePropTypes
  extends SpecialCalendarDateAttributes,
    Omit<CommonProps, keyof SpecialCalendarDateAttributes> {}

/**
 * The `SpecialCalendarDate` component defines a special calendar date to be used inside `Calendar`,
 * which is visually distinguished from the rest of the dates.
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const SpecialCalendarDate = withWebComponent<SpecialCalendarDatePropTypes, SpecialCalendarDateDomRef>(
  'ui5-special-date',
  ['type', 'value'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/SpecialCalendarDate.js')
);

SpecialCalendarDate.displayName = 'SpecialCalendarDate';

export { SpecialCalendarDate };
export type { SpecialCalendarDateDomRef, SpecialCalendarDatePropTypes };
