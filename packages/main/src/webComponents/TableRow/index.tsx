import { TableRowType } from '@ui5/webcomponents-react/dist/TableRowType';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/TableRow.js';

export interface TableRowPropTypes extends CommonProps {
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
const TableRow = withWebComponent<TableRowPropTypes>('ui5-table-row', ['type'], ['selected'], [], []);

TableRow.displayName = 'TableRow';

TableRow.defaultProps = {
  selected: false,
  type: TableRowType.Inactive
};

export { TableRow };
