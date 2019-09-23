import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import UI5Icon from '@ui5/webcomponents/dist/Icon';
import React, { FC } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface IconPropTypes extends WithWebComponentPropTypes {
  src?: string; // @generated
  onPress?: (event: Event) => void; // @generated
}

const Icon: FC<IconPropTypes> = withWebComponent<IconPropTypes>(UI5Icon);

Icon.displayName = 'Icon';

export { Icon };
