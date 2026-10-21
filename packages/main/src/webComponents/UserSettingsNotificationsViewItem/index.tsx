'use client';

import '@ui5/webcomponents-fiori/dist/UserSettingsNotificationsViewItem.js';
import type { ListItemAccessibilityAttributes } from '@ui5/webcomponents/dist/ListItem.js';
import type { ListItemBaseClickEventDetail } from '@ui5/webcomponents/dist/ListItemBase.js';
import type Highlight from '@ui5/webcomponents/dist/types/Highlight.js';
import type ListItemAccessibleRole from '@ui5/webcomponents/dist/types/ListItemAccessibleRole.js';
import type ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import type { UserSettingsNotificationsViewItemSwitchChangeEventDetail } from '@ui5/webcomponents-fiori/dist/UserSettingsNotificationsViewItem.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface UserSettingsNotificationsViewItemAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following fields are supported:
   *
   * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
   * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
   *
   * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
   * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
   *
   * **Note:** Available since [v1.15.0](https://github.com/UI5/webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents-fiori**.
   * @default {}
   */
  accessibilityAttributes?: ListItemAccessibilityAttributes;

  /**
   * Defines the text alternative of the component.
   *
   * **Note**: If not provided a default text alternative will be set, if present.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Used to define the role of the list item.
   *
   * **Note:** If not set, the role is automatically inherited from the parent `ui5-list` based on its `accessible-role` property
   * (e.g. `Menu` -> `MenuItem`, `Tree` -> `TreeItem`, `ListBox` -> `Option`).
   * An explicitly set `accessible-role` on the list item takes precedence over the inherited role.
   *
   * **Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  accessibleRole?: ListItemAccessibleRole | undefined | keyof typeof ListItemAccessibleRole;

  /**
   * Defines the byline text of the item, rendered below the title.
   */
  bylineText?: string;

  /**
   * Defines whether the trailing switch is on.
   *
   * Ignored when the `endContent` slot is used.
   * @default false
   */
  checked?: boolean;

  /**
   * Defines the highlight state of the list items.
   * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
   *
   * **Note:** Available since [v1.24.0](https://github.com/UI5/webcomponents/releases/tag/v1.24.0) of **@ui5/webcomponents-fiori**.
   * @default "None"
   */
  highlight?: Highlight | keyof typeof Highlight;

  /**
   * Defines the unique identifier of the item.
   *
   * When the item is navigable, `itemKey` is also used to route to a matching sibling
   * `secondary` view by id.
   */
  itemKey?: string;

  /**
   * Defines whether the item is movable.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  movable?: boolean;

  /**
   * Defines whether the item is navigable. When true, a navigation arrow is rendered
   * and the whole row becomes clickable (fires the parent view's `item-click` event).
   * @default false
   */
  navigable?: boolean;

  /**
   * The navigated state of the list item.
   * If set to `true`, a navigation indicator is displayed at the end of the list item.
   *
   * **Note:** Available since [v1.10.0](https://github.com/UI5/webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  navigated?: boolean;

  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the title text of the item.
   */
  text?: string;

  /**
   * Defines the text of the tooltip that would be displayed for the list item.
   *
   * **Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the visual indication and behavior of the list items.
   * Available options are `Active` (by default), `Inactive`, `InactiveSelectable`, `Detail` and `Navigation`.
   *
   * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
   * while with type `Inactive`, `InactiveSelectable` and `Detail` - will not.
   *
   * **Note:** `InactiveSelectable` behaves like `Inactive` (no active press/hover feedback and the
   * `item-click` event is not fired), but the item can still be selected. Clicking the item body,
   * pressing Space/Enter, or interacting with the selection component (checkbox in Multi mode, radio
   * button in Single modes) toggles the selection when the list has a selection mode.
   * @default "Active"
   */
  type?: ListItemType | keyof typeof ListItemType;
}

interface UserSettingsNotificationsViewItemDomRef
  extends Required<UserSettingsNotificationsViewItemAttributes>, Ui5DomRef {}

interface UserSettingsNotificationsViewItemPropTypes
  extends
    UserSettingsNotificationsViewItemAttributes,
    Omit<
      CommonProps,
      | keyof UserSettingsNotificationsViewItemAttributes
      | 'children'
      | 'deleteButton'
      | 'endContent'
      | 'onClick'
      | 'onDetailClick'
      | 'onSwitchChange'
    > {
  /**
   * Defines the content of the component.
   *
   * __Supported Node Type/s:__ `Array<Node>`
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the delete button, displayed in "Delete" mode.
   * **Note:** While the slot allows custom buttons, to match
   * design guidelines, please use the `ui5-button` component.
   * **Note:** When the slot is not present, a built-in delete button will be displayed.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents-fiori**.
   *
   * __Supported Node Type/s:__ `Array<IButton>`
   */
  deleteButton?: UI5WCSlotsNode;

  /**
   * Defines custom content rendered at the trailing end of the item, replacing the
   * default switch. Use this to place a `ui5-select`, `ui5-input`, or any other
   * control instead of a boolean toggle.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="endContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  endContent?: UI5WCSlotsNode;
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   *
   * **Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<UserSettingsNotificationsViewItemDomRef, ListItemBaseClickEventDetail>) => void;

  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onDetailClick?: (event: Ui5CustomEvent<UserSettingsNotificationsViewItemDomRef>) => void;

  /**
   * Fired when the switch state changes.
   *
   * Not fired when the `endContent` slot is used to override the trailing control.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onSwitchChange?: (
    event: Ui5CustomEvent<
      UserSettingsNotificationsViewItemDomRef,
      UserSettingsNotificationsViewItemSwitchChangeEventDetail
    >,
  ) => void;
}

/**
 * The `UserSettingsNotificationsViewItem` represents a single notification setting
 * within the `UserSettingsNotificationsView`.
 *
 * It displays a title and an optional byline. By default a trailing switch reflects
 * the `checked` state. Applications can override the trailing control by providing content
 * in the `endContent` slot (e.g. a `ui5-select` for a value picker); the built-in switch and
 * its `switch-change` event are then suppressed. Items can additionally be flagged as
 * `navigable` to display a navigation arrow and behave as clickable list rows.
 *
 * **Note:** The default switch and the `endContent` slot are mutually exclusive.
 * When any content is provided in `endContent`, the trailing switch is not rendered
 * and no `switch-change` event is fired.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [UserSettingsNotificationsViewItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/UserSettingsNotificationsViewItem) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.27.0](https://github.com/UI5/webcomponents/releases/tag/v2.27.0) of __@ui5/webcomponents-fiori__.
 */
const UserSettingsNotificationsViewItem = withWebComponent<
  UserSettingsNotificationsViewItemPropTypes,
  UserSettingsNotificationsViewItemDomRef
>(
  'ui5-user-settings-notifications-view-item',
  [
    'accessibilityAttributes',
    'accessibleName',
    'accessibleRole',
    'bylineText',
    'highlight',
    'itemKey',
    'text',
    'tooltip',
    'type',
  ],
  ['checked', 'movable', 'navigable', 'navigated', 'selected'],
  ['deleteButton', 'endContent'],
  ['click', 'detail-click', 'switch-change'],
);

UserSettingsNotificationsViewItem.displayName = 'UserSettingsNotificationsViewItem';

export { UserSettingsNotificationsViewItem };
export type { UserSettingsNotificationsViewItemDomRef, UserSettingsNotificationsViewItemPropTypes };
