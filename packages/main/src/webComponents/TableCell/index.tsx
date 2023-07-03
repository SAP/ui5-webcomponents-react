'use client';

import '@ui5/webcomponents/dist/TableCell.js';
import type { ReactNode } from 'react';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface TableCellAttributes {}

export interface TableCellDomRef extends TableCellAttributes, Ui5DomRef {}

export interface TableCellPropTypes extends TableCellAttributes, CommonProps {
  /**
   * Specifies the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableCell` component defines the structure of the data in a single `Table` cell.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Table" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const TableCell = withWebComponent<TableCellPropTypes, TableCellDomRef>(
  'ui5-table-cell',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/TableCell.js')
);

TableCell.displayName = 'TableCell';

export { TableCell };
