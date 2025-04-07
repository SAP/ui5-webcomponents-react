'use client';

import '@ui5/webcomponents/dist/TableSelectionMulti.js';
import type TableRow from '@ui5/webcomponents/dist/TableRow.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface TableSelectionMultiAttributes {
  /**
   * Defines the `row-key` values of selected rows, with each value separated by a space.
   * @default undefined
   */
  selected?: string | undefined;
}

interface TableSelectionMultiDomRef extends Required<TableSelectionMultiAttributes>, Ui5DomRef {
  /**
   * Returns the table row instance for the given row key.
   * @param {string} rowKey - The row key
   * @returns {TableRow | undefined}
   */
  getRowByKey: (rowKey: string) => TableRow | undefined;

  /**
   * Returns the `selected` property as a set of unique `row-key` values.
   * @returns {Set<string>}
   */
  getSelectedAsSet: () => Set<string>;

  /**
   * Returns an array of the selected rows.
   * @returns {Array<TableRow>}
   */
  getSelectedRows: () => Array<TableRow>;

  /**
   * Sets the `selected` property using the provided set of unique `row-key` values.
   * @param {Set<string>} selectedSet - A set of `row-key` values
   * @returns {void}
   */
  setSelectedAsSet: (selectedSet: Set<string>) => void;
}

interface TableSelectionMultiPropTypes
  extends TableSelectionMultiAttributes,
    Omit<CommonProps, keyof TableSelectionMultiAttributes | 'onChange'> {
  /**
   * Fired when the selection is changed by user interaction.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onChange?: (event: Ui5CustomEvent<TableSelectionMultiDomRef>) => void;
}

/**
 * The `TableSelectionMulti` component is used inside the `Table` to add multi-selection capabilities to the `Table`.
 * Since selection is key-based, each `TableRow` must define a unique `row-key` property.
 *
 * ### Usage
 *
 * The `TableSelectionMulti` component is a feature designed exclusively for use within the `Table` component.
 * It must be placed inside the `features` slot of `Table`.
 * This component is not intended for standalone use.
 *
 * ```html
 * <Table>
 * 	<TableSelectionMulti slot="features" selected="Row1 Row3"></TableSelectionMulti>
 * </Table>
 * ```
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of __@ui5/webcomponents__.
 */
const TableSelectionMulti = withWebComponent<TableSelectionMultiPropTypes, TableSelectionMultiDomRef>(
  'ui5-table-selection-multi',
  ['selected'],
  [],
  [],
  ['change']
);

TableSelectionMulti.displayName = 'TableSelectionMulti';

export { TableSelectionMulti };
export type { TableSelectionMultiDomRef, TableSelectionMultiPropTypes };
