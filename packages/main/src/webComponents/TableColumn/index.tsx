import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TableColumn';
import { FC, ReactNode } from 'react';

export interface TableColumnPropTypes extends WithWebComponentPropTypes {
  /**
   * According to your `minWidth` settings, the `TableColumn` can be hidden in different screen sizes.
   *
   * Setting this property to `true`, shows this column as pop-in instead of hiding it.
   */
  demandPopin?: boolean;
  /**
   * Defines the minimum table width required to display this column. By default it is always displayed.
   *
   * The responsive behavior of the `Table` is determined by this property. As an example, by setting `minWidth` property to `40em` shows this column on tablet (and desktop) but hides it on mobile.
   * For further responsive design options, see `demandPopin` property.
   */
  minWidth?: number;
  /**
   * The text for the column when it pops in.
   */
  popinText?: string;
  /**
   * Defines the content of the column header.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableColumn` component allows to define column specific properties that are applied when rendering the `Table` component
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TableColumn" target="_blank">UI5 Web Components Playground</a>
 */
const TableColumn: FC<TableColumnPropTypes> = withWebComponent<TableColumnPropTypes>(
  'ui5-table-column',
  ['minWidth', 'popinText'],
  ['demandPopin'],
  [],
  []
);

TableColumn.displayName = 'TableColumn';

TableColumn.defaultProps = {
  demandPopin: false,
  minWidth: Infinity
};

export { TableColumn };
