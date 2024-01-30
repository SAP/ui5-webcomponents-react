'use client';

import '@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js';
import type Priority from '@ui5/webcomponents/dist/types/Priority.js';
import type { NotificationListItemBaseCloseEventDetail } from '@ui5/webcomponents-fiori/dist/NotificationListItemBase.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface NotificationListGroupItemAttributes {
  /**
   * Defines if a busy indicator would be displayed over the item.
   * @default false
   */
  busy?: boolean;

  /**
   * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
   * @default 1000
   */
  busyDelay?: number;

  /**
   * Defines if the group is collapsed or expanded.
   * @default false
   */
  collapsed?: boolean;

  /**
   * Defines the `priority` of the item.
   * @default "None"
   */
  priority?: Priority | keyof typeof Priority;

  /**
   * Defines if the `notification` is new or has been already read.
   *
   * **Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.
   * @default false
   */
  read?: boolean;

  /**
   * Defines the selected state of the `ListItem`.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines if the `close` button would be displayed.
   * @default false
   */
  showClose?: boolean;

  /**
   * Defines if the items `counter` would be displayed.
   * @default false
   */
  showCounter?: boolean;

  /**
   * Defines the `titleText` of the item.
   */
  titleText?: string;
}

interface NotificationListGroupItemDomRef extends NotificationListGroupItemAttributes, Ui5DomRef {}

interface NotificationListGroupItemPropTypes
  extends NotificationListGroupItemAttributes,
    Omit<CommonProps, keyof NotificationListGroupItemAttributes | 'onClose' | 'onToggle'> {
  /**
   * Defines the actions, displayed in the top-right area.
   *
   * **Note:** use the `NotificationAction` component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="actions"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  actions?: UI5WCSlotsNode;

  /**
   * Defines the items of the `NotificationListGroupItem`, usually `NotificationListItem` items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.
   */
  onToggle?: (event: Ui5CustomEvent<NotificationListGroupItemDomRef>) => void;

  /**
   * Fired when the `Close` button is pressed.
   */
  onClose?: (event: Ui5CustomEvent<NotificationListGroupItemDomRef, NotificationListItemBaseCloseEventDetail>) => void;
}

/**
 * The `NotificationListGroupItem` is a special type of list item, that unlike others can group items within self, usually `NotificationListItem` items.
 * The component consists of:
 *
 * *   `Toggle` button to expand and collapse the group
 * *   `Priority` icon to display the priority of the group
 * *   `TitleText` to entitle the group
 * *   Custom actions - with the use of `NotificationAction`
 * *   Items of the group
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const NotificationListGroupItem = withWebComponent<NotificationListGroupItemPropTypes, NotificationListGroupItemDomRef>(
  'ui5-li-notification-group',
  ['busyDelay', 'priority', 'titleText'],
  ['busy', 'collapsed', 'read', 'selected', 'showClose', 'showCounter'],
  ['actions'],
  ['close', 'toggle'],
  () => import('@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js')
);

NotificationListGroupItem.displayName = 'NotificationListGroupItem';

export { NotificationListGroupItem };
export type { NotificationListGroupItemDomRef, NotificationListGroupItemPropTypes };
