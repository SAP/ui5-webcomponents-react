'use client';

import '@ui5/webcomponents/dist/TableHeaderRow.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TableHeaderRowAttributes {
  /**
   * Sticks the `TableHeaderRow` to the top of a table.
   * @default false
   */
  sticky?: boolean;
}

interface TableHeaderRowDomRef extends Required<TableHeaderRowAttributes>, Ui5DomRef {}

interface TableHeaderRowPropTypes
  extends TableHeaderRowAttributes,
    Omit<CommonProps, keyof TableHeaderRowAttributes | 'children'> {
  /**
   * Defines the cells of the component.
   *
   * **Note:** Use `TableHeaderCell` for the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableHeaderRow` component represents the table headers of a `Table`.
 *
 * It is tightly coupled to the `Table` and should therefore be used in the `Table` only.
 * The header row is placed in the `headerRow` slot of the table.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0) of __@ui5/webcomponents__.
 */
const TableHeaderRow = withWebComponent<TableHeaderRowPropTypes, TableHeaderRowDomRef>(
  'ui5-table-header-row',
  [],
  ['sticky'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/TableHeaderRow.js')
);

TableHeaderRow.displayName = 'TableHeaderRow';

export { TableHeaderRow };
export type { TableHeaderRowDomRef, TableHeaderRowPropTypes };
