import React from 'react';

import { spacing } from '@ui5/webcomponents-react-base';
import { Select as UI5Select } from '@ui5/webcomponents-react/lib/Select';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import FieldBase from '../FieldBase/FieldBase';

const Select = ({ field, options, labelText, form: { touched, errors, setFieldValue }, style, ...props }) => {
  const errorMsg = touched[field.name] && errors[field.name];
  const errorState = errorMsg ? ValueState.Error : ValueState.None;

  const innerStyle = {
    ...style,
    ...spacing.sapUiTinyMarginBottom,
    width: '100%',
  };

  return (
    <FieldBase labelText={labelText} required={props.required} for={props.for} showColon={props.showColon}>
      <UI5Select data-testid="select-wrapper" valueState={errorState} style={innerStyle} onChange={(e) => setFieldValue(field.name, e.detail.selectedOption.dataset.id)} {...props}>
        {options.map((option) => (
          <Option data-testid="select-option-wrapper" key={option.id} data-id={option.id} selected={option.id === field.value} value={option.id}>
            {option.text}
          </Option>
        ))}
      </UI5Select>
    </FieldBase>
  );
};

export default Select;
