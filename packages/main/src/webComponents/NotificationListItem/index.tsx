import '@ui5/webcomponents-fiori/dist/NotificationListItem';
import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC, ReactNode } from 'react';

export interface NotificationListItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the <code>notification</code> is new or has been already read. <br><br> <b>Note:</b> if set to <code>false</code> the <code>heading</code> has bold font, if set to true - it has a normal font.
   */
  read?: boolean;
  /**
   * Defines if the <code>heading</code> and <code>decription</code> should wrap, they truncate by default.<br/><br/>
   *
   * <b>Note:</b> by default the <code>heading</code> and <code>decription</code>, and a <code>ShowMore/Less</code> button would be displayed.
   */
  wrap?: boolean;
  /**
   * Defines if a busy indicator would be displayed over the item.
   */
  busy?: boolean;
  /**
   * Defines the <code>heading</code> of the item.
   */
  heading?: string;
  /**
   * Defines the <code>priority</code> of the item.
   */
  priority?: Priority;
  /**
   * Defines if the <code>close</code> button would be displayed.
   */
  showClose?: boolean;
  /**
   * Defines the selected state of the <code>ListItem</code>.
   */
  selected?: boolean;
  /**
   * Defines the avatar, displayed in the <code>NotificationListItem</code>.<br/><br/>
   *
   * <b>Note:</b> Consider using the <code>Avatar</code> to display icons, initials or images.
   */
  avatar?: ReactNode;
  /**
   * Defines the content of the <code>NotificationListItem</code>, usually a description of the notification.<br/><br/>
   *
   * <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the elements, dipalyed in the footer of the of the <code>NotificationListItem</code>.
   */
  footnotes?: ReactNode | ReactNode[];
  /**
   * Defines the actions, displayed in the top-right area. <br><br> <b>Note:</b> use the <code>NotificationOverflowAction</code> component.
   */
  actions?: ReactNode;
  /**
   * Fired when the <code>Close</code> button is pressed.
   */
  onClose?: (event: CustomEvent) => void;
}

/**
 *<h3>Overview</h3> The <code>NotificationListItem</code> is a type of list item, meant to display notifications. <br>
 The component has a rich set of various properties that allows the user to set <code>avatar</code>, <code>heading</code>, descriptive <code>content</code> and <code>footnotes</code> to fully describe a notification. <br>
 The user can: <ul> <li>display a <code>close</code> button</li> <li>can control whether the <code>heading</code> and <code>description</code> should wrap or truncate and display a <code>ShowMore</code> button to switch between less and more information</li> <li>add custom actions by using the <code>NotificationOverflowAction</code> component</li> </ul>
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/NotificationListItem" target="_blank">UI5 Web Components Playground</a>
 */
const NotificationListItem: FC<NotificationListItemPropTypes> = withWebComponent<NotificationListItemPropTypes>(
  'ui5-li-notification',
  ['heading', 'priority'],
  ['read', 'busy', 'showClose', 'selected', 'wrap'],
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
