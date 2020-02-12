import UI5ShellBarItem from '@ui5/webcomponents-fiori/dist/ShellBarItem';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ShellBarItemPropTypes extends WithWebComponentPropTypes {
  icon?: string; // @generated
  text?: string; // @generated
  onItemClick?: (event: Event) => void; // @generated
}

/**
 * <code>import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';</code>
 */
const ShellBarItem: FC<ShellBarItemPropTypes> = withWebComponent<ShellBarItemPropTypes>(UI5ShellBarItem);

ShellBarItem.displayName = 'ShellBarItem';

export { ShellBarItem };
