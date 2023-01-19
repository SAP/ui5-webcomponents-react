import '@ui5/webcomponents/dist/TableColumn.js';
import { ReactNode } from 'react';
import { TableColumnPopinDisplay } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface TableColumnAttributes {
  /**
   * According to your `minWidth` settings, the component can be hidden in different screen sizes.
   *
   * Setting this property to `true`, shows this column as pop-in instead of hiding it.
   */
  demandPopin?: boolean;
  /**
   * Defines the minimum table width required to display this column. By default it is always displayed.
   *
   * The responsive behavior of the `Table` is determined by this property. As an example, by setting `minWidth` property to `400` sets the minimum width to 400 pixels, and shows this column on tablet (and desktop) but hides it on mobile.
   * For further responsive design options, see `demandPopin` property.
   */
  minWidth?: number;
  /**
   * Defines how the popin row is displayed.
   *
   * **The available values are:**
   *
   * *   `Block`
   * *   `Inline`
   */
  popinDisplay?: TableColumnPopinDisplay | keyof typeof TableColumnPopinDisplay;
  /**
   * The text for the column when it pops in.
   */
  popinText?: string;
}

export interface TableColumnDomRef extends TableColumnAttributes, Ui5DomRef {}

export interface TableColumnPropTypes extends TableColumnAttributes, CommonProps {
  /**
   * Defines the content of the column header.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableColumn` component allows to define column specific properties that are applied when rendering the `Table` component.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TableColumn = withWebComponent<TableColumnPropTypes, TableColumnDomRef>(
  'ui5-table-column',
  ['minWidth', 'popinDisplay', 'popinText'],
  ['demandPopin'],
  [],
  []
);

TableColumn.displayName = 'TableColumn';

TableColumn.defaultProps = {
  minWidth: Infinity,
  popinDisplay: TableColumnPopinDisplay.Block
};

export { TableColumn };
