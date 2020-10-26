import React from 'react';

import { Switch as UI5Switch } from '@ui5/webcomponents-react/lib/Switch';
import FieldBase from '../FieldBase/FieldBase';

const style = {
  switch: {
    width: 'min-content',
  },
};

const Switch = ({ field, form: { values, setFieldValue }, labelText, ...props }) => {
  const value = values[field.name];

  return (
    <FieldBase labelText={labelText} required={props.required} for={props.for} showColon={props.showColon}>
      <UI5Switch checked={value} onChange={() => setFieldValue(field.name, !value)} style={style.switch} {...props} />
    </FieldBase>
  );
};

export default Switch;
