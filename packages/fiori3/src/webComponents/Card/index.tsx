import UI5Card from '@ui5/webcomponents/dist/Card';
import React, { FC, ReactNode } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CardPropTypes extends WithWebComponentPropTypes {
  heading?: string; // @generated
  subtitle?: string; // @generated
  status?: string; // @generated
  avatar?: string; // @generated
  onHeaderPress?: (event: Event) => void; // @generated
  children?: ReactNode | ReactNode[];
}

const Card: FC<CardPropTypes> = withWebComponent<CardPropTypes>(UI5Card);

Card.displayName = 'Card';

Card.defaultProps = {
  heading: '', // @generated
  subtitle: '', // @generated
  status: '', // @generated
  avatar: null // @generated
};

export { Card };
