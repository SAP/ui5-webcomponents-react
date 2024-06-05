'use client';

import '@ui5/webcomponents-fiori/dist/NotificationList.js';
import type {
  ListItemClickEventDetail,
  ListItemCloseEventDetail,
  ListItemDeleteEventDetail,
  ListItemToggleEventDetail,
  ListMoveEventDetail,
  ListSelectionChangeEventDetail
} from '@ui5/webcomponents/dist/List.js';
import type ListItemBase from '@ui5/webcomponents/dist/ListItemBase.js';
import type ListAccessibleRole from '@ui5/webcomponents/dist/types/ListAccessibleRole.js';
import type ListGrowingMode from '@ui5/webcomponents/dist/types/ListGrowingMode.js';
import type ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import type ListSeparators from '@ui5/webcomponents/dist/types/ListSeparators.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface NotificationListAttributes {
  /**
   * Defines the accessible name of the component.
   */
  accessibleName?: string;

  /**
   * Defines the IDs of the elements that label the input.
   */
  accessibleNameRef?: string;

  /**
   * Defines the accessible role of the component.
   * @default "List"
   */
  accessibleRole?: ListAccessibleRole | keyof typeof ListAccessibleRole;

  /**
   * Defines the footer text.
   */
  footerText?: string;

  /**
   * Defines whether the component will have growing capability either by pressing a `More` button,
   * or via user scroll. In both cases `load-more` event is fired.
   *
   * **Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,
   * on IE the component will fallback to `growing="Button"`.
   * @default "None"
   */
  growing?: ListGrowingMode | keyof typeof ListGrowingMode;

  /**
   * Defines the text that will be displayed inside the growing button.
   *
   * **Note:** If not specified a built-in text will be displayed.
   *
   * **Note:** This property takes effect if the `growing` property is set to the `Button`.
   *
   * **Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents-fiori**.
   */
  growingButtonText?: string;

  /**
   * Defines the component header text.
   *
   * **Note:** If `header` is set this property is ignored.
   */
  headerText?: string;

  /**
   * Determines whether the component is indented.
   * @default false
   */
  indent?: boolean;

  /**
   * Defines if the component would display a loading indicator over the list.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
   * @default 1000
   */
  loadingDelay?: number;

  /**
   * Defines the text that is displayed when the component contains no items.
   */
  noDataText?: string;

  /**
   * Defines the selection mode of the component.
   * @default "None"
   */
  selectionMode?: ListSelectionMode | keyof typeof ListSelectionMode;

  /**
   * Defines the item separator style that is used.
   * @default "All"
   */
  separators?: ListSeparators | keyof typeof ListSeparators;
}

interface NotificationListDomRef extends Required<NotificationListAttributes>, Ui5DomRef {
  /**
   * Returns an array containing the list item instances without the groups in a flat structure.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   */
  readonly listItems: Array<ListItemBase>;
}

interface NotificationListPropTypes
  extends NotificationListAttributes,
    Omit<
      CommonProps,
      | keyof NotificationListAttributes
      | 'children'
      | 'header'
      | 'onItemClick'
      | 'onItemClose'
      | 'onItemDelete'
      | 'onItemToggle'
      | 'onLoadMore'
      | 'onMove'
      | 'onMoveOver'
      | 'onSelectionChange'
    > {
  /**
   * Defines the items of the component.
   *
   * **Note:** Use `ui5-li`, `ui5-li-custom`, and `ui5-li-group` for the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the component header.
   *
   * **Note:** When `header` is set, the
   * `headerText` property is ignored.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="header"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  header?: UI5WCSlotsNode;
  /**
   * Fired when an item is activated, unless the item's `type` property
   * is set to `Inactive`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onItemClick?: (event: Ui5CustomEvent<NotificationListDomRef, ListItemClickEventDetail>) => void;

  /**
   * Fired when the `Close` button of any item is clicked
   *
   * **Note:** This event is only applicable to list items that can be closed (such as notification list items),
   * not to be confused with `item-delete`.
   */
  onItemClose?: (event: Ui5CustomEvent<NotificationListDomRef, ListItemCloseEventDetail>) => void;

  /**
   * Fired when the Delete button of any item is pressed.
   *
   * **Note:** A Delete button is displayed on each item,
   * when the component `selectionMode` property is set to `Delete`.
   */
  onItemDelete?: (event: Ui5CustomEvent<NotificationListDomRef, ListItemDeleteEventDetail>) => void;

  /**
   * Fired when the `Toggle` button of any item is clicked.
   *
   * **Note:** This event is only applicable to list items that can be toggled (such as notification group list items).
   */
  onItemToggle?: (event: Ui5CustomEvent<NotificationListDomRef, ListItemToggleEventDetail>) => void;

  /**
   * Fired when the user scrolls to the bottom of the list.
   *
   * **Note:** The event is fired when the `growing='Scroll'` property is enabled.
   */
  onLoadMore?: (event: Ui5CustomEvent<NotificationListDomRef>) => void;

  /**
   * Fired when a movable list item is dropped onto a drop target.
   *
   * **Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onMove?: (event: Ui5CustomEvent<NotificationListDomRef, ListMoveEventDetail>) => void;

  /**
   * Fired when a movable list item is moved over a potential drop target during a dragging operation.
   *
   * If the new position is valid, prevent the default action of the event using `preventDefault()`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   */
  onMoveOver?: (event: Ui5CustomEvent<NotificationListDomRef, ListMoveEventDetail>) => void;

  /**
   * Fired when selection is changed by user interaction
   * in `Single`, `SingleStart`, `SingleEnd` and `Multiple` selection modes.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onSelectionChange?: (event: Ui5CustomEvent<NotificationListDomRef, ListSelectionChangeEventDetail>) => void;
}

/**
 * The `NotificationList` web component represents
 * a container for `NotificationListGroupItem` and `NotificationListItem`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0) of __@ui5/webcomponents-fiori__.
 */
const NotificationList = withWebComponent<NotificationListPropTypes, NotificationListDomRef>(
  'ui5-notification-list',
  [
    'accessibleName',
    'accessibleNameRef',
    'accessibleRole',
    'footerText',
    'growing',
    'growingButtonText',
    'headerText',
    'loadingDelay',
    'noDataText',
    'selectionMode',
    'separators'
  ],
  ['indent', 'loading'],
  ['header'],
  ['item-click', 'item-close', 'item-delete', 'item-toggle', 'load-more', 'move-over', 'move', 'selection-change'],
  () => import('@ui5/webcomponents-fiori/dist/NotificationList.js')
);

NotificationList.displayName = 'NotificationList';

export { NotificationList };
export type { NotificationListDomRef, NotificationListPropTypes };
