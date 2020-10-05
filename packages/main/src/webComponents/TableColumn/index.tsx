import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TableColumn';
import { FC } from 'react';
import { ReactNode } from 'react';

export interface TableColumnPropTypes extends WithWebComponentPropTypes {
  /**
   * According to your <code>minWidth</code> settings, the <code>TableColumn</code> can be hidden in different screen sizes. <br><br> Setting this property to <code>true</code>, shows this column as pop-in instead of hiding it.
   */
  demandPopin?: boolean;
  /**
   * Defines the minimum table width required to display this column. By default it is always displayed. <br><br> The responsive behavior of the <code>Table</code> is determined by this property. As an example, by setting <code>minWidth</code> property to <code>40em</code> shows this column on tablet (and desktop) but hides it on mobile. <br> For further responsive design options, see <code>demandPopin</code> property.
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
     * The <code>TableColumn</code> component allows to define column specific properties that are applied when rendering the
<code>Table</code> component
     
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
