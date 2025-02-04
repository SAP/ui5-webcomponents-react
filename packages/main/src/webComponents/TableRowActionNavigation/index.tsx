'use client';

import '@ui5/webcomponents/dist/TableRowActionNavigation.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

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
    Omit<CommonProps, keyof TableRowActionNavigationAttributes> {}

/**
 * The `TableRowActionNavigation` class defines a navigation actio‚n for table rows.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents__.
 */
const TableRowActionNavigation = withWebComponent<TableRowActionNavigationPropTypes, TableRowActionNavigationDomRef>(
  'ui5-table-row-action-navigation',
  [],
  ['interactive', 'invisible'],
  [],
  []
);

TableRowActionNavigation.displayName = 'TableRowActionNavigation';

export { TableRowActionNavigation };
export type { TableRowActionNavigationDomRef, TableRowActionNavigationPropTypes };
