import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Switch from '@ui5/webcomponents/dist/Switch';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface SwitchPropTypes extends WithWebComponentPropTypes {
  checked?: boolean; // @generated
  disabled?: boolean; // @generated
  textOn?: string; // @generated
  textOff?: string; // @generated
  graphical?: boolean; // @generated
  onChange?: (event: Event) => void; // @generated
}

/**
 * <code>import { Switch } from '@ui5/webcomponents-react/lib/Switch';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Switch" target="_blank">UI5 Web Components Playground</a>
 */
const Switch: FC<SwitchPropTypes> = withWebComponent<SwitchPropTypes>(UI5Switch);

Switch.displayName = 'Switch';

export { Switch };
