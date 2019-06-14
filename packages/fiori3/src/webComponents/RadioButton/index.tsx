import React, { FC } from 'react';
import { ValueState } from '../../lib/ValueState';
import { Event } from '@ui5-webcomponents-react/utils';
import UI5RadioButton from '@ui5/webcomponents/dist/RadioButton';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface RadioButtonPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  selected?: boolean; // @generated
  text?: string; // @generated
  valueState?: ValueState; // @generated
  name?: string; // @generated
  value?: string; // @generated
  onSelect?: (event: Event) => void; // @generated
}

const RadioButton: FC<RadioButtonPropTypes> = withWebComponent<RadioButtonPropTypes>(UI5RadioButton);

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
  valueState: ValueState.None // @generated
};

export { RadioButton };
