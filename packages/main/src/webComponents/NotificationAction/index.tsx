'use client';

import '@ui5/webcomponents-fiori/dist/NotificationAction.js';
import { ButtonDesign } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface NotificationActionAttributes {
  /**
   * Defines the action design.
   *
   * **Note:**
   *
   * *   `Default`
   * *   `Emphasized`
   * *   `Positive`
   * *   `Negative`
   * *   `Transparent`
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;
  /**
   * Defines if the action is disabled.
   *
   * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the text of the `NotificationAction`.
   */
  text?: string;
}

export interface NotificationActionDomRef extends NotificationActionAttributes, Ui5DomRef {}

export interface NotificationActionPropTypes extends NotificationActionAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Fired, when the action is pressed.
   */
  onClick?: (event: Ui5CustomEvent<NotificationActionDomRef, { targetRef: HTMLElement }>) => void;
}

/**
 * The `NotificationAction` represents an abstract action, used in the `NotificationListItem` and the `NotificationListGroupItem` items
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/NotificationListItem" target="_blank">UI5 Web Components Playground</ui5-link>
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

NotificationAction.defaultProps = {
  design: ButtonDesign.Transparent
};

export { NotificationAction };
