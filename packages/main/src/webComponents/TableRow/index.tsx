'use client';

import '@ui5/webcomponents-compat/dist/TableRow.js';
import type TableRowType from '@ui5/webcomponents-compat/dist/types/TableRowType.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TableRowAttributes {
  /**
   * Indicates if the table row is navigated.
   *
   * **Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.
   * @default false
   */
  navigated?: boolean;

  /**
   * Defines the row's selected state.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the visual indication and behavior of the component.
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press,
   * while with type `Inactive`-will not.
   * @default "Inactive"
   */
  type?: TableRowType | keyof typeof TableRowType;
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
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const TableRow = withWebComponent<TableRowPropTypes, TableRowDomRef>(
  'ui5-table-row',
  ['type'],
  ['navigated', 'selected'],
  [],
  [],
  () => import('@ui5/webcomponents-compat/dist/TableRow.js')
);

TableRow.displayName = 'TableRow';

export { TableRow };
export type { TableRowDomRef, TableRowPropTypes };
