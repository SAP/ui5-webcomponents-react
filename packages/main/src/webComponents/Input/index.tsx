import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Input from '@ui5/webcomponents/dist/Input';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

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

/**
 * <code>import { Input } from '@ui5/webcomponents-react/lib/Input';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Input" target="_blank">UI5 Web Components Playground</a>
 */
const Input: FC<InputPropTypes> = withWebComponent<InputPropTypes>(UI5Input);

Input.displayName = 'Input';

Input.defaultProps = {
  placeholder: null, // @generated
  type: InputType.Text, // @generated
  value: '', // @generated
  valueState: ValueState.None // @generated
};

export { Input };
