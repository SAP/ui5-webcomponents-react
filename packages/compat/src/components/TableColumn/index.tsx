'use client';

import '@ui5/webcomponents-compat/dist/TableColumn.js';
import type TableColumnPopinDisplay from '@ui5/webcomponents-compat/dist/types/TableColumnPopinDisplay.js';
import { withWebComponent } from '@ui5/webcomponents-react';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react';
import type { ReactNode } from 'react';

interface TableColumnAttributes {
  /**
   * According to your `minWidth` settings, the component can be hidden
   * in different screen sizes.
   *
   * Setting this property to `true`, shows this column as pop-in instead of hiding it.
   * @default false
   */
  demandPopin?: boolean;

  /**
   * Defines the minimum table width required to display this column. By default it is always displayed.
   *
   * The responsive behavior of the `Table` is determined by this property. As an example, by setting
   * `minWidth` property to `400` sets the minimum width to 400 pixels, and	shows this column on tablet (and desktop) but hides it on mobile.
   *
   * For further responsive design options, see `demandPopin` property.
   * @default Infinity
   */
  minWidth?: number;

  /**
   * Defines how the popin row is displayed.
   *
   * **The available values are:**
   *
   * - `Block`
   * - `Inline`
   * @default "Block"
   */
  popinDisplay?: TableColumnPopinDisplay | keyof typeof TableColumnPopinDisplay;

  /**
   * The text for the column when it pops in.
   */
  popinText?: string;
}

interface TableColumnDomRef extends Required<TableColumnAttributes>, Ui5DomRef {}

interface TableColumnPropTypes
  extends TableColumnAttributes,
    Omit<CommonProps, keyof TableColumnAttributes | 'children'> {
  /**
   * Defines the content of the column header
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableColumn` component allows to define column specific properties that are applied
 * when rendering the `Table` component.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const TableColumn = withWebComponent<TableColumnPropTypes, TableColumnDomRef>(
  'ui5-table-column',
  ['minWidth', 'popinDisplay', 'popinText'],
  ['demandPopin'],
  [],
  [],
  () => import('@ui5/webcomponents-compat/dist/TableColumn.js')
);

TableColumn.displayName = 'TableColumn';

export { TableColumn };
export type { TableColumnDomRef, TableColumnPropTypes };
