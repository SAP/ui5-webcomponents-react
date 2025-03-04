'use client';

import '@ui5/webcomponents-fiori/dist/UserSettingsItem.js';
import type { UserSettingsItemViewSelectEventDetail } from '@ui5/webcomponents-fiori/dist/UserSettingsItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UserSettingsItemAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is completely noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the headerText of the item.
   */
  headerText?: string | undefined;

  /**
   * Defines the icon of the component.
   * @default "globe"
   */
  icon?: string;

  /**
   * Indicates whether a loading indicator should be shown.
   * @default false
   */
  loading?: boolean;

  /**
   * Indicates why the control is in loading state.
   * @default undefined
   */
  loadingReason?: string | undefined;

  /**
   * Shows item tab.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the user settings item.
   */
  text?: string;

  /**
   * Defines the tooltip of the component.
   *
   * A tooltip attribute should be provided to represent the meaning or function when the component is collapsed and only the icon is visible.
   */
  tooltip?: string;
}

interface UserSettingsItemDomRef extends Required<UserSettingsItemAttributes>, Ui5DomRef {}

interface UserSettingsItemPropTypes
  extends UserSettingsItemAttributes,
    Omit<CommonProps, keyof UserSettingsItemAttributes | 'children' | 'pages' | 'onSelectionChange'> {
  /**
   * Defines the tab views of the user settings item.
   *
   * The tab views are displayed by default if there is no selected page view.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the page views of the user settings item.
   *
   * If there are no tab views, the first page view will be shown unless there is selected one. If there is selected page
   * view it will be shown no matter if there are tab views.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="pages"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  pages?: UI5WCSlotsNode;
  /**
   * Fired when a selected view changed.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onSelectionChange?: (event: Ui5CustomEvent<UserSettingsItemDomRef, UserSettingsItemViewSelectEventDetail>) => void;
}

/**
 * The `UserSettingsItem` represents an item in the `UserSettingsDialog`.
 *
 *
 *
 * You can disable the <code>UserSettingsItem</code> by setting the <code>enabled</code> property to <code>false</code>,
 * or use the <code>UserSettingsItem</code> in read-only mode by setting the <code>editable</code> property to false.
 *
 * <b>Note:</b> Disabled and read-only states shouldn't be used together.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const UserSettingsItem = withWebComponent<UserSettingsItemPropTypes, UserSettingsItemDomRef>(
  'ui5-user-settings-item',
  ['accessibleName', 'headerText', 'icon', 'loadingReason', 'text', 'tooltip'],
  ['disabled', 'loading', 'selected'],
  ['pages'],
  ['selection-change']
);

UserSettingsItem.displayName = 'UserSettingsItem';

export { UserSettingsItem };
export type { UserSettingsItemDomRef, UserSettingsItemPropTypes };
