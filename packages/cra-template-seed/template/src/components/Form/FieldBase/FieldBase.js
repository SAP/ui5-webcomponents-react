import React from 'react';

import { FlexBox, FlexBoxDirection } from '@ui5/webcomponents-react';
import Label from '../Label/Label';

const FieldBase = ({ labelText, ...props }) => {
  return (
    <FlexBox
      data-testid="fieldbase-wrapper"
      direction={props.direction ? props.direction : FlexBoxDirection.Column}
      {...props}
    >
      {labelText && (
        <Label required={props.required} for={props.for} showColon={props.showColon}>
          {labelText}
        </Label>
      )}
      {props.children}
    </FlexBox>
  );
};

export default FieldBase;
