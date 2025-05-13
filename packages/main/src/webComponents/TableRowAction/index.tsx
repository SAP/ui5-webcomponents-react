'use client';

import '@ui5/webcomponents/dist/TableRowAction.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface TableRowActionAttributes {
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

interface TableRowActionPropTypes
  extends TableRowActionAttributes,
    Omit<CommonProps, keyof TableRowActionAttributes | 'onClick'> {
  /**
   * Fired when a row action is clicked.
   *
   * **Note:** Available since [v2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<TableRowActionDomRef>) => void;
}

/**
 * The `TableRowAction` component defines an action for table rows.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of __@ui5/webcomponents__.
 * @experimental
 */
const TableRowAction = withWebComponent<TableRowActionPropTypes, TableRowActionDomRef>(
  'ui5-table-row-action',
  ['icon', 'text'],
  ['invisible'],
  [],
  ['click'],
);

TableRowAction.displayName = 'TableRowAction';

export { TableRowAction };
export type { TableRowActionDomRef, TableRowActionPropTypes };
