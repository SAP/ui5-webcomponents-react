'use client';

import '@ui5/webcomponents-fiori/dist/NotificationAction.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';
import type { NotificationActionClickEventDetail } from '@ui5/webcomponents-fiori/dist/NotificationAction.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';

interface NotificationActionAttributes {
  /**
   * Defines the action design.
   * @default "Transparent"
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;

  /**
   * Defines if the action is disabled.
   *
   * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the `icon` source URI.
   *
   * **Note:**
   * SAP-icons font provides numerous built-in icons. To find all the available icons, see the
   * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Defines the text of the `NotificationAction`.
   */
  text?: string;
}

interface NotificationActionDomRef extends Required<NotificationActionAttributes>, Ui5DomRef {}

interface NotificationActionPropTypes
  extends NotificationActionAttributes,
    Omit<CommonProps, keyof NotificationActionAttributes | 'onClick'> {
  /**
   * Fired, when the action is pressed.
   */
  onClick?: (event: Ui5CustomEvent<NotificationActionDomRef, NotificationActionClickEventDetail>) => void;
}

/**
 * The `NotificationAction` represents an abstract action,
 * used in the `NotificationListItem` and the `NotificationListGroupItem` items.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const NotificationAction = withWebComponent<NotificationActionPropTypes, NotificationActionDomRef>(
  'ui5-notification-action',
  ['design', 'icon', 'text'],
  ['disabled'],
  [],
  ['click'],
  () => import('@ui5/webcomponents-fiori/dist/NotificationAction.js')
);

NotificationAction.displayName = 'NotificationAction';

export { NotificationAction };
export type { NotificationActionDomRef, NotificationActionPropTypes };
