import React, { FC } from 'react';
import UI5BusyIndicator from '@ui5/webcomponents/dist/BusyIndicator';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { BusyIndicatorType } from '../../enums/BusyIndicatorType';

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
