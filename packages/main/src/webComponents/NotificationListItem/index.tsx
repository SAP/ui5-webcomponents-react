import '@ui5/webcomponents-fiori/dist/NotificationListItem';
import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

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
  wrap?: unknown;
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
   * Defines the avatar, displayed in the <code>ui5-li-notification</code>.<br/><br/>
   *
   * <b>Note:</b> Consider using the <code>ui5-avatar</code> to display icons, initials or images.
   */
  avatar?: ReactNode;
  /**
   * Defines the content of the <code>ui5-li-notification</code>, usually a description of the notification.<br/><br/>
   *
   * <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the elements, dipalyed in the footer of the of the <code>ui5-li-notification</code>.
   */
  footnotes?: ReactNode | ReactNode[];
  /**
   * Defines the actions, displayed in the top-right area. <br><br> <b>Note:</b> use the <code>ui5-notification-overflow-action</code> component.
   */
  actions?: ReactNode;
  /**
   * Fired when the <code>Close</code> button is pressed.
   */
  onClose?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { NotificationListItem } from '@ui5/webcomponents-react/lib/NotificationListItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/NotificationListItem" target="_blank">UI5 Web Components Playground</a>
 */
const NotificationListItem: FC<NotificationListItemPropTypes> = withWebComponent<NotificationListItemPropTypes>(
  'ui5-li-notification',
  ['wrap', 'heading', 'priority'],
  ['read', 'busy', 'showClose', 'selected'],
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
