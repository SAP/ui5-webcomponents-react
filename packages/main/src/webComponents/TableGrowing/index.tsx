'use client';

import '@ui5/webcomponents/dist/TableGrowing.js';
import type TableGrowingMode from '@ui5/webcomponents/dist/types/TableGrowingMode.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface TableGrowingAttributes {
  /**
   * Defines the text that will be displayed below the `growingText` inside the growing button.
   * Has no effect when type is set to Scroll.
   * @default undefined
   */
  growingSubText?: string | undefined;

  /**
   * Defines the text that will be displayed inside the growing button.
   * Has no effect when type is set to `Scroll`.
   *
   * **Note:** When not provided and the type is set to Button, a default text is displayed, corresponding to the
   * current language.
   * @default undefined
   */
  growingText?: string | undefined;

  /**
   * Defines the mode of the <code>ui5-table</code> growing.
   *
   * Available options are:
   *
   * Button - Shows a More button at the bottom of the table, pressing it will load more rows.
   *
   * Scroll - The rows are loaded automatically by scrolling to the bottom of the table. If the table is not scrollable, this option is the same as the Button.
   * @default "Button"
   */
  type?: TableGrowingMode | keyof typeof TableGrowingMode;
}

interface TableGrowingDomRef extends Required<TableGrowingAttributes>, Ui5DomRef {}

interface TableGrowingPropTypes
  extends TableGrowingAttributes,
    Omit<CommonProps, keyof TableGrowingAttributes | 'onLoadMore'> {
  /**
   * Fired when the growing button is pressed or the user scrolls to the end of the table.
   */
  onLoadMore?: (event: Ui5CustomEvent<TableGrowingDomRef>) => void;
}

/**
 * The `TableGrowing` component is used inside the `Table` to add a growing/data loading functionalities
 * to the table.
 *
 * The component offers two options:
 * * Button - a More button is displayed, clicking it will load more data.
 * * Scroll - additional data is loaded automatically when the user scrolls to the end of the table.
 *
 * ### Usage
 *
 * The `TableGrowing` component is only used inside the `Table` component as a feature.
 * It has to be slotted inside the `Table` in the `features` slot.
 * The component is not intended to be used as a standalone component.
 *
 * ```html
 * <Table>
 * 	<TableGrowing type="Button" growing-text="More" slot="features"></TableGrowing>
 * </Table>
 * ```
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const TableGrowing = withWebComponent<TableGrowingPropTypes, TableGrowingDomRef>(
  'ui5-table-growing',
  ['growingSubText', 'growingText', 'type'],
  [],
  [],
  ['load-more'],
  () => import('@ui5/webcomponents/dist/TableGrowing.js')
);

TableGrowing.displayName = 'TableGrowing';

export { TableGrowing };
export type { TableGrowingDomRef, TableGrowingPropTypes };
