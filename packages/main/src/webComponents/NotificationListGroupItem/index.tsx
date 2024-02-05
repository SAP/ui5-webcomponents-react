'use client';

import '@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js';
import type { NotificationListGroupItemCloseEventDetail } from '@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js';
import type { ReactNode } from 'react';
import { Priority } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface NotificationListGroupItemAttributes {
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
   * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
   */
  busyDelay?: number;
  /**
   * Defines the `priority` of the item.
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

interface NotificationListGroupItemDomRef extends NotificationListGroupItemAttributes, Ui5DomRef {}

interface NotificationListGroupItemPropTypes
  extends NotificationListGroupItemAttributes,
    Omit<CommonProps, keyof NotificationListGroupItemAttributes> {
  /**
   * Defines the items of the `NotificationListGroupItem`, usually `NotificationListItem` items.
   */
  children?: ReactNode | ReactNode[];
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
  actions?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Fired when the `NotificationListGroupItem` is expanded/collapsed by user interaction.
   */
  onToggle?: (event: Ui5CustomEvent<NotificationListGroupItemDomRef>) => void;
  /**
   * Fired when the `Close` button is pressed.
   */
  onClose?: (event: Ui5CustomEvent<NotificationListGroupItemDomRef, NotificationListGroupItemCloseEventDetail>) => void;
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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-NotificationListGroupItem)
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

NotificationListGroupItem.defaultProps = {
  busyDelay: 1000,
  priority: Priority.None
};

export { NotificationListGroupItem };
export type { NotificationListGroupItemDomRef, NotificationListGroupItemPropTypes };
