import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/NotificationAction';
import { FC } from 'react';

export interface NotificationActionPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the action design.
   *
   * **Note:** Available options are "Default", "Emphasized", "Positive", "Negative", and "Transparent".
   */
  design?: ButtonDesign;
  /**
   * Defines if the action is disabled.
   *
   * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the text of the `NotificationAction`.
   */
  text?: string;
}

/**
 * The `NotificationAction` represents an abstract action, used in the `NotificationListItem` and the `NotificationListItemBase` items
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/NotificationAction" target="_blank">UI5 Web Components Playground</a>
 */
const NotificationAction: FC<NotificationActionPropTypes> = withWebComponent<NotificationActionPropTypes>(
  'ui5-notification-action',
  ['design', 'icon', 'text'],
  ['disabled'],
  [],
  []
);

NotificationAction.displayName = 'NotificationAction';

NotificationAction.defaultProps = {
  design: ButtonDesign.Transparent,
  disabled: false
};

export { NotificationAction };
