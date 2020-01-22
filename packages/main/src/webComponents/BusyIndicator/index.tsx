import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5BusyIndicator from '@ui5/webcomponents/dist/BusyIndicator';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface BusyIndicatorPropTypes extends WithWebComponentPropTypes {
  size?: BusyIndicatorSize; // @generated
  active?: boolean; // @generated
}

/**
 * <code>import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/BusyIndicator" target="_blank">UI5 Web Components Playground</a>
 */
const BusyIndicator: FC<BusyIndicatorPropTypes> = withWebComponent<BusyIndicatorPropTypes>(UI5BusyIndicator);

BusyIndicator.displayName = 'BusyIndicator';

BusyIndicator.defaultProps = {
  size: BusyIndicatorSize.Large // @generated
};

export { BusyIndicator };
