import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import UI5ShellBarItem from '@ui5/webcomponents-fiori/dist/ShellBarItem';
import React, { FC } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ShellBarItemPropTypes extends WithWebComponentPropTypes {
  icon?: string; // @generated
  text?: string; // @generated
  onItemClick?: (event: Event) => void; // @generated
}

const ShellBarItem: FC<ShellBarItemPropTypes> = withWebComponent<ShellBarItemPropTypes>(UI5ShellBarItem);

ShellBarItem.displayName = 'ShellBarItem';

export { ShellBarItem };
