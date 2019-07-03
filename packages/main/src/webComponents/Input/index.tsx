import { Event } from '@ui5/webcomponents-react-base';
import UI5Input from '@ui5/webcomponents/dist/Input';
import React, { FC, ReactNode } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { InputType } from '../../lib/InputType';
import { ValueState } from '../../lib/ValueState';

export interface InputPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  placeholder?: string; // @generated
  readonly?: boolean; // @generated
  type?: InputType; // @generated
  value?: string; // @generated
  valueState?: ValueState; // @generated
  name?: string; // @generated
  showSuggestions?: boolean; // @generated
  onChange?: (event: Event) => void; // @generated
  onInput?: (event: Event) => void; // @generated
  onSubmit?: (event: Event) => void; // @generated
  onSuggestionItemSelect?: (event: Event) => void; // @generated
  icon?: ReactNode; // @generated
  children?: string;
}

const Input: FC<InputPropTypes> = withWebComponent<InputPropTypes>(UI5Input);

Input.displayName = 'Input';

Input.defaultProps = {
  placeholder: null, // @generated
  type: InputType.Text, // @generated
  value: '', // @generated
  valueState: ValueState.None // @generated
};

export { Input };
