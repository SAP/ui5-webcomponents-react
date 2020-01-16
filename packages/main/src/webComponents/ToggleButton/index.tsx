import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5ToggleButton from '@ui5/webcomponents/dist/ToggleButton';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ToggleButtonPropTypes extends WithWebComponentPropTypes {
  design?: ButtonDesign; // @generated
  disabled?: boolean; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  submits?: boolean; // @generated
  pressed?: boolean; // @generated
  onClick?: (event: Event) => void; // @generated
  children?: string; // @generated
}

/**
 * <code>import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton" target="_blank">UI5 Web Components Playground</a>
 */
const ToggleButton: FC<ToggleButtonPropTypes> = withWebComponent<ToggleButtonPropTypes>(UI5ToggleButton);

ToggleButton.displayName = 'ToggleButton';

ToggleButton.defaultProps = {
  design: ButtonDesign.Default // @generated
};

export { ToggleButton };
