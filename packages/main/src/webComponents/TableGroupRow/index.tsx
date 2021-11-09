import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/TableGroupRow.js';

interface TableGroupRowAttributes {}

export interface TableGroupRowDomRef extends TableGroupRowAttributes, Ui5DomRef {}

export interface TableGroupRowPropTypes extends TableGroupRowAttributes, CommonProps {
  /**
   * Defines the text of the component.
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableGroupRow` component represents a group row in the `Table`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TableGroupRow" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TableGroupRow = withWebComponent<TableGroupRowPropTypes, TableGroupRowDomRef>(
  'ui5-table-group-row',
  [],
  [],
  [],
  []
);

TableGroupRow.displayName = 'TableGroupRow';

export { TableGroupRow };
