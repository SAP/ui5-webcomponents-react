import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5ToggleButton from '@ui5/webcomponents/dist/ToggleButton';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ToggleButtonPropTypes extends WithWebComponentPropTypes {
  /**
   * Determines whether the <code>ui5-togglebutton</code> is displayed as pressed.
   */
  pressed?: boolean;
}

/**
 * <code>import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton" target="_blank">UI5 Web Components Playground</a>
 */
const ToggleButton: FC<ToggleButtonPropTypes> = withWebComponent<ToggleButtonPropTypes>(UI5ToggleButton);

ToggleButton.displayName = 'ToggleButton';

ToggleButton.defaultProps = {
  pressed: false
};

export { ToggleButton };
