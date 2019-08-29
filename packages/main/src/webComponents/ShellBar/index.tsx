import React, { FC, ReactNode } from 'react';
import { Event } from '@ui5/webcomponents-react-base';
import UI5ShellBar from '@ui5/webcomponents/dist/ShellBar';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
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
  onNotificationsClick?: (event: Event) => void; // @generated
  onProfileClick?: (event: Event) => void; // @generated
  onProductSwitchClick?: (event: Event) => void; // @generated
  onLogoClick?: (event: Event) => void; // @generated
  onCoPilotClick?: (event: Event) => void; // @generated
  onMenuItemClick?: (event: Event) => void; // @generated
  children?: ReactNode; // @generated
  menuItems?: ReactNode; // @generated
  searchField?: ReactNode; // @generated
  icon?: ReactNode; // @generated
}

const ShellBar: FC<ShellBarPropTypes> = withWebComponent<ShellBarPropTypes>(UI5ShellBar);

ShellBar.displayName = 'ShellBar';

export { ShellBar };
