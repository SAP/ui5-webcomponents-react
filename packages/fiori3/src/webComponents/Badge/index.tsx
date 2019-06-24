import UI5Badge from '@ui5/webcomponents/dist/Badge';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface BadgePropTypes extends WithWebComponentPropTypes {
  colorScheme?: string; // @generated
  children?: string; // @generated
  icon?: any; // @generated
}

const Badge: FC<BadgePropTypes> = withWebComponent<BadgePropTypes>(UI5Badge);

Badge.displayName = 'Badge';

export { Badge };
