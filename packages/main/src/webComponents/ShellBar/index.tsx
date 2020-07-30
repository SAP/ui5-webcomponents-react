import '@ui5/webcomponents-fiori/dist/ShellBar';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC, ReactNode } from 'react';

export interface ShellBarPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the <code>notificationCount</code>, displayed in the notification icon top-right corner.
   */
  notificationCount?: string;
  /**
   * Defines the <code>primaryTitle</code>. <br><br> <b>Note:</b> The <code>primaryTitle</code> would be hidden on S screen size (less than approx. 700px).
   */
  primaryTitle?: string;
  /**
   * Defines the <code>secondaryTitle</code>. <br><br> <b>Note:</b> The <code>secondaryTitle</code> would be hidden on S and M screen sizes (less than approx. 1300px).
   */
  secondaryTitle?: string;
  /**
   * Defines, if the product CoPilot icon would be displayed. <br><b>Note:</b> By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you can import the <code>"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"</code> module as add-on feature.
   */
  showCoPilot?: boolean;
  /**
   * Defines, if the notification icon would be displayed.
   */
  showNotifications?: boolean;
  /**
   * Defines, if the product switch icon would be displayed.
   */
  showProductSwitch?: boolean;
  /**
   * Defines the <code>ui5-shellbar</code> aditional items. <br><br> <b>Note:</b> You can use the &nbsp;&lt;ui5-shellbar-item>&lt;/ui5-shellbar-item>.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the logo of the <code>ui5-shellbar</code>. For example, you can use <code>ui5-avatar</code> or <code>img</code> elements as logo.
   */
  logo?: ReactNode;
  /**
   * Defines the items displayed in menu after a click on the primary title. <br><br> <b>Note:</b> You can use the &nbsp;&lt;ui5-li>&lt;/ui5-li> and its ancestors.
   */
  menuItems?: ReactNode | ReactNode[];
  /**
   * You can pass <code>ui5-avatar</code> to set the profile image/icon. If no profile slot is set - profile will be excluded from actions.
   */
  profile?: ReactNode;
  /**
   * Defines the <code>ui5-input</code>, that will be used as a search field.
   */
  searchField?: ReactNode | ReactNode[];
  /**
   * Defines a <code>ui5-button</code> in the bar that will be placed in the beginning. We encourage this slot to be used for a back or home button. It gets overstyled to match ShellBar's styling.
   */
  startButton?: ReactNode | ReactNode[];
  /**
   * Fired, when the co pilot is activated.
   */
  onCoPilotClick?: (event: CustomEvent<{ targetRef: ReactNode }>) => void;
  /**
   * Fired, when the logo is activated.
   */
  onLogoClick?: (event: CustomEvent<{ targetRef: ReactNode }>) => void;
  /**
   * Fired, when a menu item is activated <b>Note:</b> You can prevent closing of oveflow popover by calling <code>event.preventDefault()</code>.
   */
  onMenuItemClick?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired, when the notification icon is activated.
   */
  onNotificationsClick?: (event: CustomEvent<{ targetRef: ReactNode }>) => void;
  /**
   * Fired, when the product switch icon is activated. <b>Note:</b> You can prevent closing of oveflow popover by calling <code>event.preventDefault()</code>.
   */
  onProductSwitchClick?: (event: CustomEvent<{ targetRef: ReactNode }>) => void;
  /**
   * Fired, when the profile slot is present.
   */
  onProfileClick?: (event: CustomEvent<{ targetRef: ReactNode }>) => void;
}

/**
 * <code>import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ShellBar" target="_blank">UI5 Web Components Playground</a>
 */
const ShellBar: FC<ShellBarPropTypes> = withWebComponent<ShellBarPropTypes>(
  'ui5-shellbar',
  ['notificationCount', 'primaryTitle', 'secondaryTitle'],
  ['showCoPilot', 'showNotifications', 'showProductSwitch'],
  ['logo', 'menuItems', 'profile', 'searchField', 'startButton'],
  ['co-pilot-click', 'logo-click', 'menu-item-click', 'notifications-click', 'product-switch-click', 'profile-click']
);

ShellBar.displayName = 'ShellBar';

ShellBar.defaultProps = {
  showCoPilot: false,
  showNotifications: false,
  showProductSwitch: false
};

export { ShellBar };
