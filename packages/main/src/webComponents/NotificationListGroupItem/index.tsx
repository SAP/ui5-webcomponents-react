import { Priority } from '@ui5/webcomponents-react/lib/Priority';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/NotificationListGroupItem';
import { FC, ReactNode } from 'react';

export interface NotificationListGroupItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the group is collapsed or expanded.
   */
  collapsed?: boolean;
  /**
   * Defines if the items `counter` would be displayed.
   */
  showCounter?: boolean;
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
   * Defines the items of the `NotificationListItemBase`, usually `NotificationListItem` items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the actions, displayed in the top-right area.
   *
   * **Note:** use the `NotificationOverflowAction` component.
   */
  actions?: ReactNode;
  /**
   * Fired when the `NotificationListItemBase` is expanded/collapsed by user interaction.
   */
  onToggle?: (event: CustomEvent) => void;
  /**
   * Fired when the `Close` button is pressed.
   */
  onClose?: (event: CustomEvent) => void;
}

/**
 * The `NotificationListGroupItem` is a special type of list item, that unlike others can group items within self, usually `NotificationListItem` items.
 * The component consists of:
 *
 * *   `Toggle` button to expand and collapse the group
 * *   `Priority` icon to display the priority of the group
 * *   `Heading` to entitle the group
 * *   Custom actions - with the use of `NotificationOverflowAction`
 * *   Items of the group
 *
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
