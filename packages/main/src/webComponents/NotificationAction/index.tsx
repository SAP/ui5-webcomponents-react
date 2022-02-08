import { ButtonDesign } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

import '@ui5/webcomponents-fiori/dist/NotificationAction.js';

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
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the text of the `NotificationAction`.
   */
  text?: string;
}

export interface NotificationActionDomRef extends NotificationActionAttributes, Ui5DomRef {}

export interface NotificationActionPropTypes extends NotificationActionAttributes, CommonProps {}

/**
 * The `NotificationAction` represents an abstract action, used in the `NotificationListItem` and the `NotificationListItemBase` items
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/NotificationAction" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const NotificationAction = withWebComponent<NotificationActionPropTypes, NotificationActionDomRef>(
  'ui5-notification-action',
  ['design', 'icon', 'text'],
  ['disabled'],
  [],
  []
);

NotificationAction.displayName = 'NotificationAction';

NotificationAction.defaultProps = {
  design: ButtonDesign.Transparent
};

export { NotificationAction };
