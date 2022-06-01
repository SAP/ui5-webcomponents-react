import { TextArea as UI5TextArea, ValueState } from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import React from 'react';

import FieldBase from '../FieldBase/FieldBase';

const TextArea = ({ field, form: { touched, errors }, labelText, rows, style, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const errorState = errorMsg ? ValueState.Error : ValueState.None;

  const { onChange, onBlur, ...formikProps } = field;

  return (
    <FieldBase labelText={labelText} required={props.required} for={props.for} showColon={props.showColon}>
      <UI5TextArea
        data-testid="textArea-wrapper"
        valueState={errorState}
        valueStateMessage={<span>{errorMsg}</span>}
        rows={rows}
        style={style ? style : spacing.sapUiSmallMarginBottom}
        {...props}
        {...formikProps}
        onInput={onChange}
        onChange={onBlur}
      />
    </FieldBase>
  );
};

export default TextArea;
