'use client';

import '@ui5/webcomponents/dist/TableColumn.js';
import type { ReactNode } from 'react';
import { TableColumnPopinDisplay } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface TableColumnAttributes {
  /**
   * According to your `minWidth` settings, the component can be hidden in different screen sizes.
   *
   * Setting this property to `true`, shows this column as pop-in instead of hiding it.
   */
  demandPopin?: boolean;
  /**
   * Defines the minimum table width required to display this column. By default it is always displayed.
   *
   * The responsive behavior of the `Table` is determined by this property. As an example, by setting `minWidth` property to `400` sets the minimum width to 400 pixels, and shows this column on tablet (and desktop) but hides it on mobile.
   * For further responsive design options, see `demandPopin` property.
   */
  minWidth?: number;
  /**
   * Defines how the popin row is displayed.
   *
   * **The available values are:**
   *
   * *   `Block`
   * *   `Inline`
   */
  popinDisplay?: TableColumnPopinDisplay | keyof typeof TableColumnPopinDisplay;
  /**
   * The text for the column when it pops in.
   */
  popinText?: string;
}

export interface TableColumnDomRef extends TableColumnAttributes, Ui5DomRef {}

export interface TableColumnPropTypes extends TableColumnAttributes, CommonProps {
  /**
   * Defines the content of the column header.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableColumn` component allows to define column specific properties that are applied when rendering the `Table` component.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Table)
 */
const TableColumn = withWebComponent<TableColumnPropTypes, TableColumnDomRef>(
  'ui5-table-column',
  ['minWidth', 'popinDisplay', 'popinText'],
  ['demandPopin'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/TableColumn.js')
);

TableColumn.displayName = 'TableColumn';

TableColumn.defaultProps = {
  minWidth: Infinity,
  popinDisplay: TableColumnPopinDisplay.Block
};

export { TableColumn };
