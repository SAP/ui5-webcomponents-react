import React, { FC } from 'react';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import UI5Button from '@ui5/webcomponents/dist/Button';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ButtonPropTypes extends WithWebComponentPropTypes {
  design?: ButtonDesign; // @generated
  disabled?: boolean; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  submits?: boolean; // @generated
  onClick?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const Button: FC<ButtonPropTypes> = withWebComponent<ButtonPropTypes>(UI5Button);

Button.displayName = 'Button';

Button.defaultProps = {
  design: ButtonDesign.Default // @generated
};

export { Button };
