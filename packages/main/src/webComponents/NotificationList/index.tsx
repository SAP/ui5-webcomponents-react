'use client';

import '@ui5/webcomponents-fiori/dist/NotificationList.js';
import type {
  NotificationItemClickEventDetail,
  NotificationItemCloseEventDetail,
  NotificationItemToggleEventDetail
} from '@ui5/webcomponents-fiori/dist/NotificationList.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface NotificationListAttributes {
  /**
   * Defines the text that is displayed when the component contains no items.
   * @default undefined
   */
  noDataText?: string | undefined;
}

interface NotificationListDomRef extends Required<NotificationListAttributes>, Ui5DomRef {}

interface NotificationListPropTypes
  extends NotificationListAttributes,
    Omit<CommonProps, keyof NotificationListAttributes | 'children' | 'onItemClick' | 'onItemClose' | 'onItemToggle'> {
  /**
   * Defines the items of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when an item is clicked.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onItemClick?: (event: Ui5CustomEvent<NotificationListDomRef, NotificationItemClickEventDetail>) => void;

  /**
   * Fired when the `Close` button of any item is clicked.
   */
  onItemClose?: (event: Ui5CustomEvent<NotificationListDomRef, NotificationItemCloseEventDetail>) => void;

  /**
   * Fired when an item is toggled.
   */
  onItemToggle?: (event: Ui5CustomEvent<NotificationListDomRef, NotificationItemToggleEventDetail>) => void;
}

/**
 * The `NotificationList` web component represents
 * a container for `NotificationListGroupItem` and `NotificationListItem`.
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 * The `NotificationList` provides advanced keyboard handling.
 * When a list is focused the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - [Up] or [Left] - Navigates up the items
 * - [Down] or [Right] - Navigates down the items
 * - [Home] - Navigates to first item
 * - [End] - Navigates to the last item
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-fiori__.
 */
const NotificationList = withWebComponent<NotificationListPropTypes, NotificationListDomRef>(
  'ui5-notification-list',
  ['noDataText'],
  [],
  [],
  ['item-click', 'item-close', 'item-toggle']
);

NotificationList.displayName = 'NotificationList';

export { NotificationList };
export type { NotificationListDomRef, NotificationListPropTypes };
