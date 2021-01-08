import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/NotificationListItem';
import { FC, ReactNode } from 'react';

export interface NotificationListItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the `notification` is new or has been already read.
   *
   * **Note:** if set to `false` the `heading` has bold font, if set to true - it has a normal font.
   */
  read?: boolean;
  /**
   * Defines if the `heading` and `description` should wrap, they truncate by default.
   *
   * **Note:** by default the `heading` and `decription`, and a `ShowMore/Less` button would be displayed.
   */
  wrap?: boolean;
  /**
   * Defines if a busy indicator would be displayed over the item.
   */
  busy?: boolean;
  /**
   * Defines the `heading` of the item.
   */
  heading?: string;
  /**
   * Defines the `priority` of the item.
   */
  priority?: Priority;
  /**
   * Defines if the `close` button would be displayed.
   */
  showClose?: boolean;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
  /**
   * Defines the avatar, displayed in the `NotificationListItem`.
   *
   * **Note:** Consider using the `Avatar` to display icons, initials or images.
   */
  avatar?: ReactNode;
  /**
   * Defines the content of the `NotificationListItem`, usually a description of the notification.
   *
   * **Note:** Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the elements, dipalyed in the footer of the of the `NotificationListItem`.
   */
  footnotes?: ReactNode | ReactNode[];
  /**
   * Defines the actions, displayed in the top-right area.
   *
   * **Note:** use the `NotificationAction` component.
   */
  actions?: ReactNode;
  /**
   * Fired when the `Close` button is pressed.
   */
  onClose?: (event: CustomEvent) => void;
}

/**
 * The `NotificationListItem` is a type of list item, meant to display notifications.
 * The component has a rich set of various properties that allows the user to set `avatar`, `heading`, descriptive `content` and `footnotes` to fully describe a notification.
 * The user can:
 *
 * *   display a `Close` button
 * *   can control whether the `heading` and `description` should wrap or truncate and display a `ShowMore` button to switch between less and more information
 * *   add custom actions by using the `NotificationAction` component
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/NotificationListItem" target="_blank">UI5 Web Components Playground</a>
 */
const NotificationListItem: FC<NotificationListItemPropTypes> = withWebComponent<NotificationListItemPropTypes>(
  'ui5-li-notification',
  ['heading', 'priority'],
  ['read', 'wrap', 'busy', 'showClose', 'selected'],
  ['avatar', 'footnotes', 'actions'],
  ['close']
);

NotificationListItem.displayName = 'NotificationListItem';

NotificationListItem.defaultProps = {
  read: false,
  wrap: false,
  busy: false,
  priority: Priority.None,
  showClose: false,
  selected: false
};

export { NotificationListItem };
