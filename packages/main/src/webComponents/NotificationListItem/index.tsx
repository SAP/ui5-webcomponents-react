'use client';

import '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
import type Priority from '@ui5/webcomponents/dist/types/Priority.js';
import type WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import type { NotificationListItemBaseCloseEventDetail } from '@ui5/webcomponents-fiori/dist/NotificationListItemBase.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface NotificationListItemAttributes {
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
   * Defines the `titleText` of the item.
   */
  titleText?: string;

  /**
   * Defines if the `titleText` and `description` should wrap, they truncate by default.
   *
   * **Note:** by default the `titleText` and `description`, and a `ShowMore/Less` button would be displayed.
   * @default "None"
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface NotificationListItemDomRef extends NotificationListItemAttributes, Ui5DomRef {}

interface NotificationListItemPropTypes
  extends NotificationListItemAttributes,
    Omit<CommonProps, keyof NotificationListItemAttributes | 'onClose'> {
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
   * Defines the avatar, displayed in the `NotificationListItem`.
   *
   * **Note:** Consider using the `ui5-avatar` to display icons, initials or images.
   * **Note:**In order to be complaint with the UX guidlines and for best experience, we recommend using avatars with 2rem X 2rem in size (32px X 32px). In case you are using the `ui5-avatar` you can set its `size` property to `XS` to get the required size - `<ui5-avatar size="XS"></ui5-avatar>`.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="avatar"`).
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
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="footnotes"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  footnotes?: UI5WCSlotsNode;
  /**
   * Fired when the `Close` button is pressed.
   */
  onClose?: (event: Ui5CustomEvent<NotificationListItemDomRef, NotificationListItemBaseCloseEventDetail>) => void;
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
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const NotificationListItem = withWebComponent<NotificationListItemPropTypes, NotificationListItemDomRef>(
  'ui5-li-notification',
  ['busyDelay', 'priority', 'titleText', 'wrappingType'],
  ['busy', 'read', 'selected', 'showClose'],
  ['actions', 'avatar', 'footnotes'],
  ['close'],
  () => import('@ui5/webcomponents-fiori/dist/NotificationListItem.js')
);

NotificationListItem.displayName = 'NotificationListItem';

export { NotificationListItem };
export type { NotificationListItemDomRef, NotificationListItemPropTypes };
