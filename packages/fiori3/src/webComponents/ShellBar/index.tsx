import React, { FC, ReactNode, ReactNodeArray } from 'react';
import { Event } from '@fiori-for-react/utils';
import UI5ShellBar from '@ui5/webcomponents/dist/ShellBar';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ShellBarPropTypes extends WithWebComponentPropTypes {
  logo?: string; // @generated
  primaryTitle?: string; // @generated
  secondaryTitle?: string; // @generated
  notificationCount?: string; // @generated
  profile?: string; // @generated
  showNotifications?: boolean; // @generated
  showProductSwitch?: boolean; // @generated
  showCoPilot?: boolean; // @generated
  onNotificationsPress?: (event: Event) => void; // @generated
  onProfilePress?: (event: Event) => void; // @generated
  onProductSwitchPress?: (event: Event) => void; // @generated
  onLogoPress?: (event: Event) => void; // @generated
  onCoPilotPress?: (event: Event) => void; // @generated
  onMenuItemPress?: (event: Event) => void; // @generated
  children?: ReactNode | ReactNodeArray; // @generated
  menuItems?: ReactNode | ReactNodeArray; // @generated
  searchField?: ReactNode; // @generated
  icon?: ReactNode; // @generated
}

const ShellBar: FC<ShellBarPropTypes> = withWebComponent<ShellBarPropTypes>(UI5ShellBar);

ShellBar.displayName = 'ShellBar';

ShellBar.defaultProps = {
  logo: null, // @generated
  profile: '' // @generated
};

export { ShellBar };
