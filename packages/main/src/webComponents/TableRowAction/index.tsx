'use client';

import '@ui5/webcomponents/dist/TableRowAction.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface TableRowActionAttributes {
  /**
   * Defines the disabled state of the row action.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon of the row action.
   *
   * **Note:** For row actions to work properly, this property is mandatory.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the
   * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Defines the visibility of the row action.
   *
   * **Note:** Invisible row actions still take up space, allowing to hide the action while maintaining its position.
   * @default false
   */
  invisible?: boolean;

  /**
   * Defines the text of the row action.
   *
   * **Note:** For row actions to work properly, this property is mandatory.
   */
  text?: string;
}

interface TableRowActionDomRef extends Required<TableRowActionAttributes>, Ui5DomRef {}

interface TableRowActionPropTypes extends TableRowActionAttributes, Omit<CommonProps, keyof TableRowActionAttributes> {}

/**
 * The `TableRowAction` class defines a row action for table rows.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents__.
 */
const TableRowAction = withWebComponent<TableRowActionPropTypes, TableRowActionDomRef>(
  'ui5-table-row-action',
  ['icon', 'text'],
  ['disabled', 'invisible'],
  [],
  []
);

TableRowAction.displayName = 'TableRowAction';

export { TableRowAction };
export type { TableRowActionDomRef, TableRowActionPropTypes };
