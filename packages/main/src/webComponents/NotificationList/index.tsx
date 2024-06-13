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
   */
  noDataText?: string;
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
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0) of __@ui5/webcomponents-fiori__.
 */
const NotificationList = withWebComponent<NotificationListPropTypes, NotificationListDomRef>(
  'ui5-notification-list',
  ['noDataText'],
  [],
  [],
  ['item-click', 'item-close', 'item-toggle'],
  () => import('@ui5/webcomponents-fiori/dist/NotificationList.js')
);

NotificationList.displayName = 'NotificationList';

export { NotificationList };
export type { NotificationListDomRef, NotificationListPropTypes };
