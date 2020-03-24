import UI5ShellBar from '@ui5/webcomponents-fiori/dist/ShellBar';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ShellBarPropTypes extends WithWebComponentPropTypes {
  logo?: string; // @generated
  primaryTitle?: string; // @generated
  secondaryTitle?: string; // @generated
  notificationCount?: string; // @generated
  profile?: string; // @generated
  showNotifications?: boolean; // @generated
  showProductSwitch?: boolean; // @generated
  showCoPilot?: boolean; // @generated
  onNotificationsClick?: (event: CustomEvent) => void; // @generated
  onProfileClick?: (event: CustomEvent) => void; // @generated
  onProductSwitchClick?: (event: CustomEvent) => void; // @generated
  onLogoClick?: (event: CustomEvent) => void; // @generated
  onCoPilotClick?: (event: CustomEvent) => void; // @generated
  onMenuItemClick?: (event: CustomEvent) => void; // @generated
  children?: ReactNode; // @generated
  menuItems?: ReactNode; // @generated
  searchField?: ReactNode; // @generated
  startButton?: ReactNode; // @generated
}

/**
 * <code>import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ShellBar" target="_blank">UI5 Web Components Playground</a>
 */
const ShellBar: FC<ShellBarPropTypes> = withWebComponent<ShellBarPropTypes>(UI5ShellBar);

ShellBar.displayName = 'ShellBar';

export { ShellBar };
