'use client';

import '@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js';
import type {
  ViewSettingsDialogCancelEventDetail,
  ViewSettingsDialogConfirmEventDetail,
  VSDSettings
} from '@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface ViewSettingsDialogAttributes {
  /**
   * Defines the initial sort order.
   * @default false
   */
  sortDescending?: boolean;
}

interface ViewSettingsDialogDomRef extends Required<ViewSettingsDialogAttributes>, Ui5DomRef {
  /**
   * Sets a JavaScript object, as settings to the `ViewSettingsDialog`.
   * This method can be used after the dialog is initially open, as the dialog needs
   * to set its initial settings.
   * The `ViewSettingsDialog` throws an event called "before-open",
   * which can be used as a trigger point.
   * The object should have the following format:
   * @param {VSDSettings} settings - predefined settings.
   * @returns {void}
   */
  setConfirmedSettings: (settings: VSDSettings) => void;

  /**
   * Shows the dialog.
   * @returns {void}
   */
  show: () => void;
}

interface ViewSettingsDialogPropTypes
  extends ViewSettingsDialogAttributes,
    Omit<
      CommonProps,
      keyof ViewSettingsDialogAttributes | 'filterItems' | 'sortItems' | 'onBeforeOpen' | 'onCancel' | 'onConfirm'
    > {
  /**
   * Defines the `filterItems` list.
   *
   * **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/FilterItem.js";`
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="filterItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  filterItems?: UI5WCSlotsNode;

  /**
   * Defines the list of items against which the user could sort data.
   *
   * **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/SortItem.js";`
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="sortItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  sortItems?: UI5WCSlotsNode;
  /**
   * Fired before the component is opened. **This event does not bubble.**
   */
  onBeforeOpen?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef>) => void;

  /**
   * Fired when cancel button is activated.
   */
  onCancel?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef, ViewSettingsDialogCancelEventDetail>) => void;

  /**
   * Fired when confirmation button is activated.
   */
  onConfirm?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef, ViewSettingsDialogConfirmEventDetail>) => void;
}

/**
 * The `ViewSettingsDialog` component helps the user to sort data within a list or a table.
 * It consists of several lists like `Sort order` which is built-in and `Sort By` and `Filter By` lists,
 * for which you must be provide items(`SortItem` & `FilterItem` respectively)
 * These options can be used to create sorters for a table.
 *
 * The `ViewSettingsDialog` interrupts the current application processing as it is the only focused UI element and
 * the main screen is dimmed/blocked.
 * The `ViewSettingsDialog` is modal, which means that user action is required before returning to the parent window is possible.
 *
 * ### Structure
 * A `ViewSettingsDialog` consists of a header, content, and a footer for action buttons.
 * The `ViewSettingsDialog` is usually displayed at the center of the screen.
 *
 * ### Responsive Behavior
 * `ViewSettingsDialog` stretches on full screen on phones.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
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
export type { ViewSettingsDialogDomRef, ViewSettingsDialogPropTypes };
