import { ReactNode } from 'react';
import { TableRowType } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

import '@ui5/webcomponents/dist/TableRow.js';

interface TableRowAttributes {
  /**
   * Defines the row's selected state.
   */
  selected?: boolean;
  /**
   * Defines the visual indication and behavior of the component.
   *
   * Available options are:
   *
   * *   `Active`
   * *   `Inactive`
   *
   *
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press, while with type `Inactive` - will not.
   */
  type?: TableRowType | keyof typeof TableRowType;
}

export interface TableRowDomRef extends TableRowAttributes, Ui5DomRef {}

export interface TableRowPropTypes extends TableRowAttributes, CommonProps {
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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TableRow" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TableRow = withWebComponent<TableRowPropTypes, TableRowDomRef>('ui5-table-row', ['type'], ['selected'], [], []);

TableRow.displayName = 'TableRow';

TableRow.defaultProps = {
  type: TableRowType.Inactive
};

export { TableRow };
