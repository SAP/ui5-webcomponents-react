import React, { FC } from 'react';
import UI5Switch from '@ui5/webcomponents/dist/Switch';
import { Event } from '@fiori-for-react/utils';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface SwitchPropTypes extends WithWebComponentPropTypes {
  checked?: boolean; // @generated
  disabled?: boolean; // @generated
  textOn?: string; // @generated
  textOff?: string; // @generated
  onChange?: (event: Event) => void; // @generated
  type?: 'Textual' | 'Graphical';
}

const Switch: FC<SwitchPropTypes> = withWebComponent<SwitchPropTypes>(UI5Switch);

Switch.displayName = 'Switch';

Switch.defaultProps = {
  textOn: '', // @generated
  textOff: '',
  type: 'Textual'
};

export { Switch };
