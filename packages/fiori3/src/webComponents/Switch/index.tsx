import React, { FC } from 'react';
import { Event } from '@ui5-webcomponents-react/base';
import UI5Switch from '@ui5/webcomponents/dist/Switch';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface SwitchPropTypes extends WithWebComponentPropTypes {
  checked?: boolean; // @generated
  disabled?: boolean; // @generated
  textOn?: string; // @generated
  textOff?: string; // @generated
  graphical?: boolean; // @generated
  onChange?: (event: Event) => void; // @generated
}

const Switch: FC<SwitchPropTypes> = withWebComponent<SwitchPropTypes>(UI5Switch);

Switch.displayName = 'Switch';

export { Switch };
