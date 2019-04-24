import React, { FC, ReactNode } from 'react';
import UI5Label from '@ui5/webcomponents/dist/Label';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface LabelPropTypes extends WithWebComponentPropTypes {
  required?: boolean; // @generated
  wrap?: boolean; // @generated
  for?: string; // @generated
  children?: string; // @generated
}

const Label: FC<LabelPropTypes> = withWebComponent<LabelPropTypes>(UI5Label);

Label.displayName = 'Label';

Label.defaultProps = {
  for: '' // @generated
};

export { Label };
