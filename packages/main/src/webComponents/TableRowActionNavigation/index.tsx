'use client';

import '@ui5/webcomponents/dist/TableRowActionNavigation.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface TableRowActionNavigationAttributes {
  /**
   * Defines the interactive state of the navigation action.
   * @default false
   */
  interactive?: boolean;

  /**
   * Defines the visibility of the row action.
   *
   * **Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.
   * @default false
   */
  invisible?: boolean;
}

interface TableRowActionNavigationDomRef extends Required<TableRowActionNavigationAttributes>, Ui5DomRef {}

interface TableRowActionNavigationPropTypes
  extends TableRowActionNavigationAttributes,
    Omit<CommonProps, keyof TableRowActionNavigationAttributes | 'onClick'> {
  /**
   * Fired when a row action is clicked.
   *
   * **Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<TableRowActionNavigationDomRef>) => void;
}

/**
 * The `TableRowActionNavigation` component defines a navigation action for table rows.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents__.
 * @experimental
 */
const TableRowActionNavigation = withWebComponent<TableRowActionNavigationPropTypes, TableRowActionNavigationDomRef>(
  'ui5-table-row-action-navigation',
  [],
  ['interactive', 'invisible'],
  [],
  ['click'],
);

TableRowActionNavigation.displayName = 'TableRowActionNavigation';

export { TableRowActionNavigation };
export type { TableRowActionNavigationDomRef, TableRowActionNavigationPropTypes };
