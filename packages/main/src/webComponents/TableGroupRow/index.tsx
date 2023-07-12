'use client';

import '@ui5/webcomponents/dist/TableGroupRow.js';
import type { ReactNode } from 'react';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Table" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const TableGroupRow = withWebComponent<TableGroupRowPropTypes, TableGroupRowDomRef>(
  'ui5-table-group-row',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/TableGroupRow.js')
);

TableGroupRow.displayName = 'TableGroupRow';

export { TableGroupRow };
