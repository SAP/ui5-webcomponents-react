'use client';

import '@ui5/webcomponents/dist/TableRow.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface TableRowAttributes {
  /**
   * Defines the interactive state of the row.
   * @default false
   */
  interactive?: boolean;

  /**
   * Defines whether the row is movable.
   *
   * **Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.
   * @default false
   */
  movable?: boolean;

  /**
   * Defines the navigated state of the row.
   * @default false
   */
  navigated?: boolean;

  /**
   * Defines the position of the row related to the total number of rows within the table when the `TableVirtualizer` feature is used.
   *
   * **Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  position?: number | undefined;

  /**
   * Unique identifier of the row.
   *
   * **Note:** For selection features to work properly, this property is mandatory, and its value must not contain spaces.
   * @default undefined
   */
  rowKey?: string | undefined;
}

interface TableRowDomRef extends Required<TableRowAttributes>, Ui5DomRef {}

interface TableRowPropTypes
  extends TableRowAttributes,
    Omit<CommonProps, keyof TableRowAttributes | 'actions' | 'children'> {
  /**
   * Defines the actions of the component.
   *
   * **Note:** Use `TableRowAction` or `TableRowActionNavigation` for the intended design.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="actions"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.
   */
  actions?: UI5WCSlotsNode;

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
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 * @experimental This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.
 */
const TableRow = withWebComponent<TableRowPropTypes, TableRowDomRef>(
  'ui5-table-row',
  ['position', 'rowKey'],
  ['interactive', 'movable', 'navigated'],
  ['actions'],
  []
);

TableRow.displayName = 'TableRow';

export { TableRow };
export type { TableRowDomRef, TableRowPropTypes };
