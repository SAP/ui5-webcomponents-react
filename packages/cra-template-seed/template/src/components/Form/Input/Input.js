import { Input as UI5Input, ValueState } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import React from 'react';
import FieldBase from '../FieldBase/FieldBase';

const Input = ({ field, form: { touched, errors }, labelText, style, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const errorState = errorMsg ? ValueState.Error : ValueState.None;

  const innerStyle = {
    ...style,
    ...spacing.sapUiTinyMarginBottom,
    width: '100%',
  };

  const { onChange, onBlur, ...formikProps } = field;

  return (
    <FieldBase labelText={labelText} required={props.required} for={props.for} showColon={props.showColon}>
      <UI5Input
        data-testid="input-wrapper"
        valueState={errorState}
        valueStateMessage={<span>{errorMsg}</span>}
        style={innerStyle}
        {...props}
        {...formikProps}
        onInput={onChange}
        onChange={onBlur}
      />
    </FieldBase>
  );
};

export default Input;
