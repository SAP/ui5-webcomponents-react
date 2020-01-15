import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Icon from '@ui5/webcomponents/dist/Icon';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface IconPropTypes extends WithWebComponentPropTypes {
  accessibleName?: string; //@generated
  name?: string; // @generated
  showTooltip?: boolean; // @generated
}

const Icon: FC<IconPropTypes> = withWebComponent<IconPropTypes>(UI5Icon);

Icon.defaultProps = {
  showTooltip: false
};

Icon.displayName = 'Icon';

export { Icon };
