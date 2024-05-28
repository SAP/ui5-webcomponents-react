'use client';

import '@ui5/webcomponents/dist/CalendarLegendItem.js';
import type CalendarLegendItemType from '@ui5/webcomponents/dist/types/CalendarLegendItemType.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface CalendarLegendItemAttributes {
  /**
   * Defines the text content of the Calendar Legend Item.
   */
  text?: string;

  /**
   * Defines the type of the Calendar Legend Item.
   * @default "None"
   */
  type?: CalendarLegendItemType | keyof typeof CalendarLegendItemType;
}

interface CalendarLegendItemDomRef extends Required<CalendarLegendItemAttributes>, Ui5DomRef {}

interface CalendarLegendItemPropTypes
  extends CalendarLegendItemAttributes,
    Omit<CommonProps, keyof CalendarLegendItemAttributes> {}

/**
 * Each `CalendarLegendItem` represents a legend item, displaying a color with a label.
 * The color is determined by the `type` property and the label by the `text` property.
 * If a `SpecialCalendarDate` is used within the `Calendar` and a type is set, clicking on a `CalendarLegendItem`
 * with the same type will emphasize the respective date(s) in the calendar.
 *
 * ### Usage
 * The `CalendarLegendItem` is intended to be used within the `CalendarLegend` component.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of __@ui5/webcomponents__.
 */
const CalendarLegendItem = withWebComponent<CalendarLegendItemPropTypes, CalendarLegendItemDomRef>(
  'ui5-calendar-legend-item',
  ['text', 'type'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/CalendarLegendItem.js')
);

CalendarLegendItem.displayName = 'CalendarLegendItem';

export { CalendarLegendItem };
export type { CalendarLegendItemDomRef, CalendarLegendItemPropTypes };
