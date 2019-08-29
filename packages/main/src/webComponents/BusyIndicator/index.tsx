import React, { FC } from 'react';
import { BusyIndicatorType } from '@ui5/webcomponents-react/lib/BusyIndicatorType';
import UI5BusyIndicator from '@ui5/webcomponents/dist/BusyIndicator';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

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
