'use client';

import '@ui5/webcomponents/dist/TableRow.js';
import type { ReactNode } from 'react';
import { TableRowType } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface TableRowAttributes {
  /**
   * Indicates if the table row is navigated.
   */
  navigated?: boolean;
  /**
   * Defines the row's selected state.
   */
  selected?: boolean;
  /**
   * Defines whether the row is selectable.
   */
  disabled?: boolean;
  /**
   * Defines the visual indication and behavior of the component.
   *
   * Available options are:
   *
   * *   `Active`
   * *   `Inactive`
   *
   *
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press, while with type `Inactive` - will not.
   */
  type?: TableRowType | keyof typeof TableRowType;
}

export interface TableRowDomRef extends TableRowAttributes, Ui5DomRef {}

export interface TableRowPropTypes extends TableRowAttributes, CommonProps {
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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Table)
 */
const TableRow = withWebComponent<TableRowPropTypes, TableRowDomRef>(
  'ui5-table-row',
  ['type'],
  ['navigated', 'selected'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/TableRow.js')
);

TableRow.displayName = 'TableRow';

TableRow.defaultProps = {
  type: TableRowType.Inactive
};

export { TableRow };
