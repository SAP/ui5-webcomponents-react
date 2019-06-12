import React, { FC } from 'react';
import UI5BusyIndicator from '@ui5/webcomponents/dist/BusyIndicator';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface BusyIndicatorPropTypes extends WithWebComponentPropTypes {
  size?: any; // @generated
  active?: boolean; // @generated
}

const BusyIndicator: FC<BusyIndicatorPropTypes> = withWebComponent<BusyIndicatorPropTypes>(UI5BusyIndicator);

BusyIndicator.displayName = 'BusyIndicator';

export { BusyIndicator };
