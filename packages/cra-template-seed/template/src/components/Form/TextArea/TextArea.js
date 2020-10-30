import React from 'react';

import { spacing } from '@ui5/webcomponents-react-base';
import { TextArea as UI5TextArea } from '@ui5/webcomponents-react/lib/TextArea';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';

import FieldBase from '../FieldBase/FieldBase';

const TextArea = ({ field, form: { touched, errors }, labelText, rows, style, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const errorState = errorMsg ? ValueState.Error : ValueState.None;

  return (
    <FieldBase labelText={labelText} required={props.required} for={props.for} showColon={props.showColon}>
      <UI5TextArea
        data-testid="textArea-wrapper"
        valueState={errorState}
        valueStateMessage={<span>{errorMsg}</span>}
        rows={rows}
        style={style ? style : spacing.sapUiSmallMarginBottom}
        {...props}
        {...field}
      />
    </FieldBase>
  );
};

export default TextArea;
