import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Badge from '@ui5/webcomponents/dist/Badge';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface BadgePropTypes extends WithWebComponentPropTypes {
  colorScheme?: string; // @generated
  children?: string; // @generated
  icon?: any; // @generated
}

/**
 * <code>import { Badge } from '@ui5/webcomponents-react/lib/Badge';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Badge" target="_blank">UI5 Web Components Playground</a>
 */
const Badge: FC<BadgePropTypes> = withWebComponent<BadgePropTypes>(UI5Badge);

Badge.displayName = 'Badge';

Badge.defaultProps = {
  colorScheme: '1' // @generated
};

export { Badge };
