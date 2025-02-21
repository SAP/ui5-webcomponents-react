'use client';

import '@ui5/webcomponents/dist/TableVirtualizer.js';
import type { RangeChangeEventDetail } from '@ui5/webcomponents/dist/TableVirtualizer.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface TableVirtualizerAttributes {
  /**
   * Defines the count of extra rows to be rendered at the top and bottom of the table.
   *
   * **Note:** This property is experimental and may be changed or deleted in the future.
   * @default 0
   */
  extraRows?: number;

  /**
   * Defines the total count of rows in the table.
   *
   * **Note:** For virtualization to work properly, this property is mandatory.
   * @default 100
   */
  rowCount?: number;

  /**
   * Defines the height of the rows in the table.
   *
   * **Note:** For virtualization to work properly, this property is mandatory.
   * @default 45
   */
  rowHeight?: number;
}

interface TableVirtualizerDomRef extends Required<TableVirtualizerAttributes>, Ui5DomRef {
  /**
   * Resets the virtualizer to its initial state and triggers the `range-change` event.
   * @returns {void}
   */
  reset: () => void;
}

interface TableVirtualizerPropTypes
  extends TableVirtualizerAttributes,
    Omit<CommonProps, keyof TableVirtualizerAttributes | 'onRangeChange'> {
  /**
   * Fired when the virtualizer is changed by user interaction e.g. on scrolling.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onRangeChange?: (event: Ui5CustomEvent<TableVirtualizerDomRef, RangeChangeEventDetail>) => void;
}

/**
 * The `TableVirtualizer` component is used inside the `Table` to virtualize the table rows, if the `overflowMode` property of the table is set to 'Scroll'.
 * It is responsible for rendering only the rows that are visible in the viewport and updating them on scroll.
 * This allows large numbers of rows to exist, but maintain high performance by only paying the cost for those that are currently visible.
 *
 * **Note:** The maximum number of virtualized rows is limited by browser constraints, specifically the maximum supported height for a DOM element.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of __@ui5/webcomponents__.
 * @experimental This component is not intended to be used in a productive enviroment. The API is under development and may be changed in the future.
 */
const TableVirtualizer = withWebComponent<TableVirtualizerPropTypes, TableVirtualizerDomRef>(
  'ui5-table-virtualizer',
  ['extraRows', 'rowCount', 'rowHeight'],
  [],
  [],
  ['range-change']
);

TableVirtualizer.displayName = 'TableVirtualizer';

export { TableVirtualizer };
export type { TableVirtualizerDomRef, TableVirtualizerPropTypes };
