'use client';

import '@ui5/webcomponents/dist/TableHeaderCellActionAI.js';
import type { TableHeaderCellActionClickEventDetail } from '@ui5/webcomponents/dist/TableHeaderCellActionBase.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface TableHeaderCellActionAIAttributes {}

interface TableHeaderCellActionAIDomRef extends Required<TableHeaderCellActionAIAttributes>, Ui5DomRef {}

interface TableHeaderCellActionAIPropTypes extends TableHeaderCellActionAIAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Fired when a header cell action is clicked.
   *
   * **Note:** Available since [v2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<TableHeaderCellActionAIDomRef, TableHeaderCellActionClickEventDetail>) => void;
}

/**
 * The `TableHeaderCellActionAI` component defines a dedicated AI action for the table column.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of __@ui5/webcomponents__.
 */
const TableHeaderCellActionAI = withWebComponent<TableHeaderCellActionAIPropTypes, TableHeaderCellActionAIDomRef>(
  'ui5-table-header-cell-action-ai',
  [],
  [],
  [],
  ['click'],
);

TableHeaderCellActionAI.displayName = 'TableHeaderCellActionAI';

export { TableHeaderCellActionAI };
export type { TableHeaderCellActionAIDomRef, TableHeaderCellActionAIPropTypes };
