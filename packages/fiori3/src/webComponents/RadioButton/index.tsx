import { Event } from '@fiori-for-react/utils';
import { ValueState } from '../../lib/ValueState';
import UI5RadioButton from '@ui5/webcomponents/dist/RadioButton';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface RadioButtonPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  readOnly?: boolean; // @generated
  selected?: boolean; // @generated
  text?: string; // @generated
  valueState?: ValueState; // @generated
  group?: string; // @generated
  onSelect?: (event: Event) => void; // @generated
}

const RadioButton: FC<RadioButtonPropTypes> = withWebComponent<RadioButtonPropTypes>(UI5RadioButton);

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
  text: null, // @generated
  valueState: ValueState.None, // @generated
  group: '' // @generated
};

export { RadioButton };
