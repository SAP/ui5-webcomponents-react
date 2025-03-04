'use client';

import '@ui5/webcomponents/dist/TableHeaderCell.js';
import type TableCellHorizontalAlign from '@ui5/webcomponents/dist/types/TableCellHorizontalAlign.js';
import type SortOrder from '@ui5/webcomponents-base/dist/types/SortOrder.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface TableHeaderCellAttributes {
  /**
   * Determines the horizontal alignment of table cells.
   * @default undefined
   */
  horizontalAlign?: TableCellHorizontalAlign | undefined | keyof typeof TableCellHorizontalAlign;

  /**
   * Defines the importance of the column.
   *
   * This property affects the popin behaviour.
   * Columns with higher importance will move into the popin area later then less important
   * columns.
   * @default 0
   */
  importance?: number;

  /**
   * Defines the maximum width of the column.
   * @default "auto"
   */
  maxWidth?: string;

  /**
   * Defines the minimum width of the column.
   *
   * If the table is in `Popin` mode and the minimum width does not fit anymore,
   * the column will move into the popin.
   *
   * **Note:** If `minWidth` has the `auto` value, the table ensures that the column is wider than at least `3rem`.
   * @default "auto"
   */
  minWidth?: string;

  /**
   * Defines if the column is hidden in the popin.
   *
   * **Note:** Please be aware that hiding the column in the popin might lead to accessibility issues as
   * users might not be able to access the content of the column on small screens.
   *
   * **Note:** Available since [v2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.
   * @default false
   */
  popinHidden?: boolean;

  /**
   * The text for the column when it pops in.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  popinText?: string | undefined;

  /**
   * Defines the sort indicator of the column.
   *
   * **Note:** Available since [v2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.
   * @default "None"
   */
  sortIndicator?: SortOrder | keyof typeof SortOrder;

  /**
   * Defines the width of column.
   * @default "auto"
   */
  width?: string;
}

interface TableHeaderCellDomRef extends Required<TableHeaderCellAttributes>, Ui5DomRef {}

interface TableHeaderCellPropTypes
  extends TableHeaderCellAttributes,
    Omit<CommonProps, keyof TableHeaderCellAttributes | 'action' | 'children'> {
  /**
   * Defines the action of the column.
   *
   * **Note:** While multiple actions are technically possible, this is not supported.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="action"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.
   */
  action?: UI5WCSlotsNode;

  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableHeaderCell` component represents a column in the `Table`.
 *
 * As it is tightly coupled to the `Table`, it should only be used in the `TableHeaderRow`
 * to ensure correct layout and design.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 * @experimental This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.
 */
const TableHeaderCell = withWebComponent<TableHeaderCellPropTypes, TableHeaderCellDomRef>(
  'ui5-table-header-cell',
  ['horizontalAlign', 'importance', 'maxWidth', 'minWidth', 'popinText', 'sortIndicator', 'width'],
  ['popinHidden'],
  ['action'],
  []
);

TableHeaderCell.displayName = 'TableHeaderCell';

export { TableHeaderCell };
export type { TableHeaderCellDomRef, TableHeaderCellPropTypes };
