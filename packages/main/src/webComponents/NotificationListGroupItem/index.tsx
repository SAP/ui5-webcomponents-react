'use client';

import '@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js';
import type NotificationListGrowingMode from '@ui5/webcomponents/dist/types/NotificationListGrowingMode.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface NotificationListGroupItemAttributes {
  /**
   * Defines if the group is collapsed or expanded.
   * @default false
   */
  collapsed?: boolean;

  /**
   * Defines whether the component will have growing capability by pressing a `More` button.
   * When button is pressed `load-more` event will be fired.
   *
   * **Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents-fiori**.
   * @default "None"
   */
  growing?: NotificationListGrowingMode | keyof typeof NotificationListGrowingMode;

  /**
   * Defines if a busy indicator would be displayed over the item.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
   * @default 1000
   */
  loadingDelay?: number;

  /**
   * Defines if the `notification` is new or has been already read.
   *
   * **Note:** if set to `false` the `titleText` has bold font,
   * if set to true - it has a normal font.
   * @default false
   */
  read?: boolean;

  /**
   * Defines the `titleText` of the item.
   * @default undefined
   */
  titleText?: string | undefined;
}

interface NotificationListGroupItemDomRef extends Required<NotificationListGroupItemAttributes>, Ui5DomRef {}

interface NotificationListGroupItemPropTypes
  extends NotificationListGroupItemAttributes,
    Omit<CommonProps, keyof NotificationListGroupItemAttributes | 'children' | 'onLoadMore' | 'onToggle'> {
  /**
   * Defines the items of the `NotificationListGroupItem`,
   * usually `NotificationListItem` items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when additional items are requested.
   *
   * **Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents-fiori**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onLoadMore?: (event: Ui5CustomEvent<NotificationListGroupItemDomRef>) => void;

  /**
   * Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onToggle?: (event: Ui5CustomEvent<NotificationListGroupItemDomRef>) => void;
}

/**
 * The `NotificationListGroupItem` is a special type of list item,
 * that unlike others can group items within self, usually `NotificationListItem` items.
 *
 * The component consists of:
 *
 * - `Toggle` button to expand and collapse the group
 * - `TitleText` to entitle the group
 * - Items of the group
 *
 * ### Usage
 * The component should be used inside a `NotificationList`.
 *
 * ### Keyboard Handling
 * The `NotificationListGroupItem` provides advanced keyboard handling.
 * This component provides fast navigation when the header is focused using the following keyboard shortcuts:
 *
 * - [Space] - toggles expand / collapse of the group
 * - [Plus] - expands the group
 * - [Minus] - collapses the group
 * - [Right] - expands the group
 * - [Left] - collapses the group
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const NotificationListGroupItem = withWebComponent<NotificationListGroupItemPropTypes, NotificationListGroupItemDomRef>(
  'ui5-li-notification-group',
  ['growing', 'loadingDelay', 'titleText'],
  ['collapsed', 'loading', 'read'],
  [],
  ['load-more', 'toggle'],
);

NotificationListGroupItem.displayName = 'NotificationListGroupItem';

export { NotificationListGroupItem };
export type { NotificationListGroupItemDomRef, NotificationListGroupItemPropTypes };
