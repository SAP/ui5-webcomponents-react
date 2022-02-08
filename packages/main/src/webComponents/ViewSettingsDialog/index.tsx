import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

import '@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js';

interface ViewSettingsDialogAttributes {
  /**
   * Defines the initial sort order.
   */
  sortDescending?: boolean;
}

export interface ViewSettingsDialogDomRef extends ViewSettingsDialogAttributes, Ui5DomRef {
  /**
   * Shows the dialog.
   *
   */
  show: () => void;
}

export interface ViewSettingsDialogPropTypes extends ViewSettingsDialogAttributes, CommonProps {
  /**
   * Defines the `filterItems` list. **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/FilterItem";`
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  filterItems?: ReactNode | ReactNode[];
  /**
   * Defines the list of items against which the user could sort data. **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/SortItem";`
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  sortItems?: ReactNode | ReactNode[];
  /**
   * Fired when cancel button is activated.
   */
  onCancel?: (event: Ui5CustomEvent<HTMLElement, { sortOrder: string; sortBy: string }>) => void;
  /**
   * Fired when confirmation button is activated.
   */
  onConfirm?: (event: Ui5CustomEvent<HTMLElement, { sortOrder: string; sortBy: string }>) => void;
}

/**
 * The `ViewSettingsDialog` component helps the user to sort data within a list or a table. It consists of several lists like `Sort order` which is built-in and `Sort By` and `Filter By` lists, for which you must be provide items(`SortItem` & `FilterItem` respectively) These options can be used to create sorters for a table. The `ViewSettingsDialog` interrupts the current application processing as it is the only focused UI element and the main screen is dimmed/blocked. The `ViewSettingsDialog` is modal, which means that user action is required before returning to the parent window is possible.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ViewSettingsDialog = withWebComponent<ViewSettingsDialogPropTypes, ViewSettingsDialogDomRef>(
  'ui5-view-settings-dialog',
  [],
  ['sortDescending'],
  ['filterItems', 'sortItems'],
  ['cancel', 'confirm']
);

ViewSettingsDialog.displayName = 'ViewSettingsDialog';

export { ViewSettingsDialog };
