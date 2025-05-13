'use client';

import '@ui5/webcomponents/dist/TableSelectionSingle.js';
import type TableRow from '@ui5/webcomponents/dist/TableRow.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface TableSelectionSingleAttributes {
  /**
   * Defines the `row-key` value of the selected row.
   * @default undefined
   */
  selected?: string | undefined;
}

interface TableSelectionSingleDomRef extends Required<TableSelectionSingleAttributes>, Ui5DomRef {
  /**
   * Returns the table row instance for the given row key.
   * @param {string} rowKey - The row key
   * @returns {TableRow | undefined}
   */
  getRowByKey: (rowKey: string) => TableRow | undefined;

  /**
   * Returns the selected row.
   * @returns {TableRow | undefined}
   */
  getSelectedRow: () => TableRow | undefined;
}

interface TableSelectionSinglePropTypes
  extends TableSelectionSingleAttributes,
    Omit<CommonProps, keyof TableSelectionSingleAttributes | 'onChange'> {
  /**
   * Fired when the selection is changed by user interaction.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onChange?: (event: Ui5CustomEvent<TableSelectionSingleDomRef>) => void;
}

/**
 * The `TableSelectionSingle` component is used inside the `Table` to add single selection capabilities to the `Table`.
 * Since selection is key-based, each `TableRow` must define a unique `row-key` property.
 *
 * ### Usage
 *
 * The `TableSelectionSingle` component is a feature designed exclusively for use within the `Table` component.
 * It must be placed inside the `features` slot of `Table`.
 * This component is not intended for standalone use.
 *
 * ```html
 * <Table>
 * 	<TableSelectionSingle slot="features" selected="Row1"></TableSelectionSingle>
 * </Table>
 * ```
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of __@ui5/webcomponents__.
 */
const TableSelectionSingle = withWebComponent<TableSelectionSinglePropTypes, TableSelectionSingleDomRef>(
  'ui5-table-selection-single',
  ['selected'],
  [],
  [],
  ['change'],
);

TableSelectionSingle.displayName = 'TableSelectionSingle';

export { TableSelectionSingle };
export type { TableSelectionSingleDomRef, TableSelectionSinglePropTypes };
