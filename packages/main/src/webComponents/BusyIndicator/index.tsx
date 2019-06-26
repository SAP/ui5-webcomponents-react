import UI5BusyIndicator from '@ui5/webcomponents/dist/BusyIndicator';
import React, { FC } from 'react';
import { BusyIndicatorType } from '../../enums/BusyIndicatorType';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface BusyIndicatorPropTypes extends WithWebComponentPropTypes {
  size?: BusyIndicatorType; // @generated
  active?: boolean; // @generated
}

const BusyIndicator: FC<BusyIndicatorPropTypes> = withWebComponent<BusyIndicatorPropTypes>(UI5BusyIndicator);

BusyIndicator.displayName = 'BusyIndicator';

BusyIndicator.defaultProps = {
  size: BusyIndicatorType.Large // @generated
};

export { BusyIndicator };
