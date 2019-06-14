import React, { FC } from 'react';
import { Event } from '@ui5-webcomponents-react/utils';
import UI5ShellBarItem from '@ui5/webcomponents/dist/ShellBarItem';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ShellBarItemPropTypes extends WithWebComponentPropTypes {
  src?: string; // @generated
  text?: string; // @generated
  onPress?: (event: Event) => void; // @generated
}

const ShellBarItem: FC<ShellBarItemPropTypes> = withWebComponent<ShellBarItemPropTypes>(UI5ShellBarItem);

ShellBarItem.displayName = 'ShellBarItem';

ShellBarItem.defaultProps = {
  src: null // @generated
};

export { ShellBarItem };
