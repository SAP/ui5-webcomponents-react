import { Event } from '@fiori-for-react/utils';
import UI5Button from '@ui5/webcomponents/dist/Button';
import React, { FC } from 'react';
import { ButtonType } from '../../enums/ButtonType';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ButtonPropTypes extends WithWebComponentPropTypes {
  type?: ButtonType; // @generated
  disabled?: boolean; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  activeIcon?: string; // @generated
  submits?: boolean; // @generated
  onPress?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const Button: FC<ButtonPropTypes> = withWebComponent<ButtonPropTypes>(UI5Button);

Button.displayName = 'Button';

Button.defaultProps = {
  type: ButtonType.Default, // @generated
  icon: null, // @generated
  activeIcon: null // @generated
};

export { Button };
