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
   * Defines the position of the row respect to the total number of rows within the table when the <code>ui5-table-virtualizer</code> feature is used.
   * @default -1
   */
  position?: number;

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
 * @experimental This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.
 */
const TableRow = withWebComponent<TableRowPropTypes, TableRowDomRef>(
  'ui5-table-row',
  ['position', 'rowKey'],
  ['interactive', 'navigated'],
  [],
  []
);

TableRow.displayName = 'TableRow';

export { TableRow };
export type { TableRowDomRef, TableRowPropTypes };
