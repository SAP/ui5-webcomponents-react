import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/NotificationListGroupItem';
import { FC } from 'react';
import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import { ReactNode } from 'react';

export interface NotificationListGroupItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the group is collapsed or expanded.
   */
  collapsed?: boolean;
  /**
   * Defines if the items <code>counter</code> would be displayed.
   */
  showCounter?: boolean;
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
   * Defines the items of the <code>NotificationListGroupItem</code>, usually <code>NotificationListItem</code> items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the actions, displayed in the top-right area. <br><br> <b>Note:</b> use the <code>ui5-notification-overflow-action</code> component.
   */
  actions?: ReactNode;
  /**
   * Fired when the <code>NotificationListGroupItem</code> is expanded/collapsed by user interaction.
   */
  onToggle?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the <code>Close</code> button is pressed.
   */
  onClose?: (event: CustomEvent<{}>) => void;
}

/**
     * The <code>NotificationListGroupItem</code> is a special type of list item, that unlike others can group items within
self, usually <code>NotificationListItem</code> items. <br />

The component consists of:
<ul>
  <li><code>Toggle</code> button to expand and collapse the group</li>
  <li><code>Priority</code> icon to display the priority of the group</li>
  <li><code>Heading</code> to entitle the group</li>
  <li>Custom actions - with the use of <code>ui5-notification-overflow-action</code></li>
  <li>Items of the group</li>
</ul>
     
     * <a href="https://sap.github.io/ui5-webcomponents/playground/components/NotificationListGroupItem" target="_blank">UI5 Web Components Playground</a>
     */
const NotificationListGroupItem: FC<NotificationListGroupItemPropTypes> = withWebComponent<
  NotificationListGroupItemPropTypes
>(
  'ui5-li-notification-group',
  ['heading', 'priority'],
  ['collapsed', 'showCounter', 'busy', 'showClose', 'selected'],
  ['actions'],
  ['toggle', 'close']
);

NotificationListGroupItem.displayName = 'NotificationListGroupItem';

NotificationListGroupItem.defaultProps = {
  collapsed: false,
  showCounter: false,
  busy: false,
  priority: Priority.None,
  showClose: false,
  selected: false
};

export { NotificationListGroupItem };
