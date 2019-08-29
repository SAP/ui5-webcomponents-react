import { Event } from '@ui5/webcomponents-react-base';
import UI5CheckBox from '@ui5/webcomponents/dist/CheckBox';
import React, { FC } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

export interface CheckBoxPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  checked?: boolean; // @generated
  text?: string; // @generated
  valueState?: ValueState; // @generated
  wrap?: boolean; // @generated
  name?: string; // @generated
  onChange?: (event: Event) => void; // @generated
}

const CheckBox: FC<CheckBoxPropTypes> = withWebComponent<CheckBoxPropTypes>(UI5CheckBox);

CheckBox.displayName = 'CheckBox';

CheckBox.defaultProps = {
  valueState: ValueState.None // @generated
};

export { CheckBox };
