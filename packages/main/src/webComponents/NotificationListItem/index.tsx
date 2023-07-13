'use client';

import '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
import type { NotificationListItemCloseEventDetail } from '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
import type { ReactNode } from 'react';
import { Priority } from '../../enums/index.js';
import type { WrappingType } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface NotificationListItemAttributes {
  /**
   * Defines if the `titleText` and `description` should wrap, they truncate by default.
   *
   * **Note:** by default the `titleText` and `description`, and a `ShowMore/Less` button would be displayed.
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
  /**
   * Defines if a busy indicator would be displayed over the item.
   */
  busy?: boolean;
  /**
   * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
   */
  busyDelay?: number;
  /**
   * Defines the `priority` of the item. Available options are:
   *
   * *   `None`
   * *   `Low`
   * *   `Medium`
   * *   `High`
   */
  priority?: Priority | keyof typeof Priority;
  /**
   * Defines if the `notification` is new or has been already read.
   *
   * **Note:** if set to `false` the `titleText` has bold font, if set to true - it has a normal font.
   */
  read?: boolean;
  /**
   * Defines if the `close` button would be displayed.
   */
  showClose?: boolean;
  /**
   * Defines the `titleText` of the item.
   */
  titleText?: string;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
}

export interface NotificationListItemDomRef extends NotificationListItemAttributes, Ui5DomRef {}

export interface NotificationListItemPropTypes extends NotificationListItemAttributes, CommonProps {
  /**
   * Defines the avatar, displayed in the `NotificationListItem`.
   *
   * **Note:** Consider using the `Avatar` to display icons, initials or images.
   * **Note:**In order to be complaint with the UX guidlines and for best experience, we recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the `Avatar` you can set its `size` property to `XS` to get the required size - `<Avatar size="XS"></Avatar>`.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="avatar"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  avatar?: UI5WCSlotsNode;
  /**
   * Defines the content of the `NotificationListItem`, usually a description of the notification.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the elements, displayed in the footer of the of the component.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="footnotes"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  footnotes?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the actions, displayed in the top-right area.
   *
   * **Note:** use the `NotificationAction` component.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="actions"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  actions?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Fired when the `Close` button is pressed.
   */
  onClose?: (event: Ui5CustomEvent<NotificationListItemDomRef, NotificationListItemCloseEventDetail>) => void;
}

/**
 * The `NotificationListItem` is a type of list item, meant to display notifications.
 * The component has a rich set of various properties that allows the user to set `avatar`, `titleText`, descriptive `content` and `footnotes` to fully describe a notification.
 * The user can:
 *
 * *   display a `Close` button
 * *   can control whether the `titleText` and `description` should wrap or truncate and display a `ShowMore` button to switch between less and more information
 * *   add custom actions by using the `NotificationAction` component
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-NotificationListItem)
 */
const NotificationListItem = withWebComponent<NotificationListItemPropTypes, NotificationListItemDomRef>(
  'ui5-li-notification',
  ['wrappingType', 'busyDelay', 'priority', 'titleText'],
  ['busy', 'read', 'showClose', 'selected'],
  ['avatar', 'footnotes', 'actions'],
  ['close'],
  () => import('@ui5/webcomponents-fiori/dist/NotificationListItem.js')
);

NotificationListItem.displayName = 'NotificationListItem';

NotificationListItem.defaultProps = {
  busyDelay: 1000,
  priority: Priority.None
};

export { NotificationListItem };
