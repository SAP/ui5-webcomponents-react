'use client';

import '@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface ViewSettingsDialogAttributes {
  /**
   * Defines the initial sort order.
   */
  sortDescending?: boolean;
}

export interface ViewSettingsDialogDomRef extends ViewSettingsDialogAttributes, Ui5DomRef {
  /**
   * Sets a JavaScript object, as settings to the `ViewSettingsDialog`. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The `ViewSettingsDialog` throws an event called "before-open", this can be used as trigger point. The object should have the following format: `{sortOrder: "Ascending", sortBy: "Name", filters: [{Filter 1: ["Some filter 1", "Some filter 2"]}, {Filter 2: ["Some filter 4"]}]}`
   * @param {Object} settings - predefined settings.
   * @param {string} settings.sortOrder - sort order
   * @param {string} settings.sortBy - sort by
   * @param {Array.<Object>} settings.filters - filters
   */
  setConfirmedSettings: (settings: Record<string, unknown>) => void;
  /**
   * Shows the dialog.
   */
  show: () => void;
}

export interface ViewSettingsDialogPropTypes extends ViewSettingsDialogAttributes, CommonProps {
  /**
   * Defines the `filterItems` list. **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/FilterItem";`
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="filterItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  filterItems?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the list of items against which the user could sort data. **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/SortItem";`
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="sortItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  sortItems?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Fired before the component is opened. **This event does not bubble.**
   */
  onBeforeOpen?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef>) => void;
  /**
   * Fired when cancel button is activated.
   */
  onCancel?: (
    event: Ui5CustomEvent<
      ViewSettingsDialogDomRef,
      { sortOrder: string; sortBy: string; sortByItem: HTMLElement; sortDescending: boolean; filters: unknown[] }
    >
  ) => void;
  /**
   * Fired when confirmation button is activated.
   */
  onConfirm?: (
    event: Ui5CustomEvent<
      ViewSettingsDialogDomRef,
      { sortOrder: string; sortBy: string; sortByItem: HTMLElement; sortDescending: boolean; filters: unknown[] }
    >
  ) => void;
}

/**
 * The `ViewSettingsDialog` component helps the user to sort data within a list or a table. It consists of several lists like `Sort order` which is built-in and `Sort By` and `Filter By` lists, for which you must be provide items(`SortItem` & `FilterItem` respectively) These options can be used to create sorters for a table. The `ViewSettingsDialog` interrupts the current application processing as it is the only focused UI element and the main screen is dimmed/blocked. The `ViewSettingsDialog` is modal, which means that user action is required before returning to the parent window is possible.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ViewSettingsDialog" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ViewSettingsDialog = withWebComponent<ViewSettingsDialogPropTypes, ViewSettingsDialogDomRef>(
  'ui5-view-settings-dialog',
  [],
  ['sortDescending'],
  ['filterItems', 'sortItems'],
  ['before-open', 'cancel', 'confirm'],
  () => import('@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js')
);

ViewSettingsDialog.displayName = 'ViewSettingsDialog';

export { ViewSettingsDialog };
