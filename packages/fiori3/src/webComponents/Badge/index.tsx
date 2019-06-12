import React, { FC } from 'react';
import UI5Badge from '@ui5/webcomponents/dist/Badge';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface BadgePropTypes extends WithWebComponentPropTypes {
  colorScheme?: string; // @generated
  children?: any[]; // @generated
  icon?: any; // @generated
}

const Badge: FC<BadgePropTypes> = withWebComponent<BadgePropTypes>(UI5Badge);

Badge.displayName = 'Badge';

export { Badge };
