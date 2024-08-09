'use client';

import '@ui5/webcomponents/dist/TableRow.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TableRowAttributes {
  /**
   * Defines the interactive state of the row.
   * @default false
   */
  interactive?: boolean;

  /**
   * Defines the navigated state of the row.
   * @default false
   */
  navigated?: boolean;

  /**
   * Unique identifier of the row.
   */
  rowKey?: string;
}

interface TableRowDomRef extends Required<TableRowAttributes>, Ui5DomRef {}

interface TableRowPropTypes extends TableRowAttributes, Omit<CommonProps, keyof TableRowAttributes | 'children'> {
  /**
   * Defines the cells of the component.
   *
   * **Note:** Use `TableCell` for the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableRow` component represents a row in the `Table`.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const TableRow = withWebComponent<TableRowPropTypes, TableRowDomRef>(
  'ui5-table-row',
  ['rowKey'],
  ['interactive', 'navigated'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/TableRow.js')
);

TableRow.displayName = 'TableRow';

export { TableRow };
export type { TableRowDomRef, TableRowPropTypes };
