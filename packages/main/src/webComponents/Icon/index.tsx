import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Icon from '@ui5/webcomponents/dist/Icon';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface IconPropTypes extends WithWebComponentPropTypes {
  accessibleName?: string; //@generated
  name?: string; // @generated
  showTooltip?: boolean; // @generated
}

/**
 * <code>import { Icon } from '@ui5/webcomponents-react/lib/Icon';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Icon" target="_blank">UI5 Web Components Playground</a>
 */
const Icon: FC<IconPropTypes> = withWebComponent<IconPropTypes>(UI5Icon);

Icon.defaultProps = {
  showTooltip: false
};

Icon.displayName = 'Icon';

export { Icon };
