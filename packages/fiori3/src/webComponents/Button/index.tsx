import { Event } from '@ui5-webcomponents-react/base';
import UI5Button from '@ui5/webcomponents/dist/Button';
import React, { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';
import { ButtonType } from '../../lib/ButtonType';

export interface ButtonPropTypes extends WithWebComponentPropTypes {
  type?: ButtonType; // @generated
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
  type: ButtonType.Default // @generated
};

export { Button };
