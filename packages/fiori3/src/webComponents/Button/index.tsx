import React, { FC } from 'react';
import { ButtonDesign } from '../../lib/ButtonDesign';
import { Event } from '@ui5-webcomponents-react/base';
import UI5Button from '@ui5/webcomponents/dist/Button';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ButtonPropTypes extends WithWebComponentPropTypes {
  design?: ButtonDesign; // @generated
  disabled?: boolean; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  submits?: boolean; // @generated
  onPress?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const Button: FC<ButtonPropTypes> = withWebComponent<ButtonPropTypes>(UI5Button);

Button.displayName = 'Button';

Button.defaultProps = {
  design: ButtonDesign.Default // @generated
};

export { Button };
