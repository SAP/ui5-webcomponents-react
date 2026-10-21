'use client';

import '@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js';
import type {
  ViewSettingsDialogCancelEventDetail,
  ViewSettingsDialogConfirmEventDetail,
  VSDSettings,
} from '@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface ViewSettingsDialogAttributes {
  /**
   * Defines the initial group order.
   *
   * **Note:** Available since [v2.13.0](https://github.com/UI5/webcomponents/releases/tag/v2.13.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  groupDescending?: boolean;

  /**
   * Indicates if the dialog is open.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  open?: boolean;

  /**
   * Controls whether the Reset button is always enabled.
   *
   * By default, the Reset button is enabled only when the built-in settings (Sort, Filter, Group)
   * differ from their initial state — the component can detect these changes automatically.
   * However, when the dialog contains custom tabs, the component has no way to detect
   * whether the custom tab content has been modified by the user.
   *
   * Set this property to `true` when the user has made changes inside a custom tab, so that
   * the Reset button becomes enabled and the user can trigger a reset.
   * Set it back to `false` once the custom tab content is back to its initial state
   * (e.g. after the user confirms or after a reset is applied).
   *
   * **Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  resetEnabled?: boolean;

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
}

interface ViewSettingsDialogPropTypes
  extends
    ViewSettingsDialogAttributes,
    Omit<
      CommonProps,
      | keyof ViewSettingsDialogAttributes
      | 'customTabs'
      | 'filterItems'
      | 'groupItems'
      | 'sortItems'
      | 'onBeforeOpen'
      | 'onCancel'
      | 'onClose'
      | 'onConfirm'
      | 'onOpen'
      | 'onReset'
    > {
  /**
   * Defines custom tabs for the dialog.
   *
   * The custom tabs are rendered after the built-in tabs (`Sort`, `Filter`, `Group`).
   *
   * **Note:** If you want to use this slot, you need to import the item: `import "@ui5/webcomponents-fiori/dist/ViewSettingsDialogCustomTab.js";`
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="customTabs"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents-fiori**.
   *
   * __Supported Node Type/s:__ `Array<ViewSettingsDialogCustomTab>`
   */
  customTabs?: UI5WCSlotsNode;

  /**
   * Defines the `filterItems` list.
   *
   * **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/FilterItem.js";`
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="filterItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<FilterItem>`
   */
  filterItems?: UI5WCSlotsNode;

  /**
   * Defines the list of items against which the user could group data.
   *
   * **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/GroupItem.js";`
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="groupItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<GroupItem>`
   */
  groupItems?: UI5WCSlotsNode;

  /**
   * Defines the list of items against which the user could sort data.
   *
   * **Note:** If you want to use this slot, you need to import used item: `import "@ui5/webcomponents-fiori/dist/SortItem.js";`
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="sortItems"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<SortItem>`
   */
  sortItems?: UI5WCSlotsNode;
  /**
   * Fired before the component is opened.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onBeforeOpen?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef>) => void;

  /**
   * Fired when cancel button is activated.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onCancel?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef, ViewSettingsDialogCancelEventDetail>) => void;

  /**
   * Fired after the dialog is closed.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClose?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef>) => void;

  /**
   * Fired when confirmation button is activated.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onConfirm?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef, ViewSettingsDialogConfirmEventDetail>) => void;

  /**
   * Fired after the dialog is opened.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onOpen?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef>) => void;

  /**
   * Fired when the Reset button is clicked.
   *
   * **Note:** This event is particularly relevant when the dialog contains custom tabs.
   * By default, the Reset button resets all built-in settings (sort, filter, group) to their
   * initial values. However, the component has no knowledge of the content or state inside
   * custom tabs — it cannot detect what has changed or what the "default" values are.
   * Therefore, when this event is fired, it is the application developer's responsibility
   * to listen for it and manually reset the custom tab content to its initial state.
   *
   * **Note:** Available since [v2.22.0](https://github.com/UI5/webcomponents/releases/tag/v2.22.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onReset?: (event: Ui5CustomEvent<ViewSettingsDialogDomRef>) => void;
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
 * __Note:__ This is a UI5 Web Component! [ViewSettingsDialog UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/ViewSettingsDialog) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.
 */
const ViewSettingsDialog = withWebComponent<ViewSettingsDialogPropTypes, ViewSettingsDialogDomRef>(
  'ui5-view-settings-dialog',
  [],
  ['groupDescending', 'open', 'resetEnabled', 'sortDescending'],
  ['customTabs', 'filterItems', 'groupItems', 'sortItems'],
  ['before-open', 'cancel', 'close', 'confirm', 'open', 'reset'],
);

ViewSettingsDialog.displayName = 'ViewSettingsDialog';

export { ViewSettingsDialog };
export type { ViewSettingsDialogDomRef, ViewSettingsDialogPropTypes };
